// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="h-16 flex items-center justify-between px-6 shadow-md bg-gray-100 text-gray-700 text-sm">
        <p>© 2025 Jina Y. All rights reserved.</p>
  
        <div className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a 
            href="https://www.linkedin.com/in/jinayeom/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }
  