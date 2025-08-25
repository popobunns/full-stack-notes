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
        <p className="body">
          Here's the link to the official web documents for JavaScript:
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800">
            JavaScript MDN Web Docs
          </Link> 

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
          className="fade-in-up rounded-lg"
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
          className="fade-in-up rounded-lg"
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
              className="fade-in-up rounded-lg"
            />
          </li>
          <li className="ordered-item font-bold">
            Manually type verification
            <Image 
              src="/images/javascript/manual-check.png"
              alt="Manual Checking of Data Types"
              width={500}
              height={500}
              className="fade-in-up rounded-lg"
            />
          </li>
          <li className="ordered-item font-bold">
            Create an assert function
            <Image 
              src="/images/javascript/assert-function.png"
              alt="Creating an Assert Function of Data Types"
              width={500}
              height={500}
              className="fade-in-up rounded-lg"
            />
          </li>
          <li className="ordered-item font-bold">
            Type coercion
            <Image 
              src="/images/javascript/type-coercion.png"
              alt="Type Coercion of Data Types"
              width={400}
              height={400}
              className="fade-in-up rounded-lg"
            />
          </li>
        </ol>


      {/* ARITHMETIC */}
      <h2 className="subheading">Arithmetic</h2>
      <p className="body">
      Below is a useful table to remember some common arithmetic symbols in JavaScript:
     </p>
     <Image 
      src="/images/javascript/arithmetic.png"
      alt="Table of Arithmetic Operations in JavaScript"
      width={400}
      height={400}
      className="fade-in-up rounded-lg"
      />

      {/* ASSIGNMENT, COMPARISON, AND LOGICAL OPERATIONS */}
      <h2 className="subheading">Assignment, Comparison, and Logical Operations</h2>
      <p className="body">
      Assignment, comparison, and logical oeprational syntax in JavaScript is similar to other programming languages, 
      however there are a few differences that I have highlighted in orange below: 
     </p>
     <Image 
      src="/images/javascript/operations.png"
      alt="Table of JavaScript Assignment, Comparison, and Logical Operations"
      width={500}
      height={500}
      className="fade-in-up rounded-lg"
     />
     <p className="body italic">
      NOTE: In JavaScript, <code className="inline-code">==</code> and <code className="inline-code">===</code> mean different
      comparisons. <code className="inline-code">==</code> employs type conversion to assess whether or not these values are 
      equivalent. For instance, <code className="inline-code">2 == "2"</code> gets translated to <code className="inline-code">2 == 2</code>,
      which evaluates to <code className="inline-code">true</code>. 
      Whereas <code className="inline-code">===</code> is <span className="font-bold">type sensitive</span>, so <code className="inline-code">2 == "2"</code> would
      evaluate to <code className="inline-code">false</code> since numbers and strings are not equivalent.
    </p>

     
     {/* FUNCTIONS*/}
     <h2 className="subheading">Functions</h2>
     <p className="body">
      Now functions are what give JavaScript the chance to be powerful. Before we get into it, you may have heard the terms 
      <span className="font-bold"> function</span> and <span className="font-bold">methods</span> be used interchangeably. 
      <span className="font-bold">Functions</span> can exist on their own, whereas <span className="font-bold">methods</span> are functions that sit inside objects. 
      Methods act on the object they belong to.
     </p>
     <br/>
     <p className="body">Now, let's start off by going over the few ways functions can be created in JavaScript.</p>
     
     {/* Function Declaration */}
     <h3 className="subsubheading">1)  Function Declaration</h3>
      <p className="body">
        <span className="font-bold">Function declarations</span> hoist functions to the <span className="font-bold">global scope</span>.
        This means that this function will be accessible everywhere else in the script. It is also <span className="font-bold">order dependent</span>, 
        so if you want <code className="inline-code">function second()</code> to use <code className="inline-code">function first()</code>, then you must declare 
        <code className="inline-code">function first()</code> first. 
      </p>
      <Image 
        src="/images/javascript/function/function-declaration.png"
        alt="Code block demonstrating function declaration ordering"
        width={500}
        height={500}
        className="fade-in-up rounded-lg"
      />
      <p className="body">
        In this example, we see two functions, both which are intiialized via function declaration. Thus, they are available at the global
        scope. If <code className="inline-code">function second()</code> was declared first, then this code would return error 
        since the body of  <code className="inline-code">function second()</code> relies on  <code className="inline-code">function first()</code>
        (ie order dependent).
      </p>

      {/* Function Expression */}
     <h3 className="subsubheading">2) Function Expression</h3>
      <p className="body">
        In simple terms, we are placing a no-name function into a variable. Best practice is to place the function expression inside a 
        <code className="inline-code">const</code> declared variable. The reason for this is to prevent accidental reassignment
        (ie we don't want to accidentally overwrite the variable to which this function is assigned to, because doing so would mean 
        losing access to this function). See below for an example: 
      </p>
      <Image 
        src="/images/javascript/function/function-expression.png"
        alt="Code block of function expression"
        width={300}
        height={300}
        className="fade-in-up rounded-lg"
      />
      {/* IIFE */}
     <h3 className="subsubheading">3) Immediately Invoked Function Expression (IIFE)</h3>
      <p className="body">
        IIFEs are used when you want a function that is executed immediately after it is defined. See below 
        for an example: 
      </p>
      <Image 
        src="/images/javascript/function/iife.png"
        alt="Code block of immediately invoked function expression"
        width={400}
        height={400}
        className="fade-in-up rounded-lg"
      />
      <p className="body italic">
        NOTE: Remember, the <code className="inline-code">();</code> that follows the IIFE is what
        invokes the IIFE so it can run as soon as it has been defined. 
      </p>
      
    {/* Arrow Functions */}
    <h3 className="subsubheading">Arrow Functions</h3>
    <p className="body">
      Now let's look at <span className="font-bold">arrow functions</span>.
      Here's how to transform a standard function into an arrow function:
    </p>
    <ol className="ordered-list">
      <li className="ordered-item">
        Remove word <code className="inline-code">function</code>; replace with arrow between argument
        and open body bracket <code className="inline-code">(</code>.
      </li>
      <li className="ordered-item">
        Remove body brackets and word <code className="inline-code">return</code>
        as it is implied.
      </li>
      <li className="ordered-item">
        Remove argument parentheses (only if function has <span className="font-bold">one parameter</span>). 
        Otherwise, leave the parentheses.
      </li>
    </ol>
    {/* Two Parameters Std Function into Arrow Function */}
    <h4 className="subsubsubheading">Two Parameters Function into Arrow Function</h4>
    <Image 
      src="/images/javascript/function/arrow-function-2.png"
      alt="Code block of two function parameter turning into arrow function"
      width={400}
      height={400}
      className="fade-in-up rounded-lg"
    />

    {/* One Parameter Std Function into Arrow Function */}
    <h4 className="subsubsubheading">One Parameter Function into Arrow Function</h4>
    <Image 
      src="/images/javascript/function/arrow-function-1.png"
      alt="Code block of two function parameter turning into arrow function"
      width={300}
      height={300}
      className="fade-in-up rounded-lg"
    />

    {/* Arrow Functions vs Function Declarations*/}
    <h3 className="subsubheading">Arrow Functions vs Function Declarations</h3>
    <p className="body">
      Now that we learned the different ways that we can define functions in JavaScript, 
      you may be wondering, "So can I just use them interchangeably whenever I feel like it?"
      The answer is NO. 
    </p>
    <p className="body">
      Arrow functions cannot be used as methods in JavaScript as they do not have their own 
      <code className="inline-code">this</code>. If used within a method, <code className="inline-code">this</code>
      will not refer to the object this method belongs to; instead, it will refer to the object in the outer scope.
      Therefore, arrow functions break when used within methods. Due to this unpredictable behaviour,
      <span className="font-bold"> arrow methods are NOT used within methods in JavaScript</span>.
    </p>
    <p className="body">Here's more information on arrow functions:</p>
    <Link
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800">
        Arrow Function Expressions
      </Link>
    <br/>
     {/* ARRAYS */}
     <h2 className="subheading">Arrays</h2>
     <p className="body">
      Arrays is an important topic to understand in JavaScript, since you will most likely always be
      dealing with arrays of data (eg JSON, strings, numbers, etc).
     </p>

     <p className="body">
     Here is a useful link for more information (which I highly recommend looking at): 
     </p>
     <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800">
      JavaScript Arrays
     </Link>
          
     {/* EVENTS*/}
     <h2 className="subheading">Events</h2>
     <p className="body">
      Coming soon...
     </p>


     </div>
    </main>
  );
}