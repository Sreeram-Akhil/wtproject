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

const NotesC = () => {
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
          <h3>C Language</h3>
        </div>
        <div className="nav-buttons">
          <button
            className="nav-button"
            onClick={() => navigateto("/cgetinfo")}
          >
            Back
          </button>
          <button
            className="nav-button"
            onClick={() => navigate("/landingpage")}
          >
            Home
          </button>
        </div>
      </header>

      <main>
        <section className="note-section" id="introduction">
          <h2>Introduction to C</h2>
          <p>
            C is a powerful, high-performance programming language that was
            developed in the early 1970s. It is widely used for system
            programming, embedded systems, and creating operating systems. C is
            considered a low-level language as it provides direct access to
            memory and system resources, which makes it fast and efficient.
          </p>
          <p>
            <b>Key Features of C:</b>
          </p>
          <ul>
            <li>
              <b>Efficiency:</b> C allows fine control over system resources,
              making it highly efficient.
            </li>
            <li>
              <b>Low-Level Access:</b> C provides access to memory and low-level
              system functions, suitable for system programming.
            </li>
            <li>
              <b>Portability:</b> C programs can run on different hardware
              platforms with minimal changes.
            </li>
            <li>
              <b>Rich Libraries:</b> C has a large set of standard libraries
              that provide pre-written functions for common tasks.
            </li>
          </ul>
        </section>

        <section className="note-section" id="variables-and-data-types">
          <h2>Variables and Data Types in C</h2>
          <p>
            In C, variables must be declared before they are used. The C
            language supports various data types, which can be classified into
            primary data types, derived data types, and user-defined data types.
          </p>
          <p>
            <b>Common Data Types in C:</b>
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
              <b>double:</b> Double precision floating-point numbers (e.g.,
              3.14159)
            </li>
            <li>
              <b>void:</b> Used to define a function that does not return a
              value or a pointer to an unknown data type.
            </li>
          </ul>
        </section>

        <section className="note-section" id="basic-syntax">
          <h2>Basic Syntax in C</h2>
          <p>
            The basic syntax in C is structured around functions, with{" "}
            <code>main()</code> being the entry point of every C program. C uses
            semicolons to end statements and curly braces to define code blocks.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example:</i>
            </h3>
            <pre>
              {`#include <stdio.h>

int main() {
    printf("Hello, C programming!");
    return 0;
}`}
            </pre>
          </div>
          <p>
            C also supports loops, conditionals, and other control structures:
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Loop:</i>
            </h3>
            <pre>
              {`for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}`}
            </pre>
            <h3>
              <i>Example of a Conditional:</i>
            </h3>
            <pre>
              {`int x = 10;
if (x > 5) {
    printf("x is greater than 5");
} else {
    printf("x is less than or equal to 5");
}`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="functions">
          <h2>Functions in C</h2>
          <p>
            Functions in C allow you to group reusable code and break a large
            program into smaller, manageable parts. Functions are defined using
            the <code>return_type function_name()</code> syntax.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Function Definition:</i>
            </h3>
            <pre>
              {`int add(int a, int b) {
    return a + b;
}`}
            </pre>
            <p>To call a function:</p>
            <div className="code-snippet">
              <h3>
                <i>Function Call:</i>
              </h3>
              <pre>{`int result = add(5, 3);  // result will be 8`}</pre>
            </div>
          </div>
        </section>

        <section className="note-section" id="arrays">
          <h2>Arrays in C</h2>
          <p>
            Arrays in C are used to store multiple values of the same data type.
            An array is a collection of variables that share the same name and
            can be accessed by an index.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of an Array:</i>
            </h3>
            <pre>
              {`int numbers[5] = {1, 2, 3, 4, 5};
printf("%d", numbers[2]);  // Output: 3`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="pointers">
          <h2>Pointers in C</h2>
          <p>
            A pointer in C is a variable that stores the memory address of
            another variable. Pointers are powerful and essential for dynamic
            memory allocation and for passing variables by reference.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Pointer:</i>
            </h3>
            <pre>
              {`int a = 5;
int *ptr = &a;  // ptr now holds the address of a
printf("%d", *ptr);  // Output: 5`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="structures">
          <h2>Structures in C</h2>
          <p>
            Structures are user-defined data types in C that allow you to group
            different data types together. They are useful for representing
            complex data in a single unit.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Structure:</i>
            </h3>
            <pre>
              {`struct Person {
    char name[50];
    int age;
};

struct Person p1 = {"Alice", 30};
printf("%s is %d years old", p1.name, p1.age);`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="file-handling">
          <h2>File Handling in C</h2>
          <p>
            File handling in C allows you to create, read, write, and close
            files. The <code>fopen()</code> function is used to open a file, and{" "}
            <code>fclose()</code> is used to close it after operations are
            complete.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of Writing to a File:</i>
            </h3>
            <pre>
              {`FILE *file = fopen("example.txt", "w");
fprintf(file, "Hello, C file handling!");
fclose(file);`}
            </pre>
            <h3>
              <i>Example of Reading from a File:</i>
            </h3>
            <pre>
              {`FILE *file = fopen("example.txt", "r");
char content[100];
fgets(content, sizeof(content), file);
printf("%s", content);
fclose(file);`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="dynamic-memory">
          <h2>Dynamic Memory Allocation in C</h2>
          <p>
            C provides functions like <code>malloc()</code>,{" "}
            <code>calloc()</code>, <code>realloc()</code>, and{" "}
            <code>free()</code> for dynamic memory allocation and deallocation.
            This allows you to allocate memory at runtime based on the needs of
            your program.
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of malloc:</i>
            </h3>
            <pre>
              {`int *arr = (int*) malloc(5 * sizeof(int));
arr[0] = 10;
free(arr);`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="conclusion">
          <h2>Conclusion</h2>
          <p>
            C remains one of the most influential programming languages due to
            its efficiency, portability, and ability to interact directly with
            hardware. Whether you are building operating systems, embedded
            systems, or high-performance applications, C is a powerful tool that
            continues to be relevant in modern development.
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

export default NotesC;
