import Link from "next/link"; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 text-center mt-20 fade-in-up">Full Stack Web Development Notes</h1>
  
      <ul className="mt-12 flex flex-col items-center space-y-4 text-xl text-gray-700">
      <li>
          <Link href="/basics" className="button-link">
          How Servers and Browsers Interact
          </Link>
        </li>
        <li>
          <Link href="/javascript" className="button-link">
          JavaScript
          </Link>
        </li>
        <li>
          <Link href="/jsx" className="button-link">
          JSX
          </Link>
        </li>
        <li>
          <Link href="/react" className="button-link">
          React
          </Link>
        </li>
        <li>
          <Link href="/nextjs" className="button-link">
          Next.js
          </Link>
        </li>
        <li>
          <Link href="/website" className="button-link">
          Creating a Website
          </Link>
        </li>
        <li>
          <Link href="/fetch" className="button-link">
          Fetching Data
          </Link>
        </li>
      </ul>
    </main>

  );
}
