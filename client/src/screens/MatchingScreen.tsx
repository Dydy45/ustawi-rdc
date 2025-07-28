export default function MatchingScreen() {
    return (
        <div className="w-[360px] h-[640px] bg-white p-4 flex flex-col items-center">
            {/* Barre de recherche */}
            <input
                type="text"
                placeholder="Spécialité ou langue..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full mb-4 text-sm"
            />

            {/* Carte thérapeute 1 */}
            <div className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-star space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
                <div className="flex-1">
                    <h3 className="font-bold text-base">Dr. Kiese</h3>
                    <p className="text-sm text-gray-600">Psychologue - Anxiété</p>
                    <p className="text-xs text-gray-500">Français, Lingala - 2000fc</p>
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white text-sm px-3 py-1 rounded">
                    Réserver
                </button>
            </div>

            {/* Carte thérapeute 2 */}
            <div className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-star space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
                <div className="flex-1">
                    <h3 className="font-bold text-base">Dr. Mbuyi</h3>
                    <p className="text-sm text-gray-600">Psychothérapeute - Dépression</p>
                    <p className="text-xs text-gray-500">Swahili, Français - 1500fc</p>
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white text-sm px-3 py-1 rounded">
                    Réserver
                </button>
            </div>
        </div>
    );
}