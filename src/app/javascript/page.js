import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <div className="content-wrapper fade-in-up">
        <h1 className="page-title fade-in-up">JavaScript Notes</h1>
        
        {/* Author Note*/}
        <p className="author">Author: Jina</p>

        {/* Body Text*/}
        <p className="body">This is a quick cheat sheet for learning JavaScript syntax.
          I strongly recommend following a course to understand the details of JavaScript
          as a strong foundational understanding of the syntax is necessary to understand
          other web development tools like TypeScript, Node.js, React, etc.
        </p>


        {/* Body Text*/}
        <h2 className="subheading">Data Types</h2>
        <p className="body"> 
          I'm going to assume you are already aware of the different data types. 
          Here are some examples of JavaScript data types below: 
        </p>
        <Image
          src="/images/variables.png"
          alt="Variable Types in JavaSctipt"
          width={400}
          height={400}
          />
        
        {/* Variable Declaration*/}
        <h2 className="subheading">Data Types</h2>
        <p className="body">
          JavaScript is considered a <span className="font-bold">weakly typed language</span>, which means unlike languages 
          like Java, you do not have to declare which data type goes into the variable. Instead,
          JavaScript will identify the data type for you!
        </p>

          {/* let, const, var*/}
        <h3 className="subsubheading">let, const, var</h3>
        <p className="body">
          However, there are different ways you can initialize a variable in JavaScript:
          <code className="inline-code">let</code>, <code className="inline-code">const</code>,
          and <code className="inline-code">var</code>. Let's study these: 
        </p>

          {/* Stricter Typing in JavaScript*/}
        <h3 className="subsubheading">Stricter Typing in JavaScript</h3>
        <p className="body">
          Remember how I said JavaScript is a weakly typed language? Well, as you can imagine, this can
          cause issues. For instance, since there's no typing, this can cause arguments of incorrect 
          data types to pass through when they shouldn't have. Observe the following example: 
        </p>
        <Image 
          src="/images/typing.png"
          alt="Typing Issues in JavaScript Code Block"
          width={400}
          height={400}
          />
        <p className="body">
          In this example, the purpose of the <code className="inline-code">add()</code>
          function is to sum together two <span className="font-bold">numbers</span>.
          However, since we don't have any strict typing pre-requisites for the parameters 
          provided to the <code className="inline-code">add()</code> function, inappropriate
          parameters, like strings (eg "1") are allowed to pass through. This leads to unexpected
          behaviour like returning a string output instead of a numerical output, as we see in the
          example with <code className="inline-code">add("1", 1)</code>.
        </p>
        <br/>
        <p className="body">
          So, how do we address this? Well we have a few options: 
        </p>
        <ol className="ordered-list font-bold">
          <li className="ordered-item">
            Use TypeScript (static typing)
            <Image 
              src="/images/javascript/typescript.png"
              alt="TypeScript Static Typing of Data Types"
              width={500}
              height={500}
            />
          </li>
          <li className="ordered-item font-bold">
            Manually type verification
            <Image 
              src="/images/javascript/manual-check.png"
              alt="Manual Checking of Data Types"
              width={500}
              height={500}
            />
          </li>
          <li className="ordered-item font-bold">
            Create an assert function
            <Image 
              src="/images/javascript/assert-function.png"
              alt="Creating an Assert Function of Data Types"
              width={500}
              height={500}
            />
          </li>
          <li className="ordered-item font-bold">
            Type coercion
            <Image 
              src="/images/javascript/type-coercion.png"
              alt="Type Coercion of Data Types"
              width={400}
              height={400}
            />
          </li>
        </ol>


      {/* Math Operators */}
      <h2 className="subheading">Math Operators</h2>
      <p className="body">
      Coming soon...
     </p>


      {/* Assignment vs Comparison */}
      <h2 className="subheading">Assignment and Comparison</h2>
      <p className="body">
      Coming soon...
     </p>
     
     {/* Functions*/}
     <h2 className="subheading">Functions</h2>
     <p className="body">
      Coming soon...
     </p>

     {/* Arrays */}
     <h2 className="subheading">Arrays</h2>
     <p className="body">
      Coming soon...
     </p>

     {/* Events*/}
     <h2 className="subheading">Events</h2>
     <p className="body">
      Coming soon...
     </p>


     </div>
    </main>
  );
}