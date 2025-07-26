export default function OtpScreen() {
    return (
        <div className="w-[360px] h-[640px] bg-white p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-6">Entre le code</h2>

            {/* 4 champs */}
            <div className="flex space-x-2 mb-4">
                {[...Array(4)].map((_, i) => (
                    <input
                        key={i}
                        maxLength={1}
                        className="w-12 h-12 border border-gray-300 rounded text-center text-2xl"
                    />
                ))}
            </div>

            <p className="text-sm text-gray-600 mb-6">
                Nous avons envoyé un SMS au +243 ... ... 123
            </p>

            <button className="w-full py-3 bg-emerald-600 text-white rounded-lg mb-4">
                Vérifier
            </button>

            <a href="#" className="text-sm text-emerald-600 underline">
                Renvoyer le code (60 s)
            </a>
        </div>
    );
}