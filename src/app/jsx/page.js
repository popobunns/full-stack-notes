import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <main className="main-container">
        <div className="content-wrapper fade-in-up">
          <h1 className="page-title fade-in-up">JSX Notes</h1>
          
          {/* Author Note*/}
          <p className="author">Author: Jina</p>

          {/* Body Text*/}
        <p className="body">
          JSX is an extension of JavaScript syntax that looks like HTML inside JavaScript.
          It definitely is NOT required; but it certainly makes it a lot easier to read
          JavaScript. One important note to understand is that browsers do not understand JSX
          directly. Instead, we need frameworks like Next.js to translate JSX into JavaScript.
        </p>
        <p className="body">
          Below are some ways that JavaScript and JSX look different. We will compare 
          React without JSX vs React with JSX to illustrate how efficient JSX is. 
        </p>

        {/* Attributes and Props */}
        <h3 className="subsubheading">
          Attributes and Props
        </h3>
        <p className="body">
          Before we start, it's important to understand <code className="inline-code">
          React.createElement(type, props, children)</code>.
          The parameters for this <code className="inline-code">React.createElement()</code>
          is:
        </p>
        <ul className="body list-disc pl-6 space-y-1">
          <li><span className="font-bold">type:</span> the DOM tags we are creating (eg "div", "button", etc)</li>
          <li><span className="font-bold">props:</span> attributes and event handlers (eg className, id, onClick, etc)</li>
          <li><span className="font-bold">children:</span> element's children (eg strings, numbers, etc)</li>
        </ul>
        <p className="body">
          Now we've acquainted ourselves with this function, let's look into the differences between
          React + JavaScript vs React + JSX: 
        </p>
        <Image className="fade-in-up"
          src="/images/jsx/attributes.png"
          alt="React without JSX vs with JSX for Attributes and Props"
          width={500}
          height={500}
        />
        <p className="body">
          Notice how in the "React without JSX" example, we have an example where
          we have to use the <code className="inline-code">React.createElement()</code>
          function, which starts to get clunky.
          Whereas with the "React with JSX" example, it's much easier to write and read. 
          The general structure is:
          </p>
        <br/>
        <p className="body">
          <code className="inline-code">{"<tag>"}</code> + attributes/event handlers
          + text + <code className="inline-code">{"</tag>"}</code>
        </p>
        
        {/* Dynamic Values */}
        <h3 className="subsubheading">
          Dynamic Values
        </h3>
        <p className="body">
          A powerful feature of JSX is that we can solely re-load dynamic information
          while keeping the static information the same, which makes renderig efficient. 
        </p>
        <Image className="fade-in-up"
          src="/images/jsx/dynamic.png"
          alt="React without JSX vs with JSX for Dynamic Information"
          width={500}
          height={500}
        />
        <p className="body">You're probably starting to get the idea that JSX 
          definitely makes it easier to read code. Here's more information if you're
          interested: <Link 
          href="https://legacy.reactjs.org/docs/introducing-jsx.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800">
          Introducing JSX
        </Link>
        </p>
       </div>
      </main>
    );
  }