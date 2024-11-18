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
import "./notes_java.jsx"; // Importing the CSS file

const NotesJAVA = () => {
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
        <img id="logo" src="logo.jpg" alt="Logo" />
        <div className="page-title">
          <h1>NOTES</h1>
          <h3>Java Language</h3>
        </div>
        <div className="nav-buttons">
          <button
            className="nav-button"
            onClick={() => navigateto("/javagetinfo")}
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
          <h2>Introduction to Java</h2>
          <p>
            Java is a high-level, object-oriented programming language developed
            by Sun Microsystems (now owned by Oracle). It is known for its
            portability, performance, and security features. Java is used for
            building cross-platform applications, web services, mobile
            applications, and enterprise-level solutions.
          </p>
          <p>
            <b>Key Features of Java:</b>
          </p>
          <ul>
            <li>
              <b>Platform Independence:</b> Java programs are compiled into
              bytecode, which can run on any device with the Java Virtual
              Machine (JVM), making Java platform-independent.
            </li>
            <li>
              <b>Object-Oriented:</b> Java follows object-oriented principles
              like inheritance, polymorphism, encapsulation, and abstraction.
            </li>
            <li>
              <b>Security:</b> Java provides built-in security features such as
              bytecode verification and secure class loading.
            </li>
            <li>
              <b>Multithreading:</b> Java has built-in support for multithreaded
              programming, which allows the execution of multiple threads
              simultaneously.
            </li>
          </ul>
        </section>

        <section className="note-section" id="variables-and-data-types">
          <h2>Variables and Data Types in Java</h2>
          <p>
            In Java, variables must be declared with a specific data type before
            they can be used. Java supports a variety of data types, including
            primitive types and reference types.
          </p>
          <p>
            <b>Common Data Types in Java:</b>
          </p>
          <ul>
            <li>
              <b>int:</b> Integer numbers (e.g., 5, -10, 100)
            </li>
            <li>
              <b>float:</b> Floating-point numbers (e.g., 3.14, -0.001)
            </li>
            <li>
              <b>char:</b> Single character (e.g., 'a', '1')
            </li>
            <li>
              <b>boolean:</b> Represents true or false values (e.g., true,
              false)
            </li>
            <li>
              <b>String:</b> A sequence of characters (e.g., "Hello")
            </li>
            <li>
              <b>double:</b> Double-precision floating-point numbers (e.g.,
              3.14159)
            </li>
          </ul>
        </section>

        <section className="note-section" id="basic-syntax">
          <h2>Basic Syntax in Java</h2>
          <p>
            Java syntax is similar to C, with some enhancements. Every Java
            program must have a <code>main</code> method, which serves as the
            entry point for the program. Java uses semicolons to end statements
            and curly braces to define code blocks.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example:</i>
            </h3>
            <pre>
              {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}
            </pre>
          </div>
          <p>
            Java also supports loops, conditionals, and other control
            structures:
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Loop:</i>
            </h3>
            <pre>
              {`for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`}
            </pre>
            <h3>
              <i>Example of a Conditional:</i>
            </h3>
            <pre>
              {`int x = 10;
if (x > 5) {
    System.out.println("x is greater than 5");
} else {
    System.out.println("x is less than or equal to 5");
}`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="functions">
          <h2>Functions in Java</h2>
          <p>
            Functions in Java are defined using the <code>public</code>,{" "}
            <code>private</code>, or other access modifiers, followed by a
            return type, a function name, and parameters (optional). Java
            functions are commonly referred to as methods.
          </p>
          <p>
            <b>Function Syntax:</b>
          </p>
          <pre>
            {`returnType functionName(parameters) {
    // Code Block
}`}
          </pre>
          <p>Here’s an example of a simple function that adds two numbers:</p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Function:</i>
            </h3>
            <pre>
              {`public class MathOperation {
    public static int addNumbers(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = addNumbers(10, 20);
        System.out.println("Result: " + result);
    }
}`}
            </pre>
          </div>
          <p>
            This function takes two integer parameters, adds them, and returns
            the sum.
          </p>
        </section>

        <section className="note-section" id="control-flow">
          <h2>Control Flow in Java</h2>
          <p>
            Control flow statements determine the order in which instructions
            are executed in a Java program. These include <code>if</code>,{" "}
            <code>else</code>, <code>switch</code>, <code>for</code>,{" "}
            <code>while</code>, and <code>do-while</code> loops.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Switch Statement:</i>
            </h3>
            <pre>
              {`int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}`}
            </pre>
          </div>
          <p>
            The switch statement is used for conditional execution based on the
            value of a variable. It’s often more readable than multiple{" "}
            <code>if</code> statements when checking the value of the same
            variable.
          </p>
        </section>

        <section className="note-section" id="object-oriented-programming">
          <h2>Object-Oriented Programming (OOP) in Java</h2>
          <p>
            Java is an object-oriented programming language, meaning it uses
            objects and classes to organize code. There are four main principles
            of OOP: encapsulation, inheritance, polymorphism, and abstraction.
          </p>

          <h3>Encapsulation</h3>
          <p>
            Encapsulation is the process of bundling data and methods that
            operate on that data into a single unit called a class. It also
            involves restricting access to some of an object's components, which
            is usually done via access modifiers like <code>private</code>,{" "}
            <code>protected</code>, and <code>public</code>.
          </p>

          <h3>Inheritance</h3>
          <p>
            Inheritance allows a new class to inherit properties and behaviors
            (methods) from an existing class. The class being inherited from is
            called the superclass, and the class inheriting is called the
            subclass.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Inheritance:</i>
            </h3>
            <pre>
              {`class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound();
    }
}`}
            </pre>
          </div>
          <p>
            In this example, the <code>Dog</code> class inherits from the{" "}
            <code>Animal</code> class and overrides the <code>makeSound</code>{" "}
            method.
          </p>

          <h3>Polymorphism</h3>
          <p>
            Polymorphism allows objects of different classes to be treated as
            objects of a common superclass. It also allows methods to have
            different behaviors based on the object type.
          </p>

          <h3>Abstraction</h3>
          <p>
            Abstraction is the concept of hiding the complex implementation
            details of a system and exposing only the necessary parts. This is
            typically achieved through abstract classes or interfaces.
          </p>
        </section>

        <section className="note-section" id="exception-handling">
          <h2>Exception Handling in Java</h2>
          <p>
            Exception handling is a mechanism to handle runtime errors in Java.
            It is done using <code>try</code>, <code>catch</code>,{" "}
            <code>finally</code>, and <code>throw</code> keywords.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Exception Handling:</i>
            </h3>
            <pre>
              {`try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
} finally {
    System.out.println("Execution completed.");
}`}
            </pre>
          </div>
          <p>
            The <code>catch</code> block handles the exception, and the{" "}
            <code>finally</code> block always executes, regardless of whether an
            exception occurred or not.
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

export default NotesJAVA;
