export default function MoodTracker() {
    return (
        <div className="w-[360px] h-[640px] bg-white p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-6">Comment te sens-tu ?</h2>

            {/* Emoji slider */}
            <div className="flex space-x-3 mb-6">
                {["😭", "😟", "😐", "😊", "😁"].map((e, i) => (
                    <button
                        key={i}
                        className="text-4xl w-12 h-12 rounded-full flex items-center justify-center hover:bg-emerald-100"
                    >
                        {e}
                    </button>
                ))}
            </div>

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2 mb-6">
                {["Fatigue", "Stress", "Joie", "Colère"].map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <button className="w-full py-3 bg-emerald-600 text-white rounded-lg">
                Enregistrer
            </button>
        </div>
    );
}