import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { sendOtp } from './sendSms';

const prisma = new PrismaClient();
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

app.get('/api/therapists', async (req, res) => {
    const therapists = await prisma.therapist.findMany();
    res.json(therapists);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀Server is running on http://localhost:${PORT}`));