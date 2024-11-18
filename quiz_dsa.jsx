import React, { useState } from "react";

const QuizDSA = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [showProgressWindow, setShowProgressWindow] = useState(false);

  const correctAnswers = {
    q1: "A",
    q2: "B",
    q3: "A",
    q4: "C",
    q5: "D",
    q6: "A",
    q7: "B",
    q8: "A",
    q9: "C",
    q10: "D",
    q11: "B",
    q12: "B",
    q13: "D",
    q14: "A",
    q15: "A",
    q16: "B",
    q17: "D",
    q18: "D",
    q19: "A",
    q20: "B",
    q21: "D",
    q22: "B",
    q23: "C",
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
        <div className="quiz-title">DSA Quiz</div>
        <div className="nav-buttons">
          <button onClick={() => (window.location.href = "home.html")}>
            Home
          </button>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </header>

      <div className="quiz-container">
        <h1 className="quiz-header">DSA Quiz</h1>

        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(0)}>
            <span>Arrays and Strings</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                1. Which of the following is the time complexity of accessing an
                element by index in an array?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q1" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q1" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q1" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q1" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                2. Which of the following is true about a string in most
                programming languages?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q2" value="A" /> A. Strings are
                  immutable
                </label>
                <label>
                  <input type="radio" name="q2" value="B" /> B. Strings are
                  mutable
                </label>
                <label>
                  <input type="radio" name="q2" value="C" /> C. Strings are both
                  mutable and immutable
                </label>
                <label>
                  <input type="radio" name="q2" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                3. What is the space complexity of storing a string of length n?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q3" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q3" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q3" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q3" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                4. What is the time complexity of searching for an element in an
                unsorted array?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q4" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q4" value="B" /> B. O(log n)
                </label>
                <label>
                  <input type="radio" name="q4" value="C" /> C. O(n)
                </label>
                <label>
                  <input type="radio" name="q4" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                5. Which of the following methods can be used to remove an
                element from the middle of an array?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q5" value="A" /> A. Using{" "}
                  <code>pop()</code>
                </label>
                <label>
                  <input type="radio" name="q5" value="B" /> B. Using{" "}
                  <code>shift()</code>
                </label>
                <label>
                  <input type="radio" name="q5" value="C" /> C. Using{" "}
                  <code>splice()</code>
                </label>
                <label>
                  <input type="radio" name="q5" value="D" /> D. Using{" "}
                  <code>push()</code>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(1)}>
            <span>Linked Lists</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                6. What is the time complexity of accessing an element in a
                singly linked list?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q6" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q6" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q6" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q6" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                7. Which of the following is true about a doubly linked list?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q7" value="A" /> A. It only has
                  pointers to the next node
                </label>
                <label>
                  <input type="radio" name="q7" value="B" /> B. It has pointers
                  to both next and previous nodes
                </label>
                <label>
                  <input type="radio" name="q7" value="C" /> C. It uses more
                  memory than a singly linked list
                </label>
                <label>
                  <input type="radio" name="q7" value="D" /> D. Both B and C
                </label>
              </div>
            </div>

            <div className="question">
              <p>8. How do you reverse a singly linked list?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q8" value="A" /> A. Traverse through
                  the list and reverse the pointers
                </label>
                <label>
                  <input type="radio" name="q8" value="B" /> B. Reverse the list
                  using recursion
                </label>
                <label>
                  <input type="radio" name="q8" value="C" /> C. Both A and B
                </label>
                <label>
                  <input type="radio" name="q8" value="D" /> D. It is not
                  possible to reverse a singly linked list
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                9. What is the space complexity of inserting an element at the
                beginning of a singly linked list?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q9" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q9" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q9" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q9" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                10. How do you find the middle element of a singly linked list?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q10" value="A" /> A. By using two
                  pointers, one moving twice as fast as the other
                </label>
                <label>
                  <input type="radio" name="q10" value="B" /> B. By traversing
                  the list and counting the elements
                </label>
                <label>
                  <input type="radio" name="q10" value="C" /> C. By dividing the
                  list into two halves
                </label>
                <label>
                  <input type="radio" name="q10" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(2)}>
            <span>Stacks and Queues</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                11. What is the time complexity of pushing an element onto a
                stack?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q11" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q11" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q11" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q11" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                12. What is the time complexity of popping an element from a
                stack?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q12" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q12" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q12" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q12" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>13. In which case is a queue used instead of a stack?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q13" value="A" /> A. When we need to
                  reverse the order of processing
                </label>
                <label>
                  <input type="radio" name="q13" value="B" /> B. When elements
                  need to be processed in the order they arrive
                </label>
                <label>
                  <input type="radio" name="q13" value="C" /> C. When elements
                  need to be added at the front
                </label>
                <label>
                  <input type="radio" name="q13" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                14. What is the space complexity of a queue implemented using an
                array?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q14" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q14" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q14" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q14" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                15. What is the output of the following code if{" "}
                <code>queue.enqueue(1)</code>, <code>queue.dequeue()</code>?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q15" value="A" /> A. 1
                </label>
                <label>
                  <input type="radio" name="q15" value="B" /> B. Error
                </label>
                <label>
                  <input type="radio" name="q15" value="C" /> C. 0
                </label>
                <label>
                  <input type="radio" name="q15" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(3)}>
            <span>Trees</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>16. What is the height of a binary tree?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q16" value="A" /> A. The number of
                  nodes in the longest path from root to leaf
                </label>
                <label>
                  <input type="radio" name="q16" value="B" /> B. The number of
                  edges in the longest path from root to leaf
                </label>
                <label>
                  <input type="radio" name="q16" value="C" /> C. The number of
                  leaves in the tree
                </label>
                <label>
                  <input type="radio" name="q16" value="D" /> D. The depth of
                  the root node
                </label>
              </div>
            </div>

            <div className="question">
              <p>17. What is a balanced binary tree?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q17" value="A" /> A. A tree where
                  each node has exactly two children
                </label>
                <label>
                  <input type="radio" name="q17" value="B" /> B. A tree where
                  the difference in heights between the left and right subtrees
                  of every node is at most 1
                </label>
                <label>
                  <input type="radio" name="q17" value="C" /> C. A tree with
                  equal numbers of leaves on both sides
                </label>
                <label>
                  <input type="radio" name="q17" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>18. How do you find the height of a binary tree?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q18" value="A" /> A. By recursively
                  finding the maximum height of the left and right subtrees and
                  adding 1
                </label>
                <label>
                  <input type="radio" name="q18" value="B" /> B. By counting the
                  number of nodes in the tree
                </label>
                <label>
                  <input type="radio" name="q18" value="C" /> C. By counting the
                  number of edges in the longest path
                </label>
                <label>
                  <input type="radio" name="q18" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                19. Which traversal technique is used to visit the left node,
                root node, and then the right node in a binary tree?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q19" value="A" /> A. Preorder
                  traversal
                </label>
                <label>
                  <input type="radio" name="q19" value="B" /> B. Inorder
                  traversal
                </label>
                <label>
                  <input type="radio" name="q19" value="C" /> C. Postorder
                  traversal
                </label>
                <label>
                  <input type="radio" name="q19" value="D" /> D. Level order
                  traversal
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                20. What is the time complexity of searching for an element in a
                balanced binary search tree?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q20" value="A" /> A. O(1)
                </label>
                <label>
                  <input type="radio" name="q20" value="B" /> B. O(n)
                </label>
                <label>
                  <input type="radio" name="q20" value="C" /> C. O(log n)
                </label>
                <label>
                  <input type="radio" name="q20" value="D" /> D. O(n^2)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="subtopic">
          <div className="subtopic-header" onClick={() => toggleSubtopic(4)}>
            <span>Graphs</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="subtopic-questions" style={{ display: "none" }}>
            <div className="question">
              <p>
                21. What is the time complexity of traversing a graph using
                Depth-First Search (DFS)?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q21" value="A" /> A. O(V)
                </label>
                <label>
                  <input type="radio" name="q21" value="B" /> B. O(E)
                </label>
                <label>
                  <input type="radio" name="q21" value="C" /> C. O(V + E)
                </label>
                <label>
                  <input type="radio" name="q21" value="D" /> D. O(log n)
                </label>
              </div>
            </div>

            <div className="question">
              <p>22. What is a directed graph?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q22" value="A" /> A. A graph where
                  edges have no direction
                </label>
                <label>
                  <input type="radio" name="q22" value="B" /> B. A graph where
                  edges have direction
                </label>
                <label>
                  <input type="radio" name="q22" value="C" /> C. A graph with
                  self-loops only
                </label>
                <label>
                  <input type="radio" name="q22" value="D" /> D. None of the
                  above
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                23. What is the time complexity of searching for a node in an
                undirected graph?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q23" value="A" /> A. O(V)
                </label>
                <label>
                  <input type="radio" name="q23" value="B" /> B. O(E)
                </label>
                <label>
                  <input type="radio" name="q23" value="C" /> C. O(V + E)
                </label>
                <label>
                  <input type="radio" name="q23" value="D" /> D. O(log n)
                </label>
              </div>
            </div>

            <div className="question">
              <p>24. What is a tree?</p>
              <div className="options">
                <label>
                  <input type="radio" name="q24" value="A" /> A. A graph without
                  cycles
                </label>
                <label>
                  <input type="radio" name="q24" value="B" /> B. A graph with
                  cycles
                </label>
                <label>
                  <input type="radio" name="q24" value="C" /> C. A graph with
                  weighted edges
                </label>
                <label>
                  <input type="radio" name="q24" value="D" /> D. A complete
                  graph
                </label>
              </div>
            </div>

            <div className="question">
              <p>
                25. What is the time complexity of finding the shortest path in
                a weighted graph using Dijkstra’s algorithm?
              </p>
              <div className="options">
                <label>
                  <input type="radio" name="q25" value="A" /> A. O(V^2)
                </label>
                <label>
                  <input type="radio" name="q25" value="B" /> B. O(V + E log V)
                </label>
                <label>
                  <input type="radio" name="q25" value="C" /> C. O(E)
                </label>
                <label>
                  <input type="radio" name="q25" value="D" /> D. O(n^2)
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

export default QuizDSA;
