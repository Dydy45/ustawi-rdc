export default function SplashScreen() {
  return (
    <div className="w-[360px] h-[640px] bg-white flex flex-col items-center justify-center">
        <div className="w-30 h-30 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl">🍀</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">USTAWI</h1>
        <p className="text-sm text-gray-600 mt-2">Soins mentaux accessibles & anonymes</p>
        <div className="mt-12 w-8 h-8 border-4 border-emerald-600 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}