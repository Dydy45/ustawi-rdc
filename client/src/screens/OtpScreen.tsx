import { useState } from "react";

export default function OtpScreen() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const requestOtp = async () => {
    setLoading(true);
    try {
      await fetch("http://localhost:4000/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      alert("Code envoyé ! (regarde la console serveur)");
    } catch {
      alert("Erreur d’envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[360px] h-[640px] bg-white p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-6">Entre le code</h2>

      <input
        type="tel"
        placeholder="+243..."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <button
        onClick={requestOtp}
        disabled={loading}
        className="w-full py-3 bg-emerald-600 text-white rounded-lg"
      >
        {loading ? "Envoi..." : "Recevoir SMS"}
      </button>
    </div>
  );
}
