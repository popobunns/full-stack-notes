import Link from "next/link"; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 text-center mt-20 fade-in-up">Full Stack Web Development Notes</h1>
      <br/>
      {/* Author Note*/}
       <p className="author fade-in-up">By: Jina Yeom</p>
      
      {/* Greeting*/}
      <h2 className="subheading fade-in-up">
        Hey there👋 I'm glad you're here 😁
      </h2>

      {/* Flex row for image + list */}
      <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <h2 className="subheading fade-in-up">Full Stack Summary</h2>
          <Image 
            src="/images/summary.png"
            alt="Summary Image of Full Stack Web Development"
            width={600}
            height={600}
            className="fade-in-up w-150 h-auto"  
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
      <br/>

      {/*Welcome Message*/}

      <div>
        <h2 className="subheading fade-in-up">
          Read below...
        </h2>
        <p className="body">
          If you found yourself on my website, I'm guessing it's safe to say that you're interesting in learning web development, 
          but you may be a bit confused with all the terminology and information that's available out there. And if you're 
          anything like me, this may make you feel a bit of imposter syndrome. 
        </p>
        <p className="body">
          Allow me to be a friendly reminder that this is hard stuff! It's not supposed to be easy. I'm not going to sugar coat it; 
          there is a LOT to learn. However, as long as you dedicate persistent hours and stay disciplined in your self-learning journey, 
          you will succeed. 
        </p>
        <p className="body">
          To give you a little help, I've created this tutorial to help guide your learning journey. It just explains some of the basics
          and breaks down common terminology to help you get started. I've also included some links to official documents for you to 
          further your understanding and learning.
        </p>
        <p className="body">
          With that being said, good luck! And be proud of yourself for starting 🫡
        </p>
        <p className="body">
          - Jina 
        </p>
      
        {/*How to use Guide*/}
        <h2 className="subheading fade-in-up">
          How to Use this Guide 
        </h2>
      </div>


      
    </main>

  );
}
