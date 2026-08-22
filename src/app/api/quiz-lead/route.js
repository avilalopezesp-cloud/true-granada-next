// Sends two emails via Resend when someone submits the "recibir mi
// recomendación" form at the end of the Adventure Planner: a notification to
// the TRUE Granada inbox with the lead's details + quiz answers, and a
// confirmation to the visitor. Requires RESEND_API_KEY to be set — without
// it, this responds with { ok: false } and the frontend falls back to a
// mailto: link instead of failing silently.
const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export async function POST(request) {
  const { name, email, travelDate, answers, experience } = await request.json();

  if (!email || typeof email !== 'string') {
    return Response.json({ ok: false, reason: 'missing_email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, reason: 'not_configured' }, { status: 501 });
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL || 'TRUE Granada <onboarding@resend.dev>';
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || 'info@betrue.es';
  const answersList = Array.isArray(answers) ? answers : [];
  const answersText = answersList.length ? answersList.map((a) => `• ${a}`).join('\n') : '(sin respuestas registradas)';

  async function sendEmail(payload) {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.ok;
  }

  const notifyOk = await sendEmail({
    from: fromAddress,
    to: notifyTo,
    subject: `Nuevo lead del Adventure Planner — ${experience}`,
    text: `Nombre: ${name || '(no indicado)'}\nEmail: ${email}\nFecha aproximada del viaje: ${travelDate || '(no indicada)'}\n\nExperiencia recomendada: ${experience}\n\nRespuestas del Adventure Planner:\n${answersText}`,
  });

  const userOk = await sendEmail({
    from: fromAddress,
    to: email,
    subject: 'Tu experiencia ideal en Granada — TRUE Granada',
    text: `Hola${name ? ` ${name}` : ''},\n\nGracias por completar nuestro planificador de aventuras. Según lo que nos contaste, esta es tu experiencia ideal:\n\n${experience}\n\nNuestro equipo se pondrá en contacto contigo pronto para ayudarte a organizarla.\n\nUn saludo,\nEquipo TRUE Granada`,
  });

  if (!notifyOk || !userOk) {
    return Response.json({ ok: false, reason: 'send_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
