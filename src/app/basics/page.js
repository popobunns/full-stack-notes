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
              <p className="body">This is where the browser content is going to go.</p>
            </div>

            {/* Servers */}
            <div>
              <h3 className="subheading">Servers</h3>
              <p className="body">This is where the browser content is going to go.</p>
            </div>

            {/* The Interaction */}
            <div>
              <h3 className="subheading">The Interaction</h3>
              <p className="body">This is where the browser content is going to go.</p>
            </div>
            
          </div>
        </main>
      );
}