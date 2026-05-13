import type { NextRequest } from "next/server";

interface LeadData {
  nombre: string;
  email: string;
  telefono: string;
  actividad: string;
  cuando: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { nombre, email, telefono, actividad, cuando } = body as LeadData;

  if (!nombre || !email || !telefono || !actividad || !cuando) {
    return Response.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const data: LeadData = { nombre, email, telefono, actividad, cuando };

  const [notionResult, waResult] = await Promise.allSettled([
    createNotionLead(data),
    sendWhatsAppNotification(data),
  ]);

  if (notionResult.status === "rejected") {
    console.error("Notion error:", notionResult.reason);
  }
  if (waResult.status === "rejected") {
    console.error("WhatsApp error:", waResult.reason);
  }

  return Response.json({ success: true });
}

async function createNotionLead(data: LeadData) {
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_LEADS_DB;

  console.log("[Notion] NOTION_LEADS_DB:", dbId ?? "❌ undefined");
  console.log("[Notion] NOTION_TOKEN present:", !!token);

  const payload = {
    parent: { database_id: dbId },
    properties: {
      Nombre: { title: [{ text: { content: data.nombre } }] },
      Email: { email: data.email },
      Teléfono: { phone_number: data.telefono },
      Actividad: { rich_text: [{ text: { content: data.actividad } }] },
      "Cuándo constituir": { select: { name: data.cuando } },
      Estado: { select: { name: "Nuevo" } },
      Origen: { select: { name: "Web constitución" } },
      "Servicio interesado": { select: { name: "Constitución SL" } },
      "Fecha entrada": { date: { start: new Date().toISOString().split("T")[0] } },
    },
  };

  console.log("[Notion] Payload:", JSON.stringify(payload, null, 2));

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await res.text();
  console.log("[Notion] Status:", res.status);
  console.log("[Notion] Response:", responseText);

  if (!res.ok) {
    throw new Error(`Notion API ${res.status}: ${responseText}`);
  }

  return JSON.parse(responseText);
}

async function sendWhatsAppNotification(data: LeadData) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;

  const message =
    `🚀 *Nuevo Lead - Constitución SL GRATIS*\n\n` +
    `👤 Nombre: ${data.nombre}\n` +
    `📧 Email: ${data.email}\n` +
    `📞 Teléfono: ${data.telefono}\n` +
    `🏢 Actividad: ${data.actividad}\n` +
    `📅 Cuándo: ${data.cuando}`;

  if (!accountSid || !authToken || !from) {
    console.log("\n📱 NUEVO LEAD RECIBIDO (WhatsApp no configurado):");
    console.log("─".repeat(50));
    console.log(message.replace(/\*/g, ""));
    console.log("─".repeat(50) + "\n");
    return;
  }

  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: from,
        To: "whatsapp:+34661959962",
        Body: message,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Twilio API ${res.status}: ${text}`);
  }
}
