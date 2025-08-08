import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'Full Stack Web Notes', 
  description: 'Learning and summary notes for web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
