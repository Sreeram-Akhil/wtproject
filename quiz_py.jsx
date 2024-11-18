import React, { useState } from "react";

const QuizPY = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [showProgressWindow, setShowProgressWindow] = useState(false);

  const correctAnswers = {
    q1: "B",
    q2: "A",
    q3: "A",
    q4: "A",
    q5: "B",
    q6: "A",
    q7: "B",
    q8: "C",
    q9: "D",
    q10: "B",
    q11: "A",
    q12: "C",
    q13: "B",
    q14: "D",
    q15: "A",
    q16: "A",
    q17: "B",
    q18: "A",
    q19: "B",
    q20: "A",
    q21: "B",
    q22: "D",
    q23: "B",
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
  font-size: 2em;
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
        <div className="quiz-title">PYTHON Quiz</div>
        <div className="nav-buttons">
          <button onClick={() => (window.location.href = "home.html")}>
            Home
          </button>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </header>

      <div className="quiz-container">
        <h1 className="quiz-header">PYTHON Quiz</h1>

        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(0)}>
            <span>Python Basics and Syntax</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                1. What is the correct syntax to declare a variable in Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q1" value="A" /> A. int x=5
                </label>
                <label>
                  <input type="radio" name="q1" value="B" /> B. x = 5
                </label>
                <label>
                  <input type="radio" name="q1" value="C" /> C. 5 = x
                </label>
                <label>
                  <input type="radio" name="q1" value="D" /> D. x:5
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                2. Which of the following is the default data type in Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q2" value="A" /> A. int
                </label>
                <label>
                  <input type="radio" name="q2" value="B" /> B. str
                </label>
                <label>
                  <input type="radio" name="q2" value="C" /> C. float
                </label>
                <label>
                  <input type="radio" name="q2" value="D" /> D. bool
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                3. What does the following code do?{" "}
                <code>x = 'hello' + ' world'</code>
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q3" value="A" /> A. Concatenates two
                  strings
                </label>
                <label>
                  <input type="radio" name="q3" value="B" /> B. Adds two
                  integers
                </label>
                <label>
                  <input type="radio" name="q3" value="C" /> C. Multiplies the
                  strings
                </label>
                <label>
                  <input type="radio" name="q3" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>
            <div className="question">
              <p>4. Which keyword is used to define a function in Python?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q4" value="A" /> A. def
                </label>
                <label>
                  <input type="radio" name="q4" value="B" /> B. func
                </label>
                <label>
                  <input type="radio" name="q4" value="C" /> C. function
                </label>
                <label>
                  <input type="radio" name="q4" value="D" /> D. define
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                5. What is the result of <code>5 // 2</code> in Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q5" value="A" /> A. 2.5
                </label>
                <label>
                  <input type="radio" name="q5" value="B" /> B. 2
                </label>
                <label>
                  <input type="radio" name="q5" value="C" /> C. 3
                </label>
                <label>
                  <input type="radio" name="q5" value="D" /> D. Error
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(1)}>
            <span>Control Flow in Python</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                6. Which of the following is used to start a loop in Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q6" value="A" /> A. if
                </label>
                <label>
                  <input type="radio" name="q6" value="B" /> B. for
                </label>
                <label>
                  <input type="radio" name="q6" value="C" /> C. while
                </label>
                <label>
                  <input type="radio" name="q6" value="D" /> D. break
                </label>
              </div>
            </div>
            <div className="question">
              <p>7. What does the "break" statement do in a loop?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q7" value="A" /> A. Skips the
                  current iteration of the loop
                </label>
                <label>
                  <input type="radio" name="q7" value="B" /> B. Stops the loop
                  entirely
                </label>
                <label>
                  <input type="radio" name="q7" value="C" /> C. Continues the
                  loop from the next iteration
                </label>
                <label>
                  <input type="radio" name="q7" value="D" /> D. Pauses the loop
                  execution
                </label>
              </div>
            </div>
            <div className="question">
              <p>8. Which statement is used to exit a loop in Python?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q8" value="A" /> A. continue
                </label>
                <label>
                  <input type="radio" name="q8" value="B" /> B. exit
                </label>
                <label>
                  <input type="radio" name="q8" value="C" /> C. break
                </label>
                <label>
                  <input type="radio" name="q8" value="D" /> D. stop
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                9. What is the purpose of the "continue" statement in a loop?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q9" value="A" /> A. Exits the loop
                </label>
                <label>
                  <input type="radio" name="q9" value="B" /> B. Skips the
                  current iteration and proceeds to the next one
                </label>
                <label>
                  <input type="radio" name="q9" value="C" /> C. Restarts the
                  loop
                </label>
                <label>
                  <input type="radio" name="q9" value="D" /> D. Stops the
                  program
                </label>
              </div>
            </div>
            <div className="question">
              <p>10. How do you define an "else" statement in Python?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q10" value="A" /> A. It is used to
                  run a block of code if the condition is true
                </label>
                <label>
                  <input type="radio" name="q10" value="B" /> B. It is used to
                  run a block of code if the condition is false
                </label>
                <label>
                  <input type="radio" name="q10" value="C" /> C. It is used for
                  loop termination
                </label>
                <label>
                  <input type="radio" name="q10" value="D" /> D. It is used to
                  break a loop
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(2)}>
            <span>Functions in Python</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>11. How do you define a function in Python?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q11" value="A" /> A. function
                  myFunction():
                </label>
                <label>
                  <input type="radio" name="q11" value="B" /> B. def
                  myFunction():
                </label>
                <label>
                  <input type="radio" name="q11" value="C" /> C. function =
                  myFunction()
                </label>
                <label>
                  <input type="radio" name="q11" value="D" /> D. create function
                  myFunction:
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                12. What is the purpose of the "return" statement in a function?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q12" value="A" /> A. It exits the
                  function and returns a value
                </label>
                <label>
                  <input type="radio" name="q12" value="B" /> B. It starts the
                  function
                </label>
                <label>
                  <input type="radio" name="q12" value="C" /> C. It continues
                  the function
                </label>
                <label>
                  <input type="radio" name="q12" value="D" /> D. It raises an
                  error
                </label>
              </div>
            </div>
            <div className="question">
              <p>13. How can you pass parameters to a Python function?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q13" value="A" /> A. By assigning
                  values within the function
                </label>
                <label>
                  <input type="radio" name="q13" value="B" /> B. By including
                  them in the function definition
                </label>
                <label>
                  <input type="radio" name="q13" value="C" /> C. By using the
                  global variables
                </label>
                <label>
                  <input type="radio" name="q13" value="D" /> D. Parameters
                  cannot be passed in Python
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                14. What is the result of calling <code>myFunction(2, 3)</code>{" "}
                if the function is defined as <code>def myFunction(a, b):</code>
                ?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q14" value="A" /> A. It will return
                  5 if the function has return statement <code>a + b</code>
                </label>
                <label>
                  <input type="radio" name="q14" value="B" /> B. It will cause
                  an error
                </label>
                <label>
                  <input type="radio" name="q14" value="C" /> C. It will return
                  None
                </label>
                <label>
                  <input type="radio" name="q14" value="D" /> D. It will print
                  the result but not return anything
                </label>
              </div>
            </div>
            <div className="question">
              <p>15. What is a lambda function in Python?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q15" value="A" /> A. A regular
                  function that uses <code>def</code>
                </label>
                <label>
                  <input type="radio" name="q15" value="B" /> B. A function
                  without any parameters
                </label>
                <label>
                  <input type="radio" name="q15" value="C" /> C. A function
                  defined using <code>lambda</code> keyword
                </label>
                <label>
                  <input type="radio" name="q15" value="D" /> D. A function that
                  returns a list
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(3)}>
            <span>Data Structures in Python</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                16. Which of the following is a mutable data type in Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q16" value="A" /> A. List
                </label>
                <label>
                  <input type="radio" name="q16" value="B" /> B. Tuple
                </label>
                <label>
                  <input type="radio" name="q16" value="C" /> C. String
                </label>
                <label>
                  <input type="radio" name="q16" value="D" /> D. Set
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                17. How do you access the first element of a list{" "}
                <code>myList</code> in Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q17" value="A" /> A.{" "}
                  <code>myList[0]</code>
                </label>
                <label>
                  <input type="radio" name="q17" value="B" /> B.{" "}
                  <code>myList[1]</code>
                </label>
                <label>
                  <input type="radio" name="q17" value="C" /> C.{" "}
                  <code>myList[-1]</code>
                </label>
                <label>
                  <input type="radio" name="q17" value="D" /> D.{" "}
                  <code>myList.first()</code>
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                18. What is the result of{" "}
                <code>myList = [1, 2, 3]; myList[0] = 10</code>?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q18" value="A" /> A. [10, 2, 3]
                </label>
                <label>
                  <input type="radio" name="q18" value="B" /> B. [1, 2, 3]
                </label>
                <label>
                  <input type="radio" name="q18" value="C" /> C. Error
                </label>
                <label>
                  <input type="radio" name="q18" value="D" /> D. [10]
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                19. Which method is used to add an element at the end of a list?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q19" value="A" /> A.{" "}
                  <code>append()</code>
                </label>
                <label>
                  <input type="radio" name="q19" value="B" /> B.{" "}
                  <code>add()</code>
                </label>
                <label>
                  <input type="radio" name="q19" value="C" /> C.{" "}
                  <code>insert()</code>
                </label>
                <label>
                  <input type="radio" name="q19" value="D" /> D.{" "}
                  <code>extend()</code>
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                20. What will <code>len([1, 2, 3])</code> return?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q20" value="A" /> A. 3
                </label>
                <label>
                  <input type="radio" name="q20" value="B" /> B. 2
                </label>
                <label>
                  <input type="radio" name="q20" value="C" /> C. [1, 2, 3]
                </label>
                <label>
                  <input type="radio" name="q20" value="D" /> D. Error
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(4)}>
            <span>Additional Python Concepts</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>21. What is a Python decorator?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q21" value="A" /> A. A function that
                  modifies another function
                </label>
                <label>
                  <input type="radio" name="q21" value="B" /> B. A class that
                  modifies another class
                </label>
                <label>
                  <input type="radio" name="q21" value="C" /> C. A type of
                  variable
                </label>
                <label>
                  <input type="radio" name="q21" value="D" /> D. A type of
                  exception
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                22. What is the output of the following code?{" "}
                <code>print(type(3.14))</code>
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q22" value="A" /> A.{" "}
                  <code>&ltclass 'int'&gt</code>
                </label>
                <label>
                  <input type="radio" name="q22" value="B" /> B.{" "}
                  <code>&ltclass 'str'&gt</code>
                </label>
                <label>
                  <input type="radio" name="q22" value="C" /> C.{" "}
                  <code>&ltclass 'float'&gt</code>
                </label>
                <label>
                  <input type="radio" name="q22" value="D" /> D.{" "}
                  <code>&ltclass 'bool'&gt</code>
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                23. Which of the following is used to handle exceptions in
                Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q23" value="A" /> A.{" "}
                  <code>try</code> and <code>except</code>
                </label>
                <label>
                  <input type="radio" name="q23" value="B" /> B.{" "}
                  <code>catch</code> and <code>throw</code>
                </label>
                <label>
                  <input type="radio" name="q23" value="C" /> C.{" "}
                  <code>raise</code> and <code>finally</code>
                </label>
                <label>
                  <input type="radio" name="q23" value="D" /> D.{" "}
                  <code>try</code> and <code>catch</code>
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                24. What does the <code>break</code> statement do in a loop?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q24" value="A" /> A. Exits the loop
                </label>
                <label>
                  <input type="radio" name="q24" value="B" /> B. Skips to the
                  next iteration of the loop
                </label>
                <label>
                  <input type="radio" name="q24" value="C" /> C. Ends the
                  program
                </label>
                <label>
                  <input type="radio" name="q24" value="D" /> D. Repeats the
                  loop
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                25. What is the purpose of the <code>with</code> statement in
                Python?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q25" value="A" /> A. To define a
                  function
                </label>
                <label>
                  <input type="radio" name="q25" value="B" /> B. To handle
                  resources like files automatically
                </label>
                <label>
                  <input type="radio" name="q25" value="C" /> C. To create a
                  loop
                </label>
                <label>
                  <input type="radio" name="q25" value="D" /> D. To handle
                  exceptions
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

export default QuizPY;
