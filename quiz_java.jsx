import React, { useState } from "react";

const QuizJAVA = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [showProgressWindow, setShowProgressWindow] = useState(false);

  const correctAnswers = {
    q1: "A",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "B",
    q6: "A",
    q7: "B",
    q8: "C",
    q9: "D",
    q10: "A",
    q11: "A",
    q12: "C",
    q13: "A",
    q14: "B",
    q15: "A",
    q16: "B",
    q17: "A",
    q18: "A",
    q19: "B",
    q20: "A",
    q21: "B",
    q22: "C",
    q23: "A",
    q24: "B",
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
        <div className="quiz-title">JAVA Quiz</div>
        <div className="nav-buttons">
          <button onClick={() => (window.location.href = "home.html")}>
            Home
          </button>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </header>

      <div className="quiz-container">
        <h1 className="quiz-header">JAVA Quiz</h1>

        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(0)}>
            <span>Java Basics and Syntax</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                1. Which of the following is the correct way to declare a
                variable in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q1" value="A" /> A. int x;
                </label>
                <label>
                  <input type="radio" name="q1" value="B" /> B. x int;
                </label>
                <label>
                  <input type="radio" name="q1" value="C" /> C. variable x;
                </label>
                <label>
                  <input type="radio" name="q1" value="D" /> D. int: x;
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                2. Which data type is used to create a variable that should
                store text?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q2" value="A" /> A. string
                </label>
                <label>
                  <input type="radio" name="q2" value="B" /> B. String
                </label>
                <label>
                  <input type="radio" name="q2" value="C" /> C. text
                </label>
                <label>
                  <input type="radio" name="q2" value="D" /> D. char
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                3. Which keyword is used to create a constant variable in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q3" value="A" /> A. final
                </label>
                <label>
                  <input type="radio" name="q3" value="B" /> B. constant
                </label>
                <label>
                  <input type="radio" name="q3" value="C" /> C. static
                </label>
                <label>
                  <input type="radio" name="q3" value="D" /> D. const
                </label>
              </div>
            </div>
            <div className="question">
              <p>4. How do you print a message to the console in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q4" value="A" /> A. print("Hello
                  World")
                </label>
                <label>
                  <input type="radio" name="q4" value="B" /> B. println("Hello
                  World")
                </label>
                <label>
                  <input type="radio" name="q4" value="C" /> C.
                  System.out.println("Hello World")
                </label>
                <label>
                  <input type="radio" name="q4" value="D" /> D.
                  Console.print("Hello World")
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                5. Which of the following is the correct way to declare a method
                in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q5" value="A" /> A. public void
                  methodName()
                </label>
                <label>
                  <input type="radio" name="q5" value="B" /> B. void methodName
                  public()
                </label>
                <label>
                  <input type="radio" name="q5" value="C" /> C. public
                  methodName()
                </label>
                <label>
                  <input type="radio" name="q5" value="D" /> D. methodName
                  public void()
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(1)}>
            <span>Control Flow</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                6. Which of the following is the correct syntax for an "if"
                statement in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q6" value="A" /> A. if {`(x > 0)`}
                </label>
                <label>
                  <input type="radio" name="q6" value="B" /> B. if {`x > 0`}{" "}
                  then
                </label>
                <label>
                  <input type="radio" name="q6" value="C" /> C. if {`(x > 0)`}{" "}
                  {}
                </label>
                <label>
                  <input type="radio" name="q6" value="D" /> D. if {`x > 0`} {}
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                7. Which of the following loops will execute the block of code
                at least once?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q7" value="A" /> A. while loop
                </label>
                <label>
                  <input type="radio" name="q7" value="B" /> B. for loop
                </label>
                <label>
                  <input type="radio" name="q7" value="C" /> C. do-while loop
                </label>
                <label>
                  <input type="radio" name="q7" value="D" /> D. all of the above
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                8. What will the following code print:{" "}
                <code>
                  int x = 5; System.out.println{`(x < 10`} ? "True" : "False");
                </code>
                ?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q8" value="A" /> A. True
                </label>
                <label>
                  <input type="radio" name="q8" value="B" /> B. False
                </label>
                <label>
                  <input type="radio" name="q8" value="C" /> C. 5
                </label>
                <label>
                  <input type="radio" name="q8" value="D" /> D. Compilation
                  error
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                9. Which of the following statements is true about the "break"
                statement in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q9" value="A" /> A. It is used to
                  exit a loop or switch statement
                </label>
                <label>
                  <input type="radio" name="q9" value="B" /> B. It pauses the
                  execution of the loop
                </label>
                <label>
                  <input type="radio" name="q9" value="C" /> C. It skips the
                  current iteration of the loop
                </label>
                <label>
                  <input type="radio" name="q9" value="D" /> D. It is not used
                  in Java
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                10. What will the following code output:{" "}
                <code>
                  int x = 10; while {`(x > 0) { x--; System.out.println(x); `}
                </code>
                ?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q10" value="A" /> A. 10 to 1
                </label>
                <label>
                  <input type="radio" name="q10" value="B" /> B. 0 to 10
                </label>
                <label>
                  <input type="radio" name="q10" value="C" /> C. 10 to 0
                </label>
                <label>
                  <input type="radio" name="q10" value="D" /> D. Compilation
                  error
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(2)}>
            <span>Functions</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>11. How do you declare a function in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q11" value="A" /> A. function name()
                </label>
                <label>
                  <input type="radio" name="q11" value="B" /> B. void name()
                </label>
                <label>
                  <input type="radio" name="q11" value="C" /> C. public void
                  name()
                </label>
                <label>
                  <input type="radio" name="q11" value="D" /> D. void name
                  public()
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                12. What does the following function signature indicate:{" "}
                <code>public int add(int a, int b)</code>?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q12" value="A" /> A. It returns an
                  integer value and takes two integer arguments
                </label>
                <label>
                  <input type="radio" name="q12" value="B" /> B. It returns a
                  void and takes two integer arguments
                </label>
                <label>
                  <input type="radio" name="q12" value="C" /> C. It returns an
                  integer and takes no arguments
                </label>
                <label>
                  <input type="radio" name="q12" value="D" /> D. It takes no
                  arguments
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                13. Which of the following is a correct function call in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q13" value="A" /> A. add(5, 10);
                </label>
                <label>
                  <input type="radio" name="q13" value="B" /> B. add{`<int>`}(5,
                  10);
                </label>
                <label>
                  <input type="radio" name="q13" value="C" /> C. add(5 + 10);
                </label>
                <label>
                  <input type="radio" name="q13" value="D" /> D. function add(5,
                  10);
                </label>
              </div>
            </div>
            <div className="question">
              <p>14. What is a return type in Java functions?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q14" value="A" /> A. The type of
                  value the function returns
                </label>
                <label>
                  <input type="radio" name="q14" value="B" /> B. The type of
                  value the function accepts
                </label>
                <label>
                  <input type="radio" name="q14" value="C" /> C. The type of
                  function definition
                </label>
                <label>
                  <input type="radio" name="q14" value="D" /> D. The function's
                  name
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                15. Which of the following is a correct way to call a method
                with arguments?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q15" value="A" /> A. method(arg1,
                  arg2);
                </label>
                <label>
                  <input type="radio" name="q15" value="B" /> B. method(arg1);
                </label>
                <label>
                  <input type="radio" name="q15" value="C" /> C. method();
                </label>
                <label>
                  <input type="radio" name="q15" value="D" /> D. all of the
                  above
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(3)}>
            <span>OOP Concepts</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                16. Which of the following is a feature of Object-Oriented
                Programming?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q16" value="A" /> A. Inheritance
                </label>
                <label>
                  <input type="radio" name="q16" value="B" /> B. Polymorphism
                </label>
                <label>
                  <input type="radio" name="q16" value="C" /> C. Encapsulation
                </label>
                <label>
                  <input type="radio" name="q16" value="D" /> D. All of the
                  above
                </label>
              </div>
            </div>
            <div className="question">
              <p>17. Which keyword is used to inherit a class in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q17" value="A" /> A. extend
                </label>
                <label>
                  <input type="radio" name="q17" value="B" /> B. inherit
                </label>
                <label>
                  <input type="radio" name="q17" value="C" /> C. extends
                </label>
                <label>
                  <input type="radio" name="q17" value="D" /> D. implements
                </label>
              </div>
            </div>
            <div className="question">
              <p>18. What is the purpose of the "super" keyword in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q18" value="A" /> A. To call the
                  constructor of the superclass
                </label>
                <label>
                  <input type="radio" name="q18" value="B" /> B. To override
                  methods of the superclass
                </label>
                <label>
                  <input type="radio" name="q18" value="C" /> C. To define the
                  superclass
                </label>
                <label>
                  <input type="radio" name="q18" value="D" /> D. To prevent
                  inheritance
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                19. Which of the following is an example of polymorphism in
                Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q19" value="A" /> A. Overloading
                  methods
                </label>
                <label>
                  <input type="radio" name="q19" value="B" /> B. Overriding
                  methods
                </label>
                <label>
                  <input type="radio" name="q19" value="C" /> C. Both A and B
                </label>
                <label>
                  <input type="radio" name="q19" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>
            <div className="question">
              <p>20. What is encapsulation in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q20" value="A" /> A. Wrapping code
                  into a single unit
                </label>
                <label>
                  <input type="radio" name="q20" value="B" /> B. Hiding internal
                  object details from the outside world
                </label>
                <label>
                  <input type="radio" name="q20" value="C" /> C. Restricting
                  access to private data
                </label>
                <label>
                  <input type="radio" name="q20" value="D" /> D. All of the
                  above
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(4)}>
            <span>Advanced Topics</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>21. What is the purpose of the "final" keyword in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q21" value="A" /> A. To declare a
                  constant variable
                </label>
                <label>
                  <input type="radio" name="q21" value="B" /> B. To make a class
                  non-inheritable
                </label>
                <label>
                  <input type="radio" name="q21" value="C" /> C. To prevent
                  method overriding
                </label>
                <label>
                  <input type="radio" name="q21" value="D" /> D. All of the
                  above
                </label>
              </div>
            </div>
            <div className="question">
              <p>22. What is the purpose of the "transient" keyword in Java?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q22" value="A" /> A. To indicate
                  that a field should not be serialized
                </label>
                <label>
                  <input type="radio" name="q22" value="B" /> B. To indicate
                  that a field is constant
                </label>
                <label>
                  <input type="radio" name="q22" value="C" /> C. To ensure the
                  field is included in serialization
                </label>
                <label>
                  <input type="radio" name="q22" value="D" /> D. To define a
                  volatile variable
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                23. Which of the following is a valid way to handle exceptions
                in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q23" value="A" /> A. try-catch block
                </label>
                <label>
                  <input type="radio" name="q23" value="B" /> B. throw-catch
                  block
                </label>
                <label>
                  <input type="radio" name="q23" value="C" /> C. catch-finally
                  block
                </label>
                <label>
                  <input type="radio" name="q23" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                24. What is the purpose of the "synchronized" keyword in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q24" value="A" /> A. To make a
                  method thread-safe
                </label>
                <label>
                  <input type="radio" name="q24" value="B" /> B. To prevent
                  method overloading
                </label>
                <label>
                  <input type="radio" name="q24" value="C" /> C. To make a
                  method non-blocking
                </label>
                <label>
                  <input type="radio" name="q24" value="D" /> D. To enable
                  method synchronization
                </label>
              </div>
            </div>
            <div className="question">
              <p>
                25. Which of the following is an example of a checked exception
                in Java?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q25" value="A" /> A.
                  ArithmeticException
                </label>
                <label>
                  <input type="radio" name="q25" value="B" /> B.
                  NullPointerException
                </label>
                <label>
                  <input type="radio" name="q25" value="C" /> C. IOException
                </label>
                <label>
                  <input type="radio" name="q25" value="D" /> D.
                  IndexOutOfBoundsException
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

export default QuizJAVA;
