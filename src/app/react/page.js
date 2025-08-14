import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <main className="main-container">
        <div className="content-wrapper fade-in-up">
          <h1 className="page-title fade-in-up">React Notes</h1>
          
          {/* Author Note*/}
          <p className="author">Author: Jina</p>

          <p className="body">
            Now, let's talk about React. Simply put, React is a JavaScript framework 
            created by Facebook to make it faster/easier to build applications. 
            The general idea is that we create <span className="font-bold">react elements</span>
            (ie building blocks). <span className="font-bold">React elements</span> describe the
            building blocks of what you see on the screen (eg html tags like:
          </p>
          <Image className="fade-in-up rounded-lg"
            src="/images/react/react-element.png"
            alt="Code block of a react element"
            width={400}
            height={400}
          />
        </div>
      </main>
    );
  }