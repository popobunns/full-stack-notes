
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

        <h2 className="subheading">Data Types</h2>
        <p className="body">
          JavaScript is considered a <span className="font-bold">weakly typed language</span>, which means unlike languages 
          like Java, you do not have to declare which data type goes into the variable. Instead,
          JavaScript will identify the data type for you! 
        </p>
        <br/>
        <p className="body">
          With that being said, it's still essential for you to know the different data types. 
          I'm going to assume you already have this knowledge, so I'll just show you some examples
          of variable declarations in JavaScript below: 
        </p>

      </div>
     
    </main>
  );
}