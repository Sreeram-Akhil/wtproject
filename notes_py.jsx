import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// Import specific icons from Font Awesome
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const NotesPython = () => {
  const goBack = () => {
    alert("Go Back function called");
  };
  const navigate = useNavigate();
  const navigateto = (route) => {
    navigate(route);
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
          <h3>Python Language</h3>
        </div>
        <div className="nav-buttons">
          <button
            className="nav-button"
            onClick={() => navigateto("pythongetinnfo")}
          >
            Back
          </button>
          <button
            className="nav-button"
            onClick={() => navigateto("/landingpage")}
          >
            Home
          </button>
        </div>
      </header>

      <main>
        <section className="note-section" id="introduction">
          <h2>Introduction to Python</h2>
          <p>
            Python is a high-level, interpreted programming language that is
            widely used for web development, data science, automation, and more.
            Its clean and readable syntax, dynamic typing, and extensive
            libraries make it one of the most popular programming languages.
          </p>
          <p>
            <b>Key Features of Python:</b>
          </p>
          <ul>
            <li>
              <b>Easy to Learn:</b> Python's syntax is simple and resembles
              English, making it beginner-friendly.
            </li>
            <li>
              <b>Versatile:</b> Python can be used in a wide variety of fields,
              from web development to scientific computing.
            </li>
            <li>
              <b>Extensive Libraries:</b> Python has a large collection of
              libraries and frameworks that accelerate development.
            </li>
            <li>
              <b>Dynamic Typing:</b> Variables don't require explicit
              declaration of their type.
            </li>
          </ul>
        </section>

        <section className="note-section" id="variables-and-data-types">
          <h2>Variables and Data Types in Python</h2>
          <p>
            In Python, variables are used to store data values. Python has
            several built-in data types including integers, strings, lists,
            tuples, dictionaries, and more.
          </p>
          <p>
            <b>Common Data Types in Python:</b>
          </p>
          <ul>
            <li>
              <b>int:</b> Integer numbers (e.g., 5, 100, -45)
            </li>
            <li>
              <b>float:</b> Floating-point numbers (e.g., 3.14, -0.001)
            </li>
            <li>
              <b>str:</b> Strings (e.g., 'hello', "Python")
            </li>
            <li>
              <b>bool:</b> Boolean values (True or False)
            </li>
            <li>
              <b>list:</b> Lists (e.g., [1, 2, 3])
            </li>
            <li>
              <b>tuple:</b> Tuples (e.g., (1, 2, 3))
            </li>
          </ul>
        </section>

        <section className="note-section" id="basic-syntax">
          <h2>Basic Syntax</h2>
          <p>
            Python is known for its simplicity and readability. It uses
            indentation to define blocks of code, rather than curly braces or
            other delimiters.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example:</i>
            </h3>
            <pre>
              {`# Print a statement
print("Hello, Python!")

# Variable assignment
x = 10
y = 20
sum = x + y
print(sum)`}
            </pre>
          </div>
          <p>
            Python also supports common programming constructs like loops and
            conditionals:
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Loop:</i>
            </h3>
            <pre>
              {`for i in range(5):
    print(i)`}
            </pre>
            <h3>
              <i>Example of Conditional:</i>
            </h3>
            <pre>
              {`if x > y:
    print("x is greater")
else:
    print("y is greater")`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="functions">
          <h2>Functions in Python</h2>
          <p>
            Functions in Python allow you to group reusable code. You can define
            a function using the <code>def</code> keyword.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Function Definition:</i>
            </h3>
            <pre>
              {`def greet(name):
    return f"Hello, {name}!"`}
            </pre>
            <p>To call a function:</p>
            <div className="code-snippet">
              <h3>
                <i>Function Call:</i>
              </h3>
              <pre>{`greet("John")  # Output: "Hello, John!"`}</pre>
            </div>
          </div>
        </section>

        <section className="note-section" id="classes-and-objects">
          <h2>Classes and Objects</h2>
          <p>
            Python supports object-oriented programming. You can define classes
            using the <code>class</code> keyword and create objects (instances)
            from those classes.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Class:</i>
            </h3>
            <pre>
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

# Creating an object
person1 = Person("Alice", 30)
person1.greet()  # Output: "Hello, my name is Alice and I am 30 years old."`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="loops-and-conditions">
          <h2>Loops and Conditionals</h2>
          <p>
            Python provides several ways to iterate over data structures and
            make decisions using conditionals.
          </p>
          <p>
            <b>For Loop:</b> The <code>for</code> loop is used to iterate over a
            sequence (like a list, string, or range).
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a For Loop:</i>
            </h3>
            <pre>
              {`for i in range(1, 6):
    print(i)`}
            </pre>
          </div>

          <p>
            <b>While Loop:</b> The <code>while</code> loop runs as long as a
            specified condition is true.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a While Loop:</i>
            </h3>
            <pre>
              {`count = 0
while count < 5:
    print(count)
    count += 1`}
            </pre>
          </div>

          <p>
            <b>If-Else Statements:</b> These allow conditional execution based
            on the truth value of an expression.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of If-Else:</i>
            </h3>
            <pre>
              {`x = 10
if x % 2 == 0:
    print("Even")
else:
    print("Odd")`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="modules-and-packages">
          <h2>Modules and Packages</h2>
          <p>
            Python allows you to organize your code into modules and packages. A
            module is a single Python file, while a package is a collection of
            modules.
          </p>
          <p>
            <b>Importing a Module:</b> You can import a module using the{" "}
            <code>import</code> keyword.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Importing a Module:</i>
            </h3>
            <pre>
              {`import math
print(math.sqrt(16))  # Output: 4.0`}
            </pre>
          </div>

          <p>
            <b>Creating a Module:</b> You can create your own modules by writing
            functions or classes in a separate Python file.
          </p>
        </section>

        <section className="note-section" id="exception-handling">
          <h2>Exception Handling in Python</h2>
          <p>
            Python uses the <code>try</code> and <code>except</code> blocks to
            handle exceptions, ensuring that the program continues running even
            when errors occur.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Exception Handling:</i>
            </h3>
            <pre>
              {`try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="file-handling">
          <h2>File Handling in Python</h2>
          <p>
            Python provides built-in functions to work with files. You can open,
            read, write, and close files easily.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of File Handling:</i>
            </h3>
            <pre>
              {`# Writing to a file
with open('file.txt', 'w') as file:
    file.write("Hello, Python!")

# Reading from a file
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="conclusion">
          <h2>Conclusion</h2>
          <p>
            Python is a versatile and beginner-friendly language that can be
            used for a wide range of applications. Whether you're working on web
            development, data science, automation, or machine learning, Python's
            simplicity and powerful libraries make it an excellent choice for
            developers at any level.
          </p>
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

export default NotesPython;
