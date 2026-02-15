import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">MemoBox</h1>
        <p className="text-xl text-gray-700 mb-8">A modern portfolio with blogs and vlogs</p>
        <p className="text-lg text-gray-600">Explore my blogs and vlogs, or upload your own!</p>
      </div>
    </main>
  );
}
