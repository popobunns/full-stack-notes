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
          <h2 className="subheading">1. React Basics</h2>
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
            className="fade-in-up rounded-lg"
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
            <li className="ordered-item">
              Initialize a function
            </li>
            <Image 
              src="/images/react/initialize-function.png"
              alt="Code block for initializing a React function"
              width={300}
              height={300}
              className="fade-in-up rounded-lg"
            />
            
            <li className="ordered-item">
              Return a JSX component (ie React element)
            </li>
            <Image 
              src="/images/react/return-jsx.png"
              alt="Code block for returning a JSX element in React function"
              width={400}
              height={400}
              className="fade-in-up rounded-lg"
            />

            <li className="ordered-item">
              Another option is to return another function within a React function
            </li>
            <Image 
              src="/images/react/return-function.png"
              alt="Code block for returning another React function in React function"
              width={400}
              height={400}
              className="fade-in-up rounded-lg"
            />
          </ol>
          <p className="body">
            What if we really want to be fancy and return more than one element? 
            Do you think this is allowed?
          </p>
          <p className="body">
            The answer is <span className="font-bold">NO! </span>
            JSX expressions carry only one parent element, which means React components 
            can only return <span className="font-bold">ONE</span> parent element. 
          </p>

        {/* Returning more than one parent element in React component */}
        <h2 className="subheading">Returning Multiple Parent Elements in React Components</h2>
          <p className="body">
            In React, to return more than one element, you must wrap the elements within 
            a <code className="inline-code">{"<div> </div>"}</code> container. Because that
            way, it still adheres to the single parent element principle.
          </p>
          <Image 
            src="/images/react/div-container.png"
            alt="Code block for hiding multiple parent elements within a single div container in React componenet"
            width={400}
            height={400}
            className="fade-in-up rounded-lg"
          />

          {/* React Components and Props */}
        <h2 className="subheading">2. React Components and Passing in Props</h2>
        <p className="body">
          Now, we will explore an important concept in React components: <span className="font-bold">
          props and objects</span>. Remember React components are functions/classes that can take in 
          parameters. Objects can be passed in as parameters to React components. We can also do what's 
          called <span className="font-bold">"passing in props"</span>, which is when we pass in attributes 
          to react components. When we pass these attributes in, they actually get passed in as a single 
          object parameter, with those attributes grouped together. This is called the <span 
          className="font-bold">props object</span>.
        </p>
        <Image 
          src="/images/react/dot-notation.png"
          alt="Code block of React component accessing props object's attributes via dot notation"
          width={400}
          height={300}
          className="fade-in-up rounded-lg"
        />
        <br/>
        <p className="body italics">
          In this example, the <span className="font-bold">parent component</span> is 
          <code className="inline-code">App()</code> and the <span className="font-bold">
            child component</span> is <code className="inline-code">RestaurantInfo(props)</code>.
          As you can see, the attributes passed into <code className="inline-code">RestaurantInfo(props)</code>
          are <code className="inline-code">name</code>, <code className="inline-code">size</code>, 
          <code className="inline-code">cuisineType</code>, and <code className="inline-code">staffNumber</code>. 
          These attributes are passed into the child component as a <span className="font-bold">single
          props object</span>. <code className="inline-code">RestaurantInfo(props)</code> then renders the 
          JSX elements, which are translated into HTML elements then rendered on the browser. 
        </p>

        {/* Accessing Props Attributes*/}
        <h3 className="subsubheading">Accessing Props Attributes</h3>
          <p className="body">
            Now that we understand the concept of props, it's now time to learn how to access the 
            attributes of these props. There are two general ways to access props' attributes. 
          </p>
          <ol className="ordered-list">
            <li className="ordered-item"><span className="font-bold">Dot Notation</span>
              <p className="body ml-5">
                The example you see before is using <span className="font-bold">dot notation </span>
                to access the attributes within the props object. The syntax is: 
                <code className="inline-code body ml-5">props.attribute</code>
              </p>
            </li>
            <li className="ordered-item"><span className="font-bold">Destructuring Props</span>
              <p className="body ml-5">
              This method of accessing attributes is less verbose so it is often preferred over the dot 
              notation.
              </p>
            </li>
            <Image 
              src="/images/react/destructuring.png"
              alt="Code block of React component using destructuring method to access props' attributes"
              width={450}
              height={400}
              className="fade-in-up rounded-lg ml-5"
            />
          </ol>

          <p className="body">
            For more information about props in React, refer to this official document from React.
          </p>
          <Link
            href="https://react.dev/learn/passing-props-to-a-component"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800">
            Passing Props in React
          </Link>

          {/* Accessing Props Attributes*/}
          <h2 className="subheading">3. Useful Resources for React Components</h2>
          Here are a few resources for writing certain React components. 

          {/* Adding Images*/}
          <h3 className="subsubheading">Adding Images in React</h3>
          

          {/* Adding Images*/}
          <h3 className="subsubheading">Adding Links in React</h3>


        </div>
      </main>
    );
  }