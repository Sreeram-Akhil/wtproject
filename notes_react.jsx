import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from Font Awesome
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NotesReact = () => {
    const goBack = () => {
        alert("Go Back function called");
    };

    const home = () => {
        alert("Home function called");
    };

    return (
        <div>
            <style>
                {`
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #ddbbef;
                        color: #333;
                    }

                    /* Header Styling */
                    header {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        background-color: #7433B2;
                        color: #fff;
                        padding: 10px 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                        z-index: 1000;
                    }

                    #logo {
                        height: 40px;
                        margin-right: 10px;
                    }

                    .nav-buttons {
                        display: flex;
                        gap: 10px;
                    }

                    /* Navigation Button Styles */
                    .nav-button {
                        padding: 6px 14px;
                        font-size: 0.9em;
                        color: #fff;
                        background-color: #8C37CC;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }

                    .nav-button:hover {
                        background-color: #A152D0;
                    }

                    .page-title h1 {
                        font-size: 1.8em;
                        margin: 0;
                    }

                    .page-title h3 {
                        font-size: 1.1em;
                        margin: 5px 0 0;
                        color: #ddd;
                        font-weight: 400;
                    }

                    main {
                        width: 90%;
                        max-width: 800px;
                        margin-top: 100px;
                        margin-left: 250px;
                        padding: 20px;
                        text-align: left; /* Align text to the left */
                    }

                    .note-section {
                        background-color: #a2acfc;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        margin-bottom: 20px;
                        transition: transform 0.2s;
                    }

                    .note-section:hover {
                        transform: scale(1.02);
                    }

                    .note-section h2 {
                        color: #7120ab;
                        font-size: 1.5em;
                        margin-bottom: 10px;
                    }

                    .code-snippet {
                        background-color: #fbfdfd;
                        padding: 10px;
                        border-radius: 4px;
                        font-family: monospace;
                        color: #333;
                        margin: 5px 0;
                        white-space: pre-wrap;
                    }

                    /* Footer Styling */
                    footer {
                        background-color: #555353;
                        color: white;
                        padding: 10px 20px;
                        font-size: 1em;
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;
                        align-items: center;
                    }

                    .footer-content {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        width: 100%;
                    }

                    .footer-left {
                        flex-shrink: 0;
                        text-align: left;
                    }

                    .footer-left img {
                        height: 30px;
                        margin-right: 15px;
                    }

                    .footer-center {
                        text-align: center;
                        flex-grow: 1;
                    }

                    .social-links {
                        margin-top: 5px;
                        text-align: center;
                    }

                    .social-links a {
                        color: white;
                        font-size: 1.3em;
                        margin: 0 10px;
                        text-decoration: none;
                    }

                    .social-links a:hover {
                        color: #ffcc00;
                    }
                `}
            </style>

            <header className="small-header">
                <img id="logo" src="logo.jpg" alt="LOGO" />
                <div className="page-title">
                    <h1>NOTES</h1>
                    <h3>React.js</h3>
                </div>
                <div className="nav-buttons">
                    <button className="nav-button" onClick={goBack}>Back</button>
                    <button className="nav-button" onClick={home}>Home</button>
                </div>
            </header>
            
            <main>
    <section className="note-section" id="introduction">
        <h2>Introduction to React.js</h2>
        <p>React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to build applications that can dynamically update without reloading the entire page.</p>
        <p><b>Key Features of React:</b></p>
        <ul>
            <li><b>Component-Based Architecture:</b> Applications are built using reusable components.</li>
            <li><b>Virtual DOM:</b> React optimizes rendering by using a virtual DOM.</li>
            <li><b>Declarative UI:</b> UI is described in terms of its state.</li>
            <li><b>Unidirectional Data Flow:</b> React enforces one-way data flow, making it easier to manage and debug.</li>
        </ul>
    </section>

    <section className="note-section" id="jsx">
        <h2>JSX (JavaScript XML)</h2>
        <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript. It simplifies the process of writing React components and makes the code more readable.</p>
        <div className="code-snippet">
            <h3><i>Syntax:</i></h3>
            <pre>
                {`const element = <h1>Hello, world!</h1>;`}
            </pre>
        </div>
        <p>JSX expressions must be enclosed within a single root element, and expressions are wrapped in curly braces.</p>
    </section>

    <section className="note-section" id="components">
        <h2>Components in React</h2>
        <p>React applications are built using components, which are JavaScript functions or classes that manage their own state and render UI based on that state.</p>

        <p><b>Functional Components:</b> These are simpler components written as functions that return JSX. They can accept props and display data accordingly.</p>
        <div className="code-snippet">
            <h3><i>Example of a Functional Component:</i></h3>
            <pre>
                {`function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}`}
            </pre>
        </div>

        <p><b>Class Components:</b> These components are written as ES6 classes that extend React.Component and have additional features like lifecycle methods.</p>
        <div className="code-snippet">
            <h3><i>Example of a Class Component:</i></h3>
            <pre>
                {`class Welcome extends React.Component {
    render() {
        return <h1>Welcome, {this.props.name}!</h1>;
    }
}`}
            </pre>
        </div>
    </section>

    <section className="note-section" id="props">
        <h2>Props in React</h2>
        <p>Props are inputs to React components, passed from a parent component to a child component. They allow data to be passed down the component tree.</p>
        <div className="code-snippet">
            <h3><i>Example of Props:</i></h3>
            <pre>
                {`function App() {
    return <Greeting name="John" />;
}

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}`}
            </pre>
        </div>
    </section>

    <section className="note-section" id="state">
        <h2>State in React</h2>
        <p>State is an object that holds data that can change over time. React components can manage their own state, and when state changes, the component re-renders.</p>
        <p><b>Setting and Using State:</b> In class components, the `state` is initialized in the constructor, and the `setState` method is used to update it.</p>
        <div className="code-snippet">
            <h3><i>Example of State in Class Components:</i></h3>
            <pre>
                {`class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}`}
            </pre>
        </div>
        <p><b>Using useState Hook:</b> In functional components, you can use the `useState` hook to manage state.</p>
        <div className="code-snippet">
            <h3><i>Example of useState Hook:</i></h3>
            <pre>
                {`import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
            </pre>
        </div>
    </section>

    <section className="note-section" id="lifecycle-methods">
        <h2>React Lifecycle Methods</h2>
        <p>Lifecycle methods are special methods that allow you to run code at different points during a component's life (when it's mounted, updated, or unmounted).</p>
        <p><b>Common Lifecycle Methods:</b></p>
        <ul>
            <li><b>componentDidMount():</b> Called after the component is mounted.</li>
            <li><b>componentDidUpdate():</b> Called after the component updates.</li>
            <li><b>componentWillUnmount():</b> Called before the component is removed from the DOM.</li>
        </ul>
    </section>

    <section className="note-section" id="conditional-rendering">
        <h2>Conditional Rendering in React</h2>
        <p>React allows you to render different UI based on conditions using JavaScript operators like `if`, ternary operator, or logical `&&`.</p>
        <div className="code-snippet">
            <h3><i>Example of Conditional Rendering:</i></h3>
            <pre>
                {`function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please sign up.</h1>;
    }
}`}
            </pre>
        </div>
    </section>

    <section className="note-section" id="lists-and-keys">
        <h2>Lists and Keys in React</h2>
        <p>React allows you to render lists of elements using the `map()` function. Each element in the list must have a unique key for React to optimize rendering.</p>
        <div className="code-snippet">
            <h3><i>Example of List and Keys:</i></h3>
            <pre>
                {`const numbers = [1, 2, 3, 4];
const listItems = numbers.map((number) =>
    <li key={number}>{number}</li>
);

return <ul>{listItems}</ul>;`}
            </pre>
        </div>
    </section>

    <section className="note-section" id="hooks">
        <h2>React Hooks</h2>
        <p>React Hooks provide a way to use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`.</p>
        <div className="code-snippet">
            <h3><i>Example of useState Hook:</i></h3>
            <pre>
                {`import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
            </pre>
        </div>
    </section>

    <section className="note-section" id="conclusion">
        <h2>Conclusion</h2>
        <p>React.js is a powerful library for building user interfaces. Its component-based structure, virtual DOM, and use of hooks make it a great choice for building modern web applications. With its growing community and extensive documentation, React is widely used in the industry.</p>
    </section>
</main>


            <footer>
                <div className="footer-content">
                    <div className="footer-left">
                        <img src="logo.jpg" alt="Logo" />
                    </div>
                    <div className="footer-center">
                        <p>SEEK BEYOND</p>
                        <div className="social-links">
                            <a href="#" target="_blank" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" target="_blank" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" target="_blank" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" target="_blank" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NotesReact;
