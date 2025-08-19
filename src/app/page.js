import Link from "next/link"; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 text-center mt-20 fade-in-up">Full Stack Web Development Notes</h1>
      <br/>
      {/* Author Note*/}
       <p className="author fade-in-up">By: Jina Yeom</p>


      {/* Flex row for image + list */}
      <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <h2 className="subheading fade-in-up">Full Stack Summary</h2>
          <Image className="fade-in-up"
            src="/images/summary.png"
            alt="Summary Image of Full Stack Web Development"
            width={600}
            height={600}
            />
        </div>
        
        <div>
          <ul className="mt-12 flex flex-col items-left space-y-4 text-xl text-gray-700">
          <li>
              <Link href="/basics" className="button-link fade-in-up">
              How Servers and Browsers Interact
              </Link>
            </li>
            <li>
              <Link href="/javascript" className="button-link fade-in-up">
              JavaScript
              </Link>
            </li>
            <li>
              <Link href="/jsx" className="button-link fade-in-up">
              JSX
              </Link>
            </li>
            <li>
              <Link href="/react" className="button-link fade-in-up">
              React
              </Link>
            </li>
            <li>
              <Link href="/nextjs" className="button-link fade-in-up">
              Next.js
              </Link>
            </li>
            <li>
              <Link href="/website" className="button-link fade-in-up">
              Creating a Website
              </Link>
            </li>
            <li>
              <Link href="/fetch" className="button-link fade-in-up">
              Fetching Data
              </Link>
            </li>
          </ul>
        </div>

      </div>
      
    </main>

  );
}
