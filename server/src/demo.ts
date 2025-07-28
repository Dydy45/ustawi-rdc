import 'dotenv/config';
import { sendOtp } from './sendSms';

// Remplace par ton numéro de téléphone
const TEST_PHONE = '+243980166216'; //exemple de numéro
const OTP_CODE = '1234'; // Remplace par le code OTP que tu veux tester

sendOtp(TEST_PHONE, OTP_CODE)
  .then(() => console.log('✅ SMS envoyé avec succès ! (sandbox)'))
    .catch(err => console.error('❌ Échec de l\'envoi du SMS :', err.message));