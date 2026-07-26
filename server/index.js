import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5173'] }));
app.use(express.json());

// Create Nodemailer transporter (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact — send email
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Email to you (the portfolio owner)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; color: #f0f0ff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7c3aed, #06b6d4); padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 1.6rem; color: white;">📬 New Message from Portfolio</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #a0a0b8; width: 100px;">From:</td>
                <td style="padding: 10px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a0a0b8;">Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a0a0b8;">Subject:</td>
                <td style="padding: 10px 0; font-weight: 600;">${subject}</td>
              </tr>
            </table>
            <hr style="border: 1px solid rgba(255,255,255,0.08); margin: 20px 0;" />
            <h3 style="color: #a0a0b8; margin-bottom: 12px;">Message:</h3>
            <p style="line-height: 1.7; font-size: 1rem; background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px; border-left: 3px solid #7c3aed;">
              ${message.replace(/\n/g, '<br/>')}
            </p>
          </div>
          <div style="padding: 20px 32px; background: rgba(255,255,255,0.03); text-align: center; color: #606078; font-size: 0.8rem;">
            Sent from Jaiv Patel's Portfolio — jaivpatel.dev
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Jaiv Patel" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 🙌`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; color: #f0f0ff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7c3aed, #06b6d4); padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 1.6rem; color: white;">Hey ${name}! 👋</h1>
          </div>
          <div style="padding: 32px;">
            <p style="font-size: 1rem; line-height: 1.7; color: #a0a0b8;">
              Thanks for reaching out! I've received your message and will get back to you within <strong style="color: #7c3aed;">24 hours</strong>.
            </p>
            <div style="background: rgba(124, 58, 237, 0.1); border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0; font-size: 0.9rem; color: #a0a0b8;"><strong style="color: #f0f0ff;">Your message:</strong><br/><em>${subject}</em></p>
            </div>
            <p style="font-size: 0.9rem; color: #606078;">In the meantime, feel free to check out my work on <a href="https://github.com/JaivPatel07" style="color: #7c3aed;">GitHub</a> or connect on <a href="https://linkedin.com/in/jaivpatel07" style="color: #06b6d4;">LinkedIn</a>.</p>
            <p style="margin-top: 24px; color: #f0f0ff;">Best,<br/><strong>Jaiv Patel</strong></p>
          </div>
        </div>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Nodemailer error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Contact API server running at http://localhost:${PORT}`);
});
