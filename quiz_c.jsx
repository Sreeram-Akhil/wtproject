import React, { useState } from "react";

const QuizC = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [showProgressWindow, setShowProgressWindow] = useState(false);

  const correctAnswers = {
    q1: "A",
    q2: "B",
    q3: "C",
    q4: "C",
    q5: "B",
    q6: "A",
    q7: "A",
    q8: "C",
    q9: "C",
    q10: "A",
    q11: "D",
    q12: "A",
    q13: "A",
    q14: "A",
    q15: "C",
    q16: "A",
    q17: "C",
    q18: "B",
    q19: "A",
    q20: "C",
    q21: "A",
    q22: "A",
    q23: "A",
    q24: "A",
    q25: "D",
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
        <div className="quiz-title">C Programming Quiz</div>
        <div className="nav-buttons">
          <button onClick={() => (window.location.href = "home.html")}>
            Home
          </button>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </header>

      <div className="quiz-container">
        <h1 className="quiz-header">C Quiz</h1>

        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(0)}>
            <span>C Basics and Syntax</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                1. Which of the following is the correct syntax to declare a
                variable in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q1" value="A" /> A. int x = 10;
                </label>
                <label>
                  <input type="radio" name="q1" value="B" /> B. x := 10
                </label>
                <label>
                  <input type="radio" name="q1" value="C" /> C. declare x = 10
                </label>
                <label>
                  <input type="radio" name="q1" value="D" /> D. var x = 10;
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                2. What is the default return type of a function in C if it is
                not specified?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q2" value="A" /> A. void
                </label>
                <label>
                  <input type="radio" name="q2" value="B" /> B. int
                </label>
                <label>
                  <input type="radio" name="q2" value="C" /> C. float
                </label>
                <label>
                  <input type="radio" name="q2" value="D" /> D. char
                </label>
              </div>
            </div>
            <div className="question">
              <p>3. Which symbol is used to terminate a statement in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q3" value="A" /> A. : (colon)
                </label>
                <label>
                  <input type="radio" name="q3" value="B" /> B. , (comma)
                </label>
                <label>
                  <input type="radio" name="q3" value="C" /> C. ; (semicolon)
                </label>
                <label>
                  <input type="radio" name="q3" value="D" /> D. . (dot)
                </label>
              </div>
            </div>
            <div className="question">
              <p>4. Which of the following is a valid identifier in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q4" value="A" /> A. int
                </label>
                <label>
                  <input type="radio" name="q4" value="B" /> B. 2variable
                </label>
                <label>
                  <input type="radio" name="q4" value="C" /> C. variable_1
                </label>
                <label>
                  <input type="radio" name="q4" value="D" /> D. #define
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                5. What will be the output of the following code?
                <br />
                <code>printf("%d", 5 + 2 * 3);</code>
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q5" value="A" /> A. 21
                </label>
                <label>
                  <input type="radio" name="q5" value="B" /> B. 11
                </label>
                <label>
                  <input type="radio" name="q5" value="C" /> C. 17
                </label>
                <label>
                  <input type="radio" name="q5" value="D" /> D. 10
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(1)}>
            <span>C Functions and Data Types</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>6. What is the correct syntax for defining a function in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q6" value="A" /> A. function int
                  foo();
                </label>
                <label>
                  <input type="radio" name="q6" value="B" /> B. int foo();
                </label>
                <label>
                  <input type="radio" name="q6" value="C" /> C. foo int();
                </label>
                <label>
                  <input type="radio" name="q6" value="D" /> D. def foo() int;
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                7. Which of the following is the correct syntax to declare an
                array in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q7" value="A" /> A. int arr[10];
                </label>
                <label>
                  <input type="radio" name="q7" value="B" /> B. int[] arr = 10;
                </label>
                <label>
                  <input type="radio" name="q7" value="C" /> C. arr[10] = int;
                </label>
                <label>
                  <input type="radio" name="q7" value="D" /> D. int arr(10);
                </label>
              </div>
            </div>
            <div className="question">
              <p>8. How do you define a pointer in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q8" value="A" /> A. int* ptr;
                </label>
                <label>
                  <input type="radio" name="q8" value="B" /> B. pointer int ptr;
                </label>
                <label>
                  <input type="radio" name="q8" value="C" /> C. ptr int*;
                </label>
                <label>
                  <input type="radio" name="q8" value="D" /> D. ptr* int;
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                9. Which function is used to dynamically allocate memory in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q9" value="A" /> A. malloc()
                </label>
                <label>
                  <input type="radio" name="q9" value="B" /> B. free()
                </label>
                <label>
                  <input type="radio" name="q9" value="C" /> C. realloc()
                </label>
                <label>
                  <input type="radio" name="q9" value="D" /> D. allocate()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                10. Which of the following types are used to store single
                characters in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q10" value="A" /> A. char
                </label>
                <label>
                  <input type="radio" name="q10" value="B" /> B. int
                </label>
                <label>
                  <input type="radio" name="q10" value="C" /> C. float
                </label>
                <label>
                  <input type="radio" name="q10" value="D" /> D. double
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(2)}>
            <span>C Control Flow and Arrays</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>11. Which statement is used to exit a loop in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q11" value="A" /> A. break
                </label>
                <label>
                  <input type="radio" name="q11" value="B" /> B. exit
                </label>
                <label>
                  <input type="radio" name="q11" value="C" /> C. return
                </label>
                <label>
                  <input type="radio" name="q11" value="D" /> D. continue
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                12. Which of the following loops is used when the number of
                iterations is known?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q12" value="A" /> A. for
                </label>
                <label>
                  <input type="radio" name="q12" value="B" /> B. while
                </label>
                <label>
                  <input type="radio" name="q12" value="C" /> C. do-while
                </label>
                <label>
                  <input type="radio" name="q12" value="D" /> D. foreach
                </label>
              </div>
            </div>
            <div className="question">
              <p>13. How would you define a multidimensional array in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q13" value="A" /> A. int arr[3][4];
                </label>
                <label>
                  <input type="radio" name="q13" value="B" /> B. int arr[3];[4]
                </label>
                <label>
                  <input type="radio" name="q13" value="C" /> C. arr[3,4] int;
                </label>
                <label>
                  <input type="radio" name="q13" value="D" /> D. int arr[4][3];
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                14. Which of the following functions is used to find the length
                of a string in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q14" value="A" /> A. length()
                </label>
                <label>
                  <input type="radio" name="q14" value="B" /> B. size()
                </label>
                <label>
                  <input type="radio" name="q14" value="C" /> C. strlen()
                </label>
                <label>
                  <input type="radio" name="q14" value="D" /> D. strlength()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                15. What is the correct syntax to declare a constant variable in
                C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q15" value="A" /> A. const int x =
                  10;
                </label>
                <label>
                  <input type="radio" name="q15" value="B" /> B. int const x =
                  10;
                </label>
                <label>
                  <input type="radio" name="q15" value="C" /> C. constant int x
                  = 10;
                </label>
                <label>
                  <input type="radio" name="q15" value="D" /> D. #define x 10;
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(3)}>
            <span>C Pointers and Memory Management</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>16. Which of the following is a valid pointer declaration?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q16" value="A" /> A. int* ptr;
                </label>
                <label>
                  <input type="radio" name="q16" value="B" /> B. ptr* int;
                </label>
                <label>
                  <input type="radio" name="q16" value="C" /> C. pointer int*
                  ptr;
                </label>
                <label>
                  <input type="radio" name="q16" value="D" /> D. int ptr*;
                </label>
              </div>
            </div>
            <div className="question">
              <p>17. What is the purpose of the `free()` function in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q17" value="A" /> A. To allocate
                  memory
                </label>
                <label>
                  <input type="radio" name="q17" value="B" /> B. To free up
                  allocated memory
                </label>
                <label>
                  <input type="radio" name="q17" value="C" /> C. To reallocate
                  memory
                </label>
                <label>
                  <input type="radio" name="q17" value="D" /> D. To check for
                  memory leaks
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                18. Which function is used to allocate memory dynamically in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q18" value="A" /> A. malloc()
                </label>
                <label>
                  <input type="radio" name="q18" value="B" /> B. calloc()
                </label>
                <label>
                  <input type="radio" name="q18" value="C" /> C. realloc()
                </label>
                <label>
                  <input type="radio" name="q18" value="D" /> D. allocate()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                19. How do you access a value stored at a pointer address in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q19" value="A" /> A. *ptr
                </label>
                <label>
                  <input type="radio" name="q19" value="B" /> B. ptr
                </label>
                <label>
                  <input type="radio" name="q19" value="C" /> C. &ptr
                </label>
                <label>
                  <input type="radio" name="q19" value="D" /> D. ptr[]
                </label>
              </div>
            </div>
            <div className="question">
              <p>20. What is the purpose of the `&` operator in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q20" value="A" /> A. To dereference
                  a pointer
                </label>
                <label>
                  <input type="radio" name="q20" value="B" /> B. To get the
                  address of a variable
                </label>
                <label>
                  <input type="radio" name="q20" value="C" /> C. To compare
                  values
                </label>
                <label>
                  <input type="radio" name="q20" value="D" /> D. To declare a
                  pointer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(4)}>
            <span>C Advanced Topics</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                21. Which of the following is a valid declaration of a structure
                in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q21" value="A" /> A. struct Person{" "}
                  {`int age; char name[30]; `};
                </label>
                <label>
                  <input type="radio" name="q21" value="B" /> B. struct{" "}
                  {`int age; char name[30]; `} Person;
                </label>
                <label>
                  <input type="radio" name="q21" value="C" /> C. Person struct{" "}
                  {`int age; char name[30]; `};
                </label>
                <label>
                  <input type="radio" name="q21" value="D" /> D. int struct
                  Person {`age; char name[30];`};
                </label>
              </div>
            </div>
            <div className="question">
              <p>22. How would you define a union in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q22" value="A" /> A. union{" "}
                  {` int x; float y; `};
                </label>
                <label>
                  <input type="radio" name="q22" value="B" /> B. struct{" "}
                  {` int x; float y;`};
                </label>
                <label>
                  <input type="radio" name="q22" value="C" /> C. union x{" "}
                  {` int x; float y; `};
                </label>
                <label>
                  <input type="radio" name="q22" value="D" /> D. union int{" "}
                  {` x;`};
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                23. Which of the following is true about function pointers in C?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q23" value="A" /> A. They point to
                  functions
                </label>
                <label>
                  <input type="radio" name="q23" value="B" /> B. They point to
                  variables
                </label>
                <label>
                  <input type="radio" name="q23" value="C" /> C. They are used
                  to pass arguments to functions
                </label>
                <label>
                  <input type="radio" name="q23" value="D" /> D. They can be
                  used to access array elements
                </label>
              </div>
            </div>
            <div className="question">
              <p>24. What does the `sizeof` operator do in C?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q24" value="A" /> A. Returns the
                  size of a variable
                </label>
                <label>
                  <input type="radio" name="q24" value="B" /> B. Returns the
                  size of a function
                </label>
                <label>
                  <input type="radio" name="q24" value="C" /> C. Returns the
                  size of an array
                </label>
                <label>
                  <input type="radio" name="q24" value="D" /> D. Returns the
                  size of a type
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                25. What is the output of this code snippet?
                <br />
                <code>printf("%d", sizeof(int));</code>
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q25" value="A" /> A. 2
                </label>
                <label>
                  <input type="radio" name="q25" value="B" /> B. 4
                </label>
                <label>
                  <input type="radio" name="q25" value="C" /> C. 8
                </label>
                <label>
                  <input type="radio" name="q25" value="D" /> D. 1
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
              Incorrect Answers:
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

export default QuizC;
