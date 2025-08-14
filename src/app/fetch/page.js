import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <main className="main-container">
        <div className="content-wrapper fade-in-up">
            <h1 className="page-title fade-in-up">Asynchronous Data in React Applications</h1>
            {/* Author Note*/}
            <p className="author">Author: Jina</p>
            {/* Body Text */}
            <p className="body">
                When I first started out, the greatest enigma to me was the term "APIs".
                "What the heck are APIs?!?!" I always thought to myself. Now, with a bit more
                understanding, I'll try my best to explain to you what an API is.
            </p>
            <br/>
            <p className="body">
                Application Programming Interface (APIs) essentially are the liaison between 
                programming interfaces. It allows for the communication of data between applications.
                Let's use weather app for example. A weather app may display to you the temperatures
                of different cities, however, it's not the website that just hosts this massive amount
                of data. Instead, the weather app requests for weather data of different cities via APIs. 
                Once the data is "fetched", the weather app has code that renders the information that's 
                relevant to us on the UI so it's easy for you as the user to view. 
            </p>
            <br/>
            <p className="body">
                Now that you have a general idea of what APIs mean and how websites fetch 
                their data, let's look at the basics of the code that enables this communication to occur.
            </p>

            {/* Fetching Data */}
            <h3 className="subheading">Fetching and Manipulating Data in React</h3>
            <p className="body">
                Remember earlier how we talked about <span className="font-bold">asynchronous data</span>?
                Well, we're not revisiting that topic. 
                Here, we will discuss two functions that allow us to:
            </p>
                <ol className="ordered-list">
                    <li className="ordered-item">
                        Fetch the data from the API 
                    </li>
                    <li className="ordered-item">
                        Store the fetched data into a variable
                    </li>
                </ol>
            

            {/* Fetching Data*/}
            <h4 className="subsubheading">Fetching Data</h4>
            <p className="body">We use the following function to fetch data from a url (eg API key).</p>
            <Image 
                src="/images/getData.png"
                alt="getData Function Code Block"
                width={300}
                height={300}
                className="fade-in-up rounded-lg"
            />

            {/* Manipulating Data*/}
            <h4 className="subsubheading">Manipulating Fetched Data</h4>
            <p className="body">Since the <code className="inline-code">getData()</code> function 
            returns the JSON data, we can store the returned result into a variable like below:
            </p>
            <Image 
                src="/images/await.png"
                alt="await Function Code Block"
                width={300}
                height={300}
                className="fade-in-up rounded-lg"
            />

            {/* Passing Props*/}
            <h4 className="subsubheading">Passing Data as Props</h4>
            <p className="body">Yay! Now we can manipulate the returned JSON data. But the issue now
                is that we just have a giant array of JSON objects, which is usually not what we want to
                render on our website. We want our clients to see simple pretty text, not cluttered data.
                In order to extract only the properties that we are interested in, we can do what's called
                "passing data as props". Essentially, breaking down the object into its properties, and 
                extracting those properties and injecting them into JSX so render on the page.

                Let's see how we can do that below: 
            </p>
            <div className="section-row">
                <div className="md:w-1/2 section-row items-center">
                    <Image 
                        src="/images/props.png"
                        alt="Props Function Code Block"
                        width={300}
                        height={300}
                        className="fade-in-up rounded-lg"
                    />
                </div>
                <div className="md:w-1/2 section-column items-center">
                    <p className="body">
                        So what the heck is going on? Well, let's dissect it together, shall we?
                    </p>
                    <div>
                        <ol className="ordered-list">
                            <li className="ordered-item">
                                <code className="inline-code">getData() </code> is the function that fetches
                                the data from the API. 
                            </li>
                            <li className="ordered-item">
                                <code className="inline-code">Page() </code> is the React Component on the page where 
                                you are trying to load the data into. You must change this component into an 
                                <code className="inline-code">async function </code> so that we can use 
                                <code className="inline-code">await </code> as on the left.
                            </li>
                            <li className="ordered-item">
                                <code className="inline-code">const data = await getData() </code> is saying, "Wait for the
                                data to be fetched. When it returns, store it in this variable data"
                            </li>
                        </ol>
                    </div>
                    
                </div>

            </div>
            {/* Continuiing List After Image Block */}
            <ol className="ordered-list" start="4">
                <li className="ordered-item">
                    Once the data is loaded into the variable, we can manipulate the returned data. Usually,
                    the data will be returned as an array of JSON objects. And usually, we only need to use some
                    properties of the JSON object. To extract the desired properties, we must <span className="font-bold"
                    > pass data as props</span>. 
                    Here, we are applying the <code className="inline-code">map()</code> function to generate a new array 
                    from the initial <code className="inline-code">data</code> (fetched array of JSON objects). The function
                    you apply is up to you. In this example, we are employing a helper function called <code className="inline-code">
                    HelperFunction(...)</code> to extract the title of each of the items in the initial array as an HTML element. 
                    In simple speak, we take each element from <code className="inline-code">data</code> and render their title. 
                    Refer to this official document for more information about <span className="font-bold">passing data as props: </span>
                    <Link href="https://react.dev/learn/passing-props-to-a-component"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800">
                        Passing Props in React
                    </Link>
                </li>
                        
            </ol>
            
        </div>
        
      </main>
    );
  }