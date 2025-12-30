import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-white tracking-tight">Memovox</span>
            <p className="text-gray-400 text-sm">Organize your life with your voice.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
          
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Memovox. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
