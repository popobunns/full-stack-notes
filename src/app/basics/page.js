export default function Home() {
    return (
        <main className="main-container">
          <div className="content-wrapper fade-in-up">
            <h1 className="page-title fade-in-up">How Servers and Browsers Interact</h1>

            <p className="body">You may have heard the terms "servers", "browsers", "clients", "networks", etc.
              If you're anything like I was, you must be wondering to yourself, "What the heck is that?"
              In this VERY watered-down tutorial, I will break down these concepts for you.
            </p>

            {/* Browsers / Clients */}
            <div>
              <h3 className="subheading">Browsers / Clients</h3>
              <p className="body">
                The browser and the client refer to the same entity: the device through which the user
                views websites (eg Google Chrome, Firefox, Safari, etc.)
              </p>
            </div>

            {/* Servers */}
            <div>
              <h3 className="subheading">Servers</h3>
              <p className="body">
                The server is a computer that responds to requests over the internet. 
                It's like the serving team/kitchen of a restaurant. It takes and processes orders 
                in response to client demands/requests. In Internet-speak, the server can request data 
                from APIs or databases, runs backend logic, sends data, and more to browsers
                so the client can view the website. TLDR: when a client requests to view a website, a
                request is sent to the server to pre-load the data. Sometimes, the loading can happen 
                with a delay. This happens with client-side rendering. 
                </p>
                <br/>
                <p className="body">Let's differentiate <span className="font-bold"> Client-side vs 
                  Server-side Rendering:</span></p>
                <p className="body"><span className="font-bold">Client-side rendering</span> happens in the 
                  user's browser after the page loads, while server-side rendering generates the HTML on the 
                  server before sending it to the browser. <span className="font-bold">Server-side rendering</span>
                  is better for SEO because search engines can immediately read the content without waiting for 
                  JavaScript to run. Client-side rendering may result in slower initial load times and less 
                  visibility to search engines if not handled properly.</p>
            </div>

            {/* The Interaction */}
            <div>
              <h3 className="subheading">The Interaction</h3>
              <p className="body">This is where the browser content is going to go.</p>
            </div>
            
            {/* Server Components */}
            <div>
              <h3 className="subheading">Server Components</h3>
              <p className="body">This is where the browser content is going to go.</p>
            </div>
            

          </div>
        </main>
      );
}