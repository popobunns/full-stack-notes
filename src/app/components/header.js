// components/Header.jsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/images/logo.png" alt="Web Notes Logo" width={32} height={32} />
        <span className="text-lg font-semibold text-gray-800">Web Notes</span>
      </Link>

      {/* Home Button */}
      <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link>
    </header>
  );
}
