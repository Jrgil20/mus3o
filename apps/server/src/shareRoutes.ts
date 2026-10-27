import { Router } from "express";
import rateLimit from "express-rate-limit";
import { MuseumSchema } from "@mus3o/shared";
import { getSharedMuseum, listRecentSharedMuseums, saveSharedMuseum } from "./shareStore";

export const shareRouter = Router();

const shareLimiter = rateLimit({
  windowMs: 60_000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Demasiadas solicitudes de guardado, intenta en un minuto" },
});

// Guardar un museo para compartir
shareRouter.post("/museums/share", shareLimiter, async (req, res) => {
  const parsed = MuseumSchema.safeParse(req.body?.museum ?? req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Estructura de museo inválida", details: parsed.error.issues });
    return;
  }

  try {
    const record = await saveSharedMuseum(parsed.data);
    res.json({
      ok: true,
      id: record.id,
      createdAt: record.createdAt,
      url: `/m/${record.id}`,
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: "No se pudo guardar el museo para compartir" });
  }
});

// Vitrina comunitaria de museos recientes
shareRouter.get("/museums/community/recent", async (_req, res) => {
  try {
    const list = await listRecentSharedMuseums(12);
    res.json({ ok: true, museums: list });
  } catch {
    res.json({ ok: true, museums: [] });
  }
});

// Obtener un museo compartido por ID
shareRouter.get("/museums/:id", async (req, res) => {
  const { id } = req.params;
  const record = await getSharedMuseum(id);
  if (!record) {
    res.status(404).json({ ok: false, error: "Museo no encontrado" });
    return;
  }

  res.json({
    ok: true,
    id: record.id,
    createdAt: record.createdAt,
    museum: record.museum,
  });
});
