import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzFM26-zeI7rJnDPbhM2MZFkuSqBFkDnJPeN2LujL-cNL3RHNugLUd9mjeZ8LFf30MCSQ/exec";

export async function POST(req: Request) {
    try {
      const data = await req.json();
  
      const r = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const text = await r.text();
  
      // intenta parsear respuesta del script
      let parsed: any = null;
      try {
        parsed = JSON.parse(text);
      } catch {}
  
      const ok = parsed?.ok === true && r.ok;
  
      return NextResponse.json({
        ok,
        google_status: r.status,
        google: parsed ?? text,
      }, { status: ok ? 200 : 500 });
  
    } catch (err: any) {
      return NextResponse.json(
        { ok: false, error: err?.message ?? "Unknown error" },
        { status: 500 }
      );
    }
  }