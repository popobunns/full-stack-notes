import Link from "next/Link";
export default function Home() {
    return (
      <main className="parent-container">
        <h1 className="page-title fade-in-up">Creating a Website</h1>

        {/* Author Note*/}
        <p className="author">Author: Jina</p>

        {/* Body Text */}
        <p className="body">Before you use this guide, I want to preface that I am also 
          just learning how to navigate web development. I simply created this website to share
          some easy-to-read notes I've been creating along my journey. So please, use this with a 
          grain of salt. I also want to share one piece of advice to you, from one beginner to another.
          In the beginning of my learning journey,  I was Googling "How to build
          a website in 1 hour" and trying to find the fastest way to build websites.
          It wasn't until I watched a handful of these videos that I started to realize that in order to 
          know how to build a functional, reliable website, I needed to learn the basics. Afterall, great things 
          can only be built on strong, reliable foundations.
        </p>
        <br/>
        <p className="body">With that being said, this is a cheat sheet that I wished I had starting out. 
          Do not just memorize this and plug it into ChatGPT and cross your fingers that you
          will build the next Facebook. Use it as a guideline and with a grain of salt.
        </p>
        <br/>
        <p className="body">You have been warned!</p>
        {/* List Section */}
        <br/>

        {/* Section Create Next.js Project */}
        <h3 className="subheading">Step 1: Create a Next.js Project</h3>
        <ol className="ordered-list">
          <li className="ordered-item">Navigate to your directory on terminal.</li>
          <li className="ordered-item">Initialize a Next.js project by running 
            <code className="inline-code">npx create-next-app@latest</code> in your terminal.</li>
          <li className="ordered-item">You will be prompted with questions like below:</li>
            <ul className="ml-6 list-disc space-y-1 mt-2 text-gray-600 text-sm">
              <li>What is your project named? </li>
              <li>Would you like to use TypeScript?</li>
              <li>Would you like to use ESLint?</li>
              <li>Would you like to use Tailwind CSS?</li>
              <li>Would you like to use 'src/' directory?</li>
              <li>Would you like to use App Router? (recommended)</li>
              <li>Would you like to customize the default import alias (@/*)?</li>
            </ul>
          <li className="ordered-item">Migrate to the project and <code className="inline-code">
            cd next-react-project</code> </li>
          <li className="ordered-item">Run <code className="inline-code">npm run dev</code> to launch the project</li>
        </ol>
        <br/>
        <p className="body">Congratulations! You've launched your Next.js project.
          Now, let's dissect the anatomy of the folders.
        </p>
        <br/>

        {/* Section Analyze Structure */}
        <h3 className="subheading">Step 2: Dissect Next.js Files</h3>
        <ol className="ordered-list">
          <li className="ordered-item">Open up the code in your editor and view the folder structure.</li>
          <li className="ordered-item">Let's break down each folder</li>
          <ul className="ml-6 list-disc space-y-1 mt-2 text-gray-600 text-sm">
            <li>
              <code className="inline-code">src/app</code>: App Router hosts all the pages/routes for the website. Each file inside 
              the <code className="inline-code">/app</code> directory becomes a route.
            </li>
            <li>
              <code className="inline-code">folder</code>: Folders contain .js files that act as the export file,
              aka the website the browser navigates to. For instance, <code className="inline-code">page.js</code>
              is where the JSX content for that website exists. In essence, it contains the content that will render
              when we navigate to that page.
            </li>
            <li>
              Notice that on each of the files, you will see syntax that exports a React component:
              <br/>
              <code className="inline-code">export default function Home() ...</code>
              <br/>
              This is telling Next.js what to export when this page is navigated to.  
            </li>
            <li>
              <code className="inline-code">global.css</code> houses all the styling for custom classes you create in Tailwind CSS or CSS.
            </li>
            <li>
            <code className="inline-code">layout.js</code> defines the metadata/html content that is shared across
            all pages in your website. In essence, it is like a global wrapper for your app's structure. 
            </li>

          </ul>
        </ol>

         {/* Creating New Pages */}
         <h3 className="subheading">Step 3: Create New Pages</h3>
        <ol className="ordered-list">
          <li className="ordered-item">
            Create a folder and name it something meaningful (eg <code className="inline-code">contact</code>)
          </li>
          <li className="ordered-item">
            Create a file within that folder that will host all the content for that page 
            (eg <code className="inline-code">page.js</code>)
          </li>
          <li className="ordered-item">
            Within that file, create an exportable React Component a file within that folder that will host all the content for that page 
            (eg <code className="inline-code">export default function ComponentName() ...</code>)
          </li>
          <li className="ordered-item">
            Customize your page to meet the requirements for your website. Use Tailwind CSS to customize the design.
            Here is a website that you can refer to when designing in Tailwind CSS:
              <Link href="https://tailwindcss.com/docs/installation/using-vite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800">
                Tailwind CSS Guide
              </Link>
          </li>
          </ol>

      {/* Routing Pages */}
      <h3 className="subheading">Step 4: Connecting Your Pages</h3>
      <br/>
      <p className="body">Once you've created your pages, it's time to start routing them to each other so
      you can navigate between the different pages in your website.
      Let's assume you are trying to create buttons for the user to navigate from your
      home page to the other pages in your website. For instance, an About page button on the Home menu.</p>

        <ol className="ordered-list">
          <li className="ordered-item">
            If you are navigating to a page inside your Next.js app (eg /home or /about page), 
            use the <code className="inline-code">&lt;Link&gt; &lt;/Link&gt;</code>.
            This tag is a React component provided by Next.js that allows you to conduct internal navigation. 
          <br/>
            Since we are trying to navigate to the About page, an internal page in your website, 
            we will use <code className="inline-code">&lt;Link&gt; &lt;/Link&gt;</code>.  
          </li>
          <li className="ordered-item">
            Navigate to the <code className="inline-code">page.js</code> file for the page you want to navigate
            away from. Once there, we will be creating a <code className="inline-code">&lt;Link&gt;</code> component
            to the desired destination page.
          </li>
          <li className="ordered-item">
            The strcture will look like the following: 
            <ol className="list-decimal list-inside ml-6 space-y-2 text-gray-700 text-base">
              <li>
                Write <code className="inline-code">&lt;Link&gt; &lt;/Link&gt;</code>
              </li>
              <li>
                Inside the tag, write the name you want for the button that will navigate 
                to the destination page (eg "About").
              </li>
              <li>
                Inside the tag, write an <code className="inline-code">href="/destination"</code>,
                replaciing the destination with the actual folder name for your destination page.
              </li>
              <li>
                Include some styling as well via <code className="inline-code">className=...</code>
                using Tailwind CSS.
              </li>
              <li>
                Make sure that the capitalization and spelling of the /destination is the exact same 
                as the folder in which your destination page exists. It is case-sensitive.
              </li>
              <li>
                If you haven't already done so, write the custom Tailwind CSS class for your link router.
              </li>
            </ol>
          </li>
          </ol>

      </main>
    );
  }