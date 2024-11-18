import React, { useState } from "react";

const QuizREACT = () => {
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
        <div className="quiz-title">React.js Quiz</div>
        <div className="nav-buttons">
          <button onClick={() => (window.location.href = "home.html")}>
            Home
          </button>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </header>

      <div className="quiz-container">
        <h1 className="quiz-header">React.js Quiz</h1>

        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(0)}>
            <span>React Basics</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>1. What is the primary function of React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q1" value="A" /> A. To manage the
                  server-side logic
                </label>
                <label>
                  <input type="radio" name="q1" value="B" /> B. To handle
                  routing in applications
                </label>
                <label>
                  <input type="radio" name="q1" value="C" /> C. To build user
                  interfaces
                </label>
                <label>
                  <input type="radio" name="q1" value="D" /> D. To make HTTP
                  requests
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                2. Which of the following is used to create a React component?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q2" value="A" /> A. function
                  Component() {}
                </label>
                <label>
                  <input type="radio" name="q2" value="B" /> B. class Component{" "}
                  {}
                </label>
                <label>
                  <input type="radio" name="q2" value="C" /> C. Both A and B
                </label>
                <label>
                  <input type="radio" name="q2" value="D" /> D. component = {}
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                3. In React, what is the purpose of the <code>useState</code>{" "}
                hook?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q3" value="A" /> A. To handle side
                  effects in components
                </label>
                <label>
                  <input type="radio" name="q3" value="B" /> B. To manage
                  component state
                </label>
                <label>
                  <input type="radio" name="q3" value="C" /> C. To render
                  components
                </label>
                <label>
                  <input type="radio" name="q3" value="D" /> D. To handle events
                  in components
                </label>
              </div>
            </div>

            <div className="question">
              <p>4. What is JSX in React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q4" value="A" /> A. A syntax
                  extension for JavaScript
                </label>
                <label>
                  <input type="radio" name="q4" value="B" /> B. A type of CSS
                  used in React
                </label>
                <label>
                  <input type="radio" name="q4" value="C" /> C. A JavaScript
                  function for creating components
                </label>
                <label>
                  <input type="radio" name="q4" value="D" /> D. A browser API
                  used by React
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                5. Which of the following is used to pass data between React
                components?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q5" value="A" /> A. State
                </label>
                <label>
                  <input type="radio" name="q5" value="B" /> B. Props
                </label>
                <label>
                  <input type="radio" name="q5" value="C" /> C. Context
                </label>
                <label>
                  <input type="radio" name="q5" value="D" /> D. All of the above
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(1)}>
            <span>Handling Events and Forms</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>6. How do you handle events in React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q6" value="A" /> A. By using the{" "}
                  <code>onEvent</code> attribute in JSX
                </label>
                <label>
                  <input type="radio" name="q6" value="B" /> B. By passing a
                  function to the event handler
                </label>
                <label>
                  <input type="radio" name="q6" value="C" /> C. By calling the
                  event function directly
                </label>
                <label>
                  <input type="radio" name="q6" value="D" /> D. Both A and B
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                7. How do you prevent the default action of a form submit in
                React?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q7" value="A" /> A. By calling{" "}
                  <code>event.preventDefault()</code>
                </label>
                <label>
                  <input type="radio" name="q7" value="B" /> B. By setting{" "}
                  <code>defaultAction</code> to false
                </label>
                <label>
                  <input type="radio" name="q7" value="C" /> C. By returning{" "}
                  <code>false</code> in the event handler
                </label>
                <label>
                  <input type="radio" name="q7" value="D" /> D. All of the above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                8. What is the correct way to handle a click event in a React
                component?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q8" value="A" /> A.{" "}
                  <code>{`<button onclick={this.handleClick}>Click</button>`}</code>
                </label>
                <label>
                  <input type="radio" name="q8" value="B" /> B.{" "}
                  <code>{`<button onClick={this.handleClick}>Click</button>`}</code>
                </label>
                <label>
                  <input type="radio" name="q8" value="C" /> C.{" "}
                  <code>{`<button event={this.handleClick}>Click</button>`}</code>
                </label>
                <label>
                  <input type="radio" name="q8" value="D" /> D.{" "}
                  <code>{`<button onClick={handleClick}>Click</button>`}</code>
                </label>
              </div>
            </div>

            <div className="question">
              <p>9. How do you handle form input in React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q9" value="A" /> A. By using the{" "}
                  <code>value</code> and <code>onChange</code> attributes
                </label>
                <label>
                  <input type="radio" name="q9" value="B" /> B. By using the{" "}
                  <code>defaultValue</code> attribute only
                </label>
                <label>
                  <input type="radio" name="q9" value="C" /> C. By using a
                  global state to store form data
                </label>
                <label>
                  <input type="radio" name="q9" value="D" /> D. By using the{" "}
                  <code>checked</code> and <code>onChange</code> attributes
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                10. What is the purpose of the <code>handleSubmit</code> method
                in a React form?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q10" value="A" /> A. To clear the
                  form after submission
                </label>
                <label>
                  <input type="radio" name="q10" value="B" /> B. To prevent the
                  default form submission and handle custom submission logic
                </label>
                <label>
                  <input type="radio" name="q10" value="C" /> C. To bind the
                  form data to state
                </label>
                <label>
                  <input type="radio" name="q10" value="D" /> D. To update the
                  UI with the submitted data
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(2)}>
            <span>React Hooks</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                11. What is the purpose of the <code>useState</code> hook in
                React?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q11" value="A" /> A. To add state to
                  functional components
                </label>
                <label>
                  <input type="radio" name="q11" value="B" /> B. To handle
                  component lifecycle methods
                </label>
                <label>
                  <input type="radio" name="q11" value="C" /> C. To perform side
                  effects
                </label>
                <label>
                  <input type="radio" name="q11" value="D" /> D. To manage
                  context in components
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                12. How does the <code>useEffect</code> hook work?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q12" value="A" /> A. It is used to
                  run code after a component renders
                </label>
                <label>
                  <input type="radio" name="q12" value="B" /> B. It is used to
                  handle events in functional components
                </label>
                <label>
                  <input type="radio" name="q12" value="C" /> C. It is used to
                  update the state of a component
                </label>
                <label>
                  <input type="radio" name="q12" value="D" /> D. It is used to
                  manage context in React
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                13. Which of the following is true about the{" "}
                <code>useEffect</code> hook?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q13" value="A" /> A. It can return a
                  function to clean up effects
                </label>
                <label>
                  <input type="radio" name="q13" value="B" /> B. It runs after
                  every render by default
                </label>
                <label>
                  <input type="radio" name="q13" value="C" /> C. It can be used
                  to update state in a component
                </label>
                <label>
                  <input type="radio" name="q13" value="D" /> D. All of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                14. When should you use the <code>useMemo</code> hook?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q14" value="A" /> A. To memoize
                  expensive function results
                </label>
                <label>
                  <input type="radio" name="q14" value="B" /> B. To store the
                  previous state of a component
                </label>
                <label>
                  <input type="radio" name="q14" value="C" /> C. To manage
                  component lifecycle
                </label>
                <label>
                  <input type="radio" name="q14" value="D" /> D. To handle side
                  effects
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                15. What is the purpose of the <code>useContext</code> hook in
                React?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q15" value="A" /> A. To manage local
                  state
                </label>
                <label>
                  <input type="radio" name="q15" value="B" /> B. To access
                  global state across components
                </label>
                <label>
                  <input type="radio" name="q15" value="C" /> C. To trigger
                  re-renders of functional components
                </label>
                <label>
                  <input type="radio" name="q15" value="D" /> D. To bind event
                  handlers to components
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(3)}>
            <span>React Router</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                16. Which component is used to define a route in React Router?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q16" value="A" /> A. Route
                </label>
                <label>
                  <input type="radio" name="q16" value="B" /> B. Link
                </label>
                <label>
                  <input type="radio" name="q16" value="C" /> C. Redirect
                </label>
                <label>
                  <input type="radio" name="q16" value="D" /> D. Switch
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                17. What does the <code>Switch</code> component in React Router
                do?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q17" value="A" /> A. It renders the
                  first matching route.
                </label>
                <label>
                  <input type="radio" name="q17" value="B" /> B. It renders all
                  matching routes.
                </label>
                <label>
                  <input type="radio" name="q17" value="C" /> C. It adds query
                  parameters to the route.
                </label>
                <label>
                  <input type="radio" name="q17" value="D" /> D. It handles
                  dynamic routing.
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                18. How do you redirect to a different route programmatically in
                React Router?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q18" value="A" /> A. By using{" "}
                  <code>Redirect</code>
                </label>
                <label>
                  <input type="radio" name="q18" value="B" /> B. By using{" "}
                  <code>useNavigate()</code>
                </label>
                <label>
                  <input type="radio" name="q18" value="C" /> C. By using{" "}
                  <code>history.push()</code>
                </label>
                <label>
                  <input type="radio" name="q18" value="D" /> D. All of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                19. What is the purpose of the <code>Link</code> component in
                React Router?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q19" value="A" /> A. To navigate
                  between different routes without reloading the page
                </label>
                <label>
                  <input type="radio" name="q19" value="B" /> B. To redirect to
                  a new route
                </label>
                <label>
                  <input type="radio" name="q19" value="C" /> C. To define a new
                  route in the application
                </label>
                <label>
                  <input type="radio" name="q19" value="D" /> D. To handle query
                  parameters in the URL
                </label>
              </div>
            </div>

            <div className="question">
              <p>20. How do you handle nested routes in React Router?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q20" value="A" /> A. By defining
                  routes inside a parent route's <code>children</code> prop
                </label>
                <label>
                  <input type="radio" name="q20" value="B" /> B. By using{" "}
                  <code>Route</code> components with a <code>path</code> inside
                  another <code>Route</code>
                </label>
                <label>
                  <input type="radio" name="q20" value="C" /> C. By using{" "}
                  <code>Switch</code> component inside other routes
                </label>
                <label>
                  <input type="radio" name="q20" value="D" /> D. By using query
                  parameters to define nested routes
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(4)}>
            <span>State Management and Context API</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>21. What is the purpose of the Context API in React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q21" value="A" /> A. To manage state
                  globally in a React application
                </label>
                <label>
                  <input type="radio" name="q21" value="B" /> B. To pass props
                  between nested components
                </label>
                <label>
                  <input type="radio" name="q21" value="C" /> C. To manage
                  component lifecycle
                </label>
                <label>
                  <input type="radio" name="q21" value="D" /> D. To handle
                  routing within the app
                </label>
              </div>
            </div>

            <div className="question">
              <p>22. How do you create a context in React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q22" value="A" /> A. By using
                  createContext()
                </label>
                <label>
                  <input type="radio" name="q22" value="B" /> B. By using
                  useContext()
                </label>
                <label>
                  <input type="radio" name="q22" value="C" /> C. By using
                  useState()
                </label>
                <label>
                  <input type="radio" name="q22" value="D" /> D. By using
                  createStore()
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                23. How do you provide context values to components in React?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q23" value="A" /> A. By wrapping
                  components with a Context.Provider
                </label>
                <label>
                  <input type="radio" name="q23" value="B" /> B. By passing
                  values through props
                </label>
                <label>
                  <input type="radio" name="q23" value="C" /> C. By using
                  useState() inside components
                </label>
                <label>
                  <input type="radio" name="q23" value="D" /> D. By using
                  Context.Consumer
                </label>
              </div>
            </div>

            <div className="question">
              <p>24. How do you consume context values in React?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q24" value="A" /> A. By using
                  useContext()
                </label>
                <label>
                  <input type="radio" name="q24" value="B" /> B. By using
                  Context.Consumer
                </label>
                <label>
                  <input type="radio" name="q24" value="C" /> C. Both A and B
                </label>
                <label>
                  <input type="radio" name="q24" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>25. What is the purpose of Redux in state management?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q25" value="A" /> A. To manage
                  global state with a central store
                </label>
                <label>
                  <input type="radio" name="q25" value="B" /> B. To manage state
                  inside individual components
                </label>
                <label>
                  <input type="radio" name="q25" value="C" /> C. To provide
                  local state management within React
                </label>
                <label>
                  <input type="radio" name="q25" value="D" /> D. To enable
                  routing between components
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

export default QuizREACT;
