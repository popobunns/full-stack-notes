import Image from "next/image";
import logo from "./images/logo.png"; 
import './globals.css'
import Link from "next/link";

export const metadata = {
  title: 'Full Stack Web Notes', 
  description: 'Learning and summary notes for web development',
  /* Description helps browsers, search enginers and users know what your page is about*/
}

export default function Header({children}) { 
  return ( 
    <html lang="en">
      <body className="min-h-screen bg-white">
        {/* Top Nav Bar*/}
        <header className="h-16 flex items-center justify-between px-6 shadow-md">
          

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Web Notes Logo" width={32} height={32} />
              <span className="text-lg font-semibold text-gray-800">Web Notes</span>
          </Link>
          
          {/* Home Button */}
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">Home</Link>
        </header>

        {/*Main page content */}
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  )
}