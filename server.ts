import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 4173);
const recipientEmail = process.env.CONTACT_TO || process.env.SMTP_USER;

app.use(express.json({ limit: "32kb" }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "missing_fields" });
  }

  if (!recipientEmail) {
    return res.status(500).json({ error: "missing_recipient" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Antema" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Portfolio - nouveau message de ${name}`,
    text: `Nom / entreprise: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom / entreprise:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="white-space: pre-line;">${escapeHtml(message)}</p>
    `,
  });

  res.json({ ok: true });
});

const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));
app.use("/portfoliov2", express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio ready on http://localhost:${port}`);
});

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
