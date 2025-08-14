import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <main className="main-container">
        <div className="content-wrapper fade-in-up">
          <h1 className="page-title fade-in-up">React Notes</h1>
          
          {/* Author Note*/}
          <p className="author">Author: Jina</p>

          {/* React Basics */}
          <h2 className="subheading">React Basics</h2>
          <p className="body">
            Now, let's talk about React. Simply put, React is a JavaScript framework 
            created by Facebook to make it faster/easier to build applications. 
            The general idea is that we create <span className="font-bold">react elements </span>
            (ie building blocks). <span className="font-bold">React elements</span> describe the
            building blocks of what you see on the screen (eg html tags like:)
          </p>
          <Image 
            src="/images/react/react-element.png"
            alt="Code block of a react element"
            width={400}
            height={400}
            className="fade-in-up rounded-lg"
          />
          <br/>
          <p className="body">
            <span className="font-bold">React components</span> are functions or classes that
            return <span className="font-bold">React elements</span>. You can think of 
            <span className="font-bold"> React components</span> as the blueprint for a building
            and <span className="font-bold">React elements</span> as the bricks that are used
            to build with. 
          </p>
          <Image 
            src="/images/react/react-component.png"
            alt="Code block of a react component"
            width={300}
            height={300}
            className="fade-in-up rounded-lg"
          />
          <br/>
          <p className="body">
            The hierarchial collection of React componenents determine the UI appearance and
            behavior, thus they make up the <span className="font-bold">React app</span>.
          </p>
          <p className="body">
            Here's a summary of the relationship between all of these React parts:
          </p>
          <Image 
            src="/images/react/summary.png"
            alt="Summary image showing relationship between react elements, components, and apps"
            width={400}
            height={400}
          />
          <br />
          <p className="body">
            In summary, React takes our React functions (which are written with JSX), and
            transforms them into an optimal form for the browser, again, aking it easier to 
            build applications.
          </p>


          {/* React Basics */}
          <h2 className="subheading">React Component Example</h2>
          <p className="body">
            Here is an example of creating a React component.
          </p>
          <ol className="ordered-list">
            
          </ol>

        </div>
      </main>
    );
  }