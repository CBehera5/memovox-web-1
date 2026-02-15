import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/80 shadow-md backdrop-blur sticky top-0 z-50">
      <Link href="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700 transition-colors">MemoBox</Link>
      <div className="flex gap-8 text-lg font-medium">
        <Link href="/blogs" className="hover:text-indigo-500 transition-colors">Blogs</Link>
        <Link href="/vlogs" className="hover:text-indigo-500 transition-colors">Vlogs</Link>
        <Link href="/admin" className="hover:text-indigo-500 transition-colors">Admin</Link>
      </div>
    </nav>
  );
}
