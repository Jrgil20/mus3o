import { describe, expect, it, beforeAll, afterAll, beforeEach } from "vitest";
import type { AddressInfo } from "node:net";
import type { Server } from "node:http";
import { app } from "./app";
import { sampleMuseum } from "@mus3o/shared";
import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const testDir = resolve(".cache/test_shared_routes");
process.env.SHARED_MUSEUMS_DIR = testDir;

describe("shareRoutes", () => {
  let server: Server;
  let base: string;

  beforeAll(async () => {
    server = app.listen(0);
    await new Promise((r) => server.once("listening", r));
    base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  afterAll(() => new Promise((r) => server.close(r)));

  beforeEach(async () => {
    await rm(testDir, { recursive: true, force: true }).catch(() => {});
  });

  it("POST /api/museums/share saves museum and returns ID and url", async () => {
    const res = await fetch(`${base}/api/museums/share`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ museum: sampleMuseum }),
    });

    expect(res.status).toBe(200);
    const body = (await res.json()) as { ok: boolean; id: string; url: string };
    expect(body.ok).toBe(true);
    expect(body.id).toHaveLength(8);
    expect(body.url).toBe(`/m/${body.id}`);

    // Fetch back via GET /api/museums/:id
    const getRes = await fetch(`${base}/api/museums/${body.id}`);
    expect(getRes.status).toBe(200);
    const getBody = (await getRes.json()) as { ok: boolean; museum: typeof sampleMuseum };
    expect(getBody.ok).toBe(true);
    expect(getBody.museum.title).toBe(sampleMuseum.title);
  });

  it("POST /api/museums/share rejects invalid payloads with 400", async () => {
    const res = await fetch(`${base}/api/museums/share`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ museum: { invalid: true } }),
    });

    expect(res.status).toBe(400);
    const body = (await res.json()) as { ok: boolean };
    expect(body.ok).toBe(false);
  });

  it("GET /api/museums/:id returns 404 for unknown IDs", async () => {
    const res = await fetch(`${base}/api/museums/unknown99`);
    expect(res.status).toBe(404);
    const body = (await res.json()) as { ok: boolean };
    expect(body.ok).toBe(false);
  });

  it("GET /api/museums/community/recent lists shared museums", async () => {
    await fetch(`${base}/api/museums/share`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ museum: sampleMuseum }),
    });

    const res = await fetch(`${base}/api/museums/community/recent`);
    expect(res.status).toBe(200);
    const body = (await res.json()) as { ok: boolean; museums: unknown[] };
    expect(body.ok).toBe(true);
    expect(Array.isArray(body.museums)).toBe(true);
    expect(body.museums.length).toBeGreaterThanOrEqual(1);
  });
});
