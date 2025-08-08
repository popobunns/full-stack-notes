import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <main className="main-container">
          <div className="content-wrapper fade-in-up">
            <h1 className="page-title fade-in-up">How Servers and Browsers Interact</h1>
            
            {/* Author Note*/}
            <p className="author">Author: Jina</p>

            <p className="body">You may have heard the terms "servers", "browsers", "clients", "networks", etc.
              If you're anything like I was, you must be wondering to yourself, "What the heck is that?"
              In this VERY watered-down tutorial, I will break down these concepts for you.
              To make it fun even, I will use <span className="font-bold text-blue-700">food analogies</span> throughout the whole tutorial to break it down for you.
            </p>
          

            {/* Browsers / Clients */}
            <div className="section-row">
              {/* Text Section */}
              <div className="md:w-2/3">
                <h3 className="subheading">Browsers and Clients</h3>
                <p className="body">
                  The browser and the client refer to the same entity: the device through which the user
                  views websites (eg Google Chrome, Firefox, Safari, etc.)
                  <br/>
                  <span className="font-bold text-blue-700">Browser/client is the customer looking at the menu.</span>
                </p>
              </div>

              {/* Customer Image Section */}
              <div className="md:w-1/3 section-row items-center">
                  <Image 
                    src="/images/customer.png"
                    alt="Restaurant Customer"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

            {/* Servers */}
            <div className="section-row">
              {/* Text Section */}
            <div className="md:w-2/3">
              <h3 className="subheading">Servers</h3>
                <p className="body">
                  The server is a computer that responds to requests over the internet. 
                  <span className="font-bold text-blue-700">The server is the waiter who takes the client's orders,
                  brings it to the kitchen, and returns with the food item.</span> In similar fashion, the server
                  takes and processes orders in response to client demands/requests. In Internet-speak, the server
                  can request data from APIs or databases, runs backend logic, sends data, and more to browsers
                  so the client can view the website. TLDR: when a client requests to view a website, a
                  request is sent to the server to pre-load the data. Sometimes, the loading can happen 
                  with a delay. This happens with client-side rendering. 
                  </p>
                  <br/>
              </div>

              {/* Waiter Image Section */}
              <div className="md:w-1/3 section-row items-center">
                <Image 
                  src="/images/waiter.png"
                  alt="Restaurant Waiter"
                  width={300}
                  height={300}
                />
              </div>
            </div>

            <p className="body">
              Let's differentiate <span className="font-bold"> Client-side vs Server-side Rendering:</span>
            </p>
            
            <p className="body"><span className="font-bold">Client-side rendering</span> happens in the 
              user's browser after the page loads, while server-side rendering generates the HTML on the 
              server before sending it to the browser. <span className="font-bold">Server-side rendering </span>
              is better for SEO because search engines can immediately read the content without waiting for 
              JavaScript to run. Client-side rendering may result in slower initial load times and less 
              visibility to search engines if not handled properly.
            </p>
            {/* The Interaction */}
            <div className="section-row">
              
                {/* Text Section */}
              <div className="md:w-2/3">
              <h3 className="subheading">The Interaction</h3>
              <p className="body">If the previous section confused you, let me explain how the browser and server 
                communicate.</p>
                <ol className="ordered-list">
                  <li className="ordered-item">
                    User enters URL in browser (client).
                  </li>
                  <li className="ordered-item">
                    Browser sends an HTTP request to the server in a form called the 
                    <span className="font-bold"> GET Request</span>. In layman terms, 
                    the request is basically going, <span className="italic">"Please give me the content for this page!
                    I wanna see!"</span>
                  </li>
                  <li className="ordered-item">
                    Assuming we're using Next.js, the server identifies that the route to that desired page exists.
                    If the route is a <span className="font-bold">Server Component</span> (look below if you're confused),
                    it will run server-side running. (Seriously, if you're confused, look below). 
                  </li>
                  <li className="ordered-item">
                    If extra data or API calls need to be made, the server component will have to do some extra work.
                    For instance, if making API calls, the component will use what's called 
                    <span className="font-bold"> asynchronous functions</span> like <code className="inline-code">
                      await fetch()</code> to fetch for information. (Again, if you're confused, look below).
                      Here, <span className="font-bold text-blue-700">APIs are like where the kitchen
                        gets their ingredients from. </span>

                    Alternatively, if conducting database queries, this will also be processed. 
                    <span className="font-bold text-blue-700"> Databases are like the inventory of all the
                      resources the kitchen has.</span>
                  </li>
                  <li className="ordered-item">
                    These requests are often complex so it can take some time. We wouldn't want the server to just sit 
                    there not doing anything until the results came back; that would be inefficient. Thus, server components
                    use asynchronous functions and await (ie server waits asynchronously for the data to be retrieved, 
                    in the meantime it can do other tasks). Once everything has been received and processed, 
                    the page is rendered. This is called <span className="font-bold">Server-side Rendering</span>.
                    Basically saying the server prepares everything before the page is displayed on the browser.
                    <span className="font-bold text-blue-700"> Asynchronous functions are like timers; reminders that 
                      allow us to complete other tasks but remind us when the task we're awaiting on has finished.</span>
                  </li>
                </ol>
              </div>

              <div className="md:w-1/3 section-column items-center space-y-8">
                <Image 
                      src="/images/chef.png"
                      alt="Restaurant Chef"
                      width={200}
                      height={200}
                />
                <Image 
                      src="/images/inventory.png"
                      alt="Restaurant worker taking inventory"
                      width={200}
                      height={200}
                />
                <Image 
                      src="/images/chef-with-timer.png"
                      alt="Restaurant Chef with Timer in Background"
                      width={200}
                      height={200}
                />
  
              </div>
              
            </div>
            
            {/* Server Components */}
            <div className="section-row">
              {/* Text Section */}
              <div className="md:w-2/3 section-column items-center">
                <h3 className="subheading">Server Components</h3>
                <p className="body">This is where the browser content is going to go.
                  <span className="font-bold text-blue-700"> The server component is like the prepared dish
                    made on demand based on the client's request.
                  </span>
                </p>
                </div>

                {/* Image Section */}
              <div className="md:w-1/3 section-row items-center">
              <Image 
                    src="/images/food.png"
                    alt="Restaurant Dish"
                    width={200}
                    height={100}
                />
              </div>
            </div>

            {/* Asynchronous Functions */}
            <div className="section-row">

              {/* Text Section */}
              <div className="md:w-2/3 section-column items-center">
                <h3 className="subheading">Asynchronous Functions</h3>
                <p className="body">As mentioned before, it would be very inefficient if the server just
                  stood around not doing anything until the dish was finished by the kitchen. Imagine if you
                  went to a restaurant and saw the waiter just stand there staring at the kitchen staff until 
                  the food was done being prepared. That would be a horrible waiter! 
                  <span className="font-bold text-blue-700"> Instead, a good waiter would be multi-tasking, tending to other customers, cleaning tables, 
                  getting water, etc.</span> In the same fashion, an efficient server would continue on with other tasks
                  while the required data was done being fetched.</p>
              </div>
              
              {/* Image Section */}
              <div className="md:w-1/3 section-column items-center">
                <Image 
                      src="/images/multitasking-waiter.png"
                      alt="Restaurant Multi-Tasking Waiter"
                      width={200}
                      height={200}
                    />
              </div>
              
            </div>
            <p className="body">Servers can do this "asynchronous" labor while the data/requests are being fetched because of the 
                  <code className="inline-code">async</code> and <code className="inline-code">await</code> 
                  keywords in JavaScript. To be clear, <code className="inline-code">async</code> declares a function that will return a promise.
                  <code className="inline-code">await</code> pauses the execution of this function until the promise is delivered.
            </p>
          
          </div>
        </main>
      );
}

