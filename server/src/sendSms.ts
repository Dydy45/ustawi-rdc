import 'dotenv/config';
// server/src/sendSms.ts
import Africastalking from 'africastalking';

const credentials = {
    apiKey: process.env.AT_API_KEY!,
    username: process.env.AT_USERNAME!,
};

const sms = Africastalking(credentials).SMS;

export async function sendOtp(phone: string, code: string) {
    const message = `Votre code USTAWI est ${code}. Valable pour 5 minutes.`;
    await sms.send({ to: [phone], message });
    console.log(`SMS emvoyé à ${phone}`);
}