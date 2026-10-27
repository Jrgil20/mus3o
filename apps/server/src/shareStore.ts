import { randomBytes } from "node:crypto";
import { mkdir, readdir, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { MuseumSchema, type Museum } from "@mus3o/shared";

export type SharedMuseumRecord = {
  id: string;
  createdAt: number;
  museum: Museum;
};

export type SharedMuseumSummary = {
  id: string;
  title: string;
  roomCount: number;
  createdAt: number;
};

const storageDir = () => {
  const dir = process.env.SHARED_MUSEUMS_DIR;
  return resolve(dir && dir !== "undefined" ? dir : ".cache/shared_museums");
};

const ID_REGEX = /^[A-Za-z0-9_-]{6,16}$/;

/** Genera un identificador aleatorio de 8 caracteres url-safe. */
export function generateShareId(): string {
  return randomBytes(6)
    .toString("base64url")
    .replace(/[^A-Za-z0-9_-]/g, "x")
    .slice(0, 8);
}

const fileForId = (id: string) => join(storageDir(), `${id}.json`);

/** Guarda un museo y devuelve su identificador único. */
export async function saveSharedMuseum(museum: Museum, customId?: string): Promise<SharedMuseumRecord> {
  const parsedMuseum = MuseumSchema.parse(museum);
  const id = customId && ID_REGEX.test(customId) ? customId : generateShareId();
  const dir = storageDir();
  const target = fileForId(id);
  const tmp = `${target}.${process.pid}.${randomBytes(4).toString("hex")}.tmp`;

  const record: SharedMuseumRecord = {
    id,
    createdAt: Date.now(),
    museum: parsedMuseum,
  };

  await mkdir(dir, { recursive: true });
  try {
    await writeFile(tmp, JSON.stringify(record, null, 2), "utf8");
    await rename(tmp, target);
    return record;
  } catch (err) {
    await unlink(tmp).catch(() => {});
    throw err;
  }
}

/** Recupera un museo compartido por su ID. Devuelve null si no existe o está corrupto. */
export async function getSharedMuseum(id: string): Promise<SharedMuseumRecord | null> {
  if (!ID_REGEX.test(id)) return null;
  const target = fileForId(id);
  try {
    const raw = await readFile(target, "utf8");
    const json = JSON.parse(raw);
    const museumParsed = MuseumSchema.safeParse(json.museum);
    if (!museumParsed.success) return null;
    return {
      id: String(json.id || id),
      createdAt: Number(json.createdAt) || Date.now(),
      museum: museumParsed.data,
    };
  } catch {
    return null;
  }
}

/** Lista los museos compartidos más recientes para la vitrina comunitaria. */
export async function listRecentSharedMuseums(limit = 12): Promise<SharedMuseumSummary[]> {
  const dir = storageDir();
  try {
    const files = await readdir(dir);
    const jsonFiles = files.filter((f) => f.endsWith(".json") && !f.includes(".tmp"));

    const summaries: SharedMuseumSummary[] = [];
    for (const f of jsonFiles) {
      try {
        const filePath = join(dir, f);
        const [raw, fileStat] = await Promise.all([readFile(filePath, "utf8"), stat(filePath)]);
        const json = JSON.parse(raw);
        if (json.museum && json.museum.title) {
          summaries.push({
            id: String(json.id || f.replace(".json", "")),
            title: String(json.museum.title).slice(0, 80),
            roomCount: Array.isArray(json.museum.rooms) ? json.museum.rooms.length : 1,
            createdAt: Number(json.createdAt) || fileStat.mtimeMs,
          });
        }
      } catch {
        // Ignora archivos dañados
      }
    }

    // Ordenar de más reciente a más antiguo
    return summaries.sort((a, b) => b.createdAt - a.createdAt).slice(0, limit);
  } catch {
    return [];
  }
}
