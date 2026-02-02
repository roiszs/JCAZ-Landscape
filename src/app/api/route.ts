import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // TODO: aquí mandaremos a Google Sheets (Apps Script) o email
  // Por ahora: validación mínima y OK
  if (!data?.firstName || !data?.lastName || !data?.phone || !data?.address) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // ✅ debug temporal (NO en producción):
  // console.log("Estimate lead:", data);

  return NextResponse.json({ ok: true });
}
