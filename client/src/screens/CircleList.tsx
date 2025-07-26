export default function CircleList() {
    return (
        <div className="w-[360px] h-[640px] bg-white p-4 flex flex-col">
            {/* Titre*/}
            <h2 className="text-xl font-bold mb-4">Cercles de soutien</h2>

            {/* Segmented control */}
            <div className="flex h-10 mb-4 rounded-lg border border-gray-300">
                <button className="flex-1 bg-emerald-600 text-white rounded-l-md">
                    Mes Cercles
                </button>
                <button className="flex-1 text-gray-600 rounded-r-md">
                    Explorer
                </button>
            </div>

            {/* Carte cercle 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm">
                    🟢
                </div>
                <div>
                    <h3 className="font-bold">Jeunes & Anxiété</h3>
                    <p className="text-xs text-gray-600">8 membres - Prochain lun. 20h</p>
                </div>
            </div>

            {/* Carte cercle 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm">
                    🔵
                </div>
                <div>
                    <h3 className="font-bold">Parents solo</h3>
                    <p className="text-xs text-gray-600">12 membres - Prochain mar. 19h</p>
                </div>
            </div>

            {/* FAB */}
            <button className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 text-white rounded-full text_2xl">
                +
            </button>
        </div>
    );
}