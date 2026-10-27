import { describe, expect, it, beforeEach } from "vitest";
import { generateShareId, getSharedMuseum, listRecentSharedMuseums, saveSharedMuseum } from "./shareStore";
import { sampleMuseum, type Museum } from "@mus3o/shared";
import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const testDir = resolve(".cache/test_shared_museums");
process.env.SHARED_MUSEUMS_DIR = testDir;

describe("shareStore", () => {
  beforeEach(async () => {
    await rm(testDir, { recursive: true, force: true }).catch(() => {});
  });

  it("generates 8-character url-safe IDs", () => {
    const id = generateShareId();
    expect(id).toHaveLength(8);
    expect(/^[A-Za-z0-9_-]{8}$/.test(id)).toBe(true);
  });

  it("saves and retrieves a valid museum", async () => {
    const record = await saveSharedMuseum(sampleMuseum);
    expect(record.id).toHaveLength(8);
    expect(record.museum.title).toBe(sampleMuseum.title);

    const retrieved = await getSharedMuseum(record.id);
    expect(retrieved).not.toBeNull();
    expect(retrieved?.museum.title).toBe(sampleMuseum.title);
    expect(retrieved?.id).toBe(record.id);
  });

  it("returns null for non-existent IDs or invalid formats", async () => {
    expect(await getSharedMuseum("non-existent")).toBeNull();
    expect(await getSharedMuseum("../../etc/passwd")).toBeNull();
    expect(await getSharedMuseum("")).toBeNull();
  });

  it("lists recent shared museums sorted by date", async () => {
    const m1: Museum = { ...sampleMuseum, title: "Museum Alpha" };
    const m2: Museum = { ...sampleMuseum, title: "Museum Beta" };

    const r1 = await saveSharedMuseum(m1);
    await new Promise((r) => setTimeout(r, 10));
    const r2 = await saveSharedMuseum(m2);

    const list = await listRecentSharedMuseums(10);
    expect(list.length).toBeGreaterThanOrEqual(2);
    expect(list[0].id).toBe(r2.id);
    expect(list[0].title).toBe("Museum Beta");
    expect(list[1].id).toBe(r1.id);
    expect(list[1].title).toBe("Museum Alpha");
  });
});
