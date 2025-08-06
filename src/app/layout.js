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
        <header className="h-16 flex items-center justify-end px-6 shadow-md">
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