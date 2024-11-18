import React, { useState } from "react";

const QuizSQL = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [showProgressWindow, setShowProgressWindow] = useState(false);

  const correctAnswers = {
    q1: "A",
    q2: "B",
    q3: "A",
    q4: "C",
    q5: "A",
    q6: "A",
    q7: "A",
    q8: "D",
    q9: "A",
    q10: "C",
    q11: "A",
    q12: "A",
    q13: "A",
    q14: "A",
    q15: "A",
    q16: "A",
    q17: "A",
    q18: "A",
    q19: "A",
    q20: "A",
    q21: "A",
    q22: "A",
    q23: "A",
    q24: "A",
    q25: "A",
  };

  const toggleSubtopic = (index) => {
    const element = document.querySelectorAll(".subtopic-questions")[index];
    const icon = document.querySelectorAll(".subtopic-header i")[index];
    if (element.style.display === "none" || !element.style.display) {
      element.style.display = "block";
      icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      element.style.display = "none";
      icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  };

  const checkAnswers = () => {
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let incorrect = [];

    for (let key in correctAnswers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === correctAnswers[key]) {
        score++;
      } else if (selected) {
        incorrect.push({ question: key, correctAnswer: correctAnswers[key] });
      }
    }

    setScore(score);
    setProgress((score / totalQuestions) * 100);
    setIncorrectQuestions(incorrect);
    setShowProgressWindow(true);
  };

  const closeProgressWindow = () => {
    setShowProgressWindow(false);
  };

  return (
    <div>
      <style>
        {`
                    body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f4f8;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styles */
header {
  background-color: #7120ab;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 2em;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header .nav-buttons {
  position: absolute;
  right: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

header .nav-buttons button {
  padding: 12px 20px;
  background-color: #7433B2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

header .nav-buttons button:hover {
  background-color: #9c4cc3;
}

header .logo {
  position: absolute;
  left: 20px;
}

/* Main container for quiz content */
.quiz-container {
  flex: 1;
  padding: 30px;
  margin: 20px auto;
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.quiz-header {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 2.5em;
  font-weight: bold;
}

.subtopic {
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.subtopic-header {
  background-color: #7120ab;
  color: white;
  padding: 10px 20px;
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question {
  margin: 15px;
  padding: 15px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.question p {
  margin: 0;
  font-size: 1.2em;
  color: #555;
}

.options {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.options label {
  font-size: 1.1em;
  margin-left: 10px;
  color: #333;
  cursor: pointer;
}

button.submit-btn {
  padding: 12px 30px;
  font-size: 1.1em;
  background-color: #8525af;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  width: 100%;
  margin-top: 25px;
}

footer {
background-color: #555353;
color: white;
padding: 10px 20px; /* Reduced padding */
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

.result {
  margin-top: 15px;
  font-size: 1.5em;
  color: #7120ab;
  text-align: center;
  font-weight: bold;
}

/* Progress bar window */
.progress-window {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  width: 400px;
  text-align: center;
}

.progress-window button {
  background-color: #7433B2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 6px;
  margin-top: 20px;
  height: 20px;
}

.progress-bar-fill {
  height: 100%;
  background-color: #7120ab;
  width: 0;
  border-radius: 6px;
  transition: width 1s;
}
/* Modal background */
.progress-modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

/* Modal content */
.modal-content {
background-color: white;
padding: 20px;
border-radius: 10px;
text-align: center;
width: 300px;
}

button {
padding: 10px;
margin-top: 20px;
cursor: pointer;
}

#progress-bar {
height: 30px;
background-color: #4caf50;
border-radius: 5px;
transition: width 0.3s ease-in-out;
}
                `}
      </style>
      <header className="quiz-header">
        <div className="logo">
          <img src="logo.jpg" alt="Logo" height="40" />
        </div>
        <div className="quiz-title">SQL Quiz</div>
        <div className="nav-buttons">
          <button onClick={() => (window.location.href = "home.html")}>
            Home
          </button>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </header>

      <div className="quiz-container">
        <h1 className="quiz-header">SQL Quiz</h1>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(0)}>
            <span>Basic SQL Queries</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                1. What SQL query is used to select all records from a table
                named `employees`?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q1" value="A" /> A. SELECT * FROM
                  employees;
                </label>
                <label>
                  <input type="radio" name="q1" value="B" /> B. GET * FROM
                  employees;
                </label>
                <label>
                  <input type="radio" name="q1" value="C" /> C. SELECT all FROM
                  employees;
                </label>
                <label>
                  <input type="radio" name="q1" value="D" /> D. SELECT employees
                  FROM *;
                </label>
              </div>
            </div>
            <div className="question">
              <p>2. Which SQL keyword is used to retrieve unique values?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q2" value="A" /> A. DISTINCT
                </label>
                <label>
                  <input type="radio" name="q2" value="B" /> B. UNIQUE
                </label>
                <label>
                  <input type="radio" name="q2" value="C" /> C. SELECT DISTINCT
                </label>
                <label>
                  <input type="radio" name="q2" value="D" /> D. UNIQUE VALUES
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                3. How would you order the result of a query by the column `age`
                in descending order?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q3" value="A" /> A. ORDER BY age
                  DESC;
                </label>
                <label>
                  <input type="radio" name="q3" value="B" /> B. ORDER age DESC;
                </label>
                <label>
                  <input type="radio" name="q3" value="C" /> C. SORT BY age
                  DESC;
                </label>
                <label>
                  <input type="radio" name="q3" value="D" /> D. ORDER DESC age;
                </label>
              </div>
            </div>
            <div className="question">
              <p>4. Which SQL clause is used to filter records?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q4" value="A" /> A. WHERE
                </label>
                <label>
                  <input type="radio" name="q4" value="B" /> B. FILTER
                </label>
                <label>
                  <input type="radio" name="q4" value="C" /> C. HAVING
                </label>
                <label>
                  <input type="radio" name="q4" value="D" /> D. SELECT
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                5. Which of the following SQL queries will return the number of
                records in the `orders` table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q5" value="A" /> A. SELECT COUNT(*)
                  FROM orders;
                </label>
                <label>
                  <input type="radio" name="q5" value="B" /> B. SELECT SUM(*)
                  FROM orders;
                </label>
                <label>
                  <input type="radio" name="q5" value="C" /> C. SELECT NUMBER(*)
                  FROM orders;
                </label>
                <label>
                  <input type="radio" name="q5" value="D" /> D. SELECT TOTAL(*)
                  FROM orders;
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(1)}>
            <span>Joins and Subqueries</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                6. Which type of join returns all records from the left table
                and matched records from the right table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q6" value="A" /> A. LEFT JOIN
                </label>
                <label>
                  <input type="radio" name="q6" value="B" /> B. RIGHT JOIN
                </label>
                <label>
                  <input type="radio" name="q6" value="C" /> C. INNER JOIN
                </label>
                <label>
                  <input type="radio" name="q6" value="D" /> D. FULL OUTER JOIN
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                7. What will be the result of an `INNER JOIN` between two
                tables?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q7" value="A" /> A. Only matching
                  records from both tables
                </label>
                <label>
                  <input type="radio" name="q7" value="B" /> B. All records from
                  the left table
                </label>
                <label>
                  <input type="radio" name="q7" value="C" /> C. All records from
                  the right table
                </label>
                <label>
                  <input type="radio" name="q7" value="D" /> D. All records from
                  both tables, including unmatched rows
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                8. Which keyword is used in a subquery to get values from a
                second query?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q8" value="A" /> A. IN
                </label>
                <label>
                  <input type="radio" name="q8" value="B" /> B. WITH
                </label>
                <label>
                  <input type="radio" name="q8" value="C" /> C. SELECT
                </label>
                <label>
                  <input type="radio" name="q8" value="D" /> D. EXISTS
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                9. How can you find the maximum salary from an `employees`
                table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q9" value="A" /> A. SELECT
                  MAX(salary) FROM employees;
                </label>
                <label>
                  <input type="radio" name="q9" value="B" /> B. SELECT TOP 1
                  salary FROM employees;
                </label>
                <label>
                  <input type="radio" name="q9" value="C" /> C. SELECT
                  highest(salary) FROM employees;
                </label>
                <label>
                  <input type="radio" name="q9" value="D" /> D. SELECT salary
                  FROM employees ORDER BY salary DESC LIMIT 1;
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                10. Which type of join returns all records from both the left
                and right tables, and null values for non-matching rows?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q10" value="A" /> A. LEFT JOIN
                </label>
                <label>
                  <input type="radio" name="q10" value="B" /> B. RIGHT JOIN
                </label>
                <label>
                  <input type="radio" name="q10" value="C" /> C. FULL OUTER JOIN
                </label>
                <label>
                  <input type="radio" name="q10" value="D" /> D. INNER JOIN
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(2)}>
            <span>SQL Data Manipulation</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                11. Which SQL command is used to update existing records in a
                table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q11" value="A" /> A. UPDATE
                </label>
                <label>
                  <input type="radio" name="q11" value="B" /> B. MODIFY
                </label>
                <label>
                  <input type="radio" name="q11" value="C" /> C. SET
                </label>
                <label>
                  <input type="radio" name="q11" value="D" /> D. CHANGE
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                12. Which SQL command is used to delete records from a table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q12" value="A" /> A. DELETE
                </label>
                <label>
                  <input type="radio" name="q12" value="B" /> B. REMOVE
                </label>
                <label>
                  <input type="radio" name="q12" value="C" /> C. REMOVE FROM
                </label>
                <label>
                  <input type="radio" name="q12" value="D" /> D. DROP
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                13. What command is used to insert data into a table in SQL?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q13" value="A" /> A. INSERT INTO
                </label>
                <label>
                  <input type="radio" name="q13" value="B" /> B. ADD RECORD
                </label>
                <label>
                  <input type="radio" name="q13" value="C" /> C. UPDATE INTO
                </label>
                <label>
                  <input type="radio" name="q13" value="D" /> D. INSERT
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                14. What keyword is used to add a new column to an existing
                table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q14" value="A" /> A. ADD COLUMN
                </label>
                <label>
                  <input type="radio" name="q14" value="B" /> B. MODIFY TABLE
                </label>
                <label>
                  <input type="radio" name="q14" value="C" /> C. ALTER TABLE
                </label>
                <label>
                  <input type="radio" name="q14" value="D" /> D. CHANGE TABLE
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                15. Which of the following statements is used to remove all
                records from a table without deleting the table structure?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q15" value="A" /> A. TRUNCATE
                </label>
                <label>
                  <input type="radio" name="q15" value="B" /> B. DELETE
                </label>
                <label>
                  <input type="radio" name="q15" value="C" /> C. DROP
                </label>
                <label>
                  <input type="radio" name="q15" value="D" /> D. REMOVE
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(3)}>
            <span>SQL Data Definition</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>16. Which SQL command is used to create a new table?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q16" value="A" /> A. CREATE TABLE
                </label>
                <label>
                  <input type="radio" name="q16" value="B" /> B. ADD TABLE
                </label>
                <label>
                  <input type="radio" name="q16" value="C" /> C. NEW TABLE
                </label>
                <label>
                  <input type="radio" name="q16" value="D" /> D. MAKE TABLE
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                17. Which SQL statement is used to delete a table in a database?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q17" value="A" /> A. DROP TABLE
                </label>
                <label>
                  <input type="radio" name="q17" value="B" /> B. DELETE TABLE
                </label>
                <label>
                  <input type="radio" name="q17" value="C" /> C. REMOVE TABLE
                </label>
                <label>
                  <input type="radio" name="q17" value="D" /> D. TRUNCATE TABLE
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                18. Which SQL command is used to add a column to an existing
                table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q18" value="A" /> A. ALTER TABLE ADD
                  COLUMN
                </label>
                <label>
                  <input type="radio" name="q18" value="B" /> B. ADD COLUMN TO
                  TABLE
                </label>
                <label>
                  <input type="radio" name="q18" value="C" /> C. MODIFY TABLE
                </label>
                <label>
                  <input type="radio" name="q18" value="D" /> D. CREATE COLUMN
                </label>
              </div>
            </div>
            <div className="question">
              <p>19. What command would you use to rename a table?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q19" value="A" /> A. RENAME TABLE
                </label>
                <label>
                  <input type="radio" name="q19" value="B" /> B. CHANGE TABLE
                </label>
                <label>
                  <input type="radio" name="q19" value="C" /> C. MODIFY TABLE
                </label>
                <label>
                  <input type="radio" name="q19" value="D" /> D. UPDATE TABLE
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                20. Which command is used to modify the structure of an existing
                column in a table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q20" value="A" /> A. ALTER COLUMN
                </label>
                <label>
                  <input type="radio" name="q20" value="B" /> B. MODIFY COLUMN
                </label>
                <label>
                  <input type="radio" name="q20" value="C" /> C. UPDATE COLUMN
                </label>
                <label>
                  <input type="radio" name="q20" value="D" /> D. CHANGE COLUMN
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(5)}>
            <span>SQL Functions</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                21. Which SQL function is used to return the total number of
                rows in a table?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q21" value="A" /> A. COUNT()
                </label>
                <label>
                  <input type="radio" name="q21" value="B" /> B. SUM()
                </label>
                <label>
                  <input type="radio" name="q21" value="C" /> C. AVG()
                </label>
                <label>
                  <input type="radio" name="q21" value="D" /> D. TOTAL()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                22. Which SQL function is used to find the average value of a
                column?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q22" value="A" /> A. AVG()
                </label>
                <label>
                  <input type="radio" name="q22" value="B" /> B. SUM()
                </label>
                <label>
                  <input type="radio" name="q22" value="C" /> C. MEAN()
                </label>
                <label>
                  <input type="radio" name="q22" value="D" /> D. COUNT()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                23. Which SQL function is used to calculate the total sum of a
                numeric column?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q23" value="A" /> A. SUM()
                </label>
                <label>
                  <input type="radio" name="q23" value="B" /> B. COUNT()
                </label>
                <label>
                  <input type="radio" name="q23" value="C" /> C. AVG()
                </label>
                <label>
                  <input type="radio" name="q23" value="D" /> D. TOTAL()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                24. Which SQL function is used to return the highest value in a
                column?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q24" value="A" /> A. MAX()
                </label>
                <label>
                  <input type="radio" name="q24" value="B" /> B. MIN()
                </label>
                <label>
                  <input type="radio" name="q24" value="C" /> C. GREATEST()
                </label>
                <label>
                  <input type="radio" name="q24" value="D" /> D. TOP()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                25. Which SQL function is used to return the lowest value in a
                column?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q25" value="A" /> A. MIN()
                </label>
                <label>
                  <input type="radio" name="q25" value="B" /> B. MAX()
                </label>
                <label>
                  <input type="radio" name="q25" value="C" /> C. LOWEST()
                </label>
                <label>
                  <input type="radio" name="q25" value="D" /> D. LEAST()
                </label>
              </div>
            </div>
          </div>
        </div>

        <button className="submit-btn" onClick={checkAnswers}>
          Submit Quiz
        </button>
        <div className="result">{`Score: ${score}`}</div>
      </div>

      {showProgressWindow && (
        <div className="progress-modal">
          <div className="modal-content">
            <h2>Your Progress</h2>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <ul>
              {incorrectQuestions.length === 0 ? (
                <li>All answers are correct!</li>
              ) : (
                incorrectQuestions.map((item, index) => (
                  <li key={index}>
                    Question {item.question.slice(1)} - Correct Answer:{" "}
                    {item.correctAnswer}
                  </li>
                ))
              )}
            </ul>
            <button onClick={closeProgressWindow}>Close</button>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <img src="logo.jpg" alt="Logo" />
          </div>
          <div className="footer-center">
            <p>SEEK BEYOND</p>
            <div className="social-links">
              <a href="#" target="_blank" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuizSQL;
