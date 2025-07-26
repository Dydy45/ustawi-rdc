export default function LanguageSelect() {
    return (
        <div className="w-[360px] h-[640px] bg-white p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-8">Bienvenu / Boyei malamu</h2>
            {[
                { lang: "Français", key: "fr" },
                { lang: "Lingala", key: "ln" },
                { lang: "Swahili", key: "sw" },
                { lang: "Tshiluba", key: "lu" },
            ].map((l) => (
                <button
                    key={l.key}
                    className="w-full mb-4 py-3 border border-gray-300 rounded-lg text-base"
                >
                    {l.lang}
                </button>
            ))}
            <button className="w-full mt-auto py-3 bg-emerald-600 text-white rounded-lg">
                Continuer
            </button>
        </div>
    );
}