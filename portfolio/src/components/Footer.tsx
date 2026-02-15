import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 bg-gray-100 mt-10 text-gray-500 border-t border-gray-200">
      <p className="text-sm">&copy; {new Date().getFullYear()} MemoBox. All rights reserved.</p>
    </footer>
  );
}
