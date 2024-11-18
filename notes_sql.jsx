import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from Font Awesome
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NotesSQL = () => {
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
                    <h3>SQL LANGUAGE</h3>
                </div>
                <div className="nav-buttons">
                    <button className="nav-button" onClick={goBack}>Back</button>
                    <button className="nav-button" onClick={home}>Home</button>
                </div>
            </header>
            
            <main>
                <section className="note-section" id="data-types">
                    <h2>Introduction</h2>
                    <p>SQL (Structured Query Language) is used to interact with databases. It allows for querying, updating, and managing databases efficiently.</p>
                    <p><b>The important constructs in SQL are:</b></p>
                    <p><b>Data types:</b></p>
                    <ul>
                        <li>INT</li>
                        <li>VARCHAR</li>
                        <li>TEXT</li>
                        <li>DATE</li>
                        <li>BOOLEAN</li>
                    </ul>
                    <p><b>Commands:</b></p>
                    <ul>
                        <li>SELECT</li>
                        <li>INSERT</li>
                        <li>UPDATE</li>
                        <li>DELETE</li>
                        <li>CREATE</li>
                    </ul>
                    <p><b>Constraints:</b></p>
                    <ul>
                        <li>PRIMARY KEY</li>
                        <li>FOREIGN KEY</li>
                        <li>UNIQUE</li>
                        <li>NOT NULL</li>
                    </ul>
                </section>

                <section className="note-section" id="select-query">
                    <h2>SELECT Query</h2>
                    <p>The SELECT statement is used to query the database and retrieve data from one or more tables.</p>
                    <div className="code-snippet">
                        <h3><i>Syntax:</i></h3><br />
                        SELECT column1, column2, ...<br />
                        FROM table_name;<br />
                    </div>
                    <div className="code-snippet">
                        <h3><i>Example:</i></h3><br />
                        SELECT first_name, last_name<br />
                        FROM employees;<br />
                    </div>
                </section>

                <section className="note-section" id="insert-query">
                    <h2>INSERT Query</h2>
                    <p>The INSERT statement is used to insert data into a table.</p>
                    <div className="code-snippet">
                        <h3><i>Syntax:</i></h3><br />
                        INSERT INTO table_name (column1, column2, ...)<br />
                        VALUES (value1, value2, ...);<br />
                    </div>
                    <div className="code-snippet">
                        <h3><i>Example:</i></h3><br />
                        INSERT INTO employees (first_name, last_name, age)<br />
                        VALUES ('John', 'Doe', 25);<br />
                    </div>
                </section>

                <section className="note-section" id="update-query">
                    <h2>UPDATE Query</h2>
                    <p>The UPDATE statement is used to modify existing data in a table.</p>
                    <div className="code-snippet">
                        <h3><i>Syntax:</i></h3><br />
                        UPDATE table_name<br />
                        SET column1 = value1, column2 = value2,<br />
                        WHERE condition;<br />
                    </div>
                    <div className="code-snippet">
                        <h3><i>Example:</i></h3><br />
                        UPDATE employees<br />
                        SET age = 30<br />
                        WHERE first_name = 'John';<br />
                    </div>
                </section>

                <section className="note-section" id="delete-query">
                    <h2>DELETE Query</h2>
                    <p>The DELETE statement is used to remove data from a table.</p>
                    <div className="code-snippet">
                        <h3><i>Syntax:</i></h3><br />
                        DELETE FROM table_name<br />
                        WHERE condition;<br />
                    </div>
                    <div className="code-snippet">
                        <h3><i>Example:</i></h3><br />
                        DELETE FROM employees<br />
                        WHERE first_name = 'John';<br />
                    </div>
                </section>

                <section className="note-section" id="create-query">
                    <h2>CREATE Table</h2>
                    <p>The CREATE statement is used to create a new table in the database.</p>
                    <div className="code-snippet">
                        <h3><i>Syntax:</i></h3><br />
                        CREATE TABLE table_name (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;column1 datatype,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;column2 datatype,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;...<br />
                        );<br />
                    </div>
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

export default NotesSQL;
