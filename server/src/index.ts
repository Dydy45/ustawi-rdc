import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { sendOtp } from './sendSms';

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Assurez-vous que le port correspond à votre client React
}));

app.post('/api/send-otp', async (req, res) => {
    const { phone } = req.body;
    const code = Math.floor(1000 + Math.random() * 9000).toString(); // Génère un code OTP aléatoire
    try {
        await sendOtp(phone, code);
        res.json({ success: true, code });
    } catch (err: any) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 4000;
const therapists = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data/therapists.json'), 'utf-8'));

// Stockage en mémoire
const appointments: any[] = [];

// POST /api/appointments
app.post('/api/appointments', (req, res) => {
  const { therapistId, userPhone, date } = req.body;
  const exists = appointments.find(
    (a) => a.therapistId === Number(therapistId) && a.date === date
  );
  if (exists) return res.status(409).json({ error: 'Créneau déjà pris' });

  const apt = {
    id: Date.now(),
    therapistId: Number(therapistId),
    userPhone,
    date,
  };
  appointments.push(apt);
  res.json(apt);
});

// GET /api/appointments
app.get('/api/appointments', (_req, res) => {
  const enriched = appointments.map((a) => ({
    ...a,
    therapistName: therapists.find((t) => t.id === a.therapistId)?.name || 'Inconnu',
  }));
  res.json(enriched);
});

// ====== SMS de rappel automatique ======
function sendReminder() {
  const now = new Date();
  appointments.forEach((apt) => {
    const diff = new Date(apt.date).getTime() - now.getTime();
    const twoHours = 2 * 60 * 60 * 1000;
    if (diff > 0 && diff < twoHours) {
      sendOtp(apt.userPhone, `Rappel : RDV avec thérapeute ${apt.therapistId} à ${apt.date}`)
        .catch(console.error);
    }
  });
}
setInterval(sendReminder, 30 * 60 * 1000);

app.listen(PORT, () => console.log(`🚀Server is running on http://localhost:${PORT}`));