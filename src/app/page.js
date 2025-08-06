import Link from "next/link"; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 text-center mt-20">Full Stack Web Development Notes</h1>
  
      <ul className="mt-12 space-y-4 text-xl text-gray-700">
        <li>
          <Link href="/javascript" className="hover:text-blue-600">
          JavaScript
          </Link>
        </li>
        <li>
          <Link href="/jsx" className="hover:text-blue-600">
          JSX
          </Link>
        </li>
        <li>
          <Link href="/react" className="hover:text-blue-600">
          React
          </Link>
        </li>
        <li>
          <Link href="/nextjs" className="hover:text-blue-600">
          Next.js
          </Link>
        </li>
      </ul>
    </main>

  );
}
