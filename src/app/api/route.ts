import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzaeqMltc8dZyLoqf4Se3uOvu5tp2p0pizQcq8kHuDbjDdF-YXiVnOd96eoVjmWkR4JOA/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const r = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const text = await r.text();

    return NextResponse.json({ ok: true, google: text });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
