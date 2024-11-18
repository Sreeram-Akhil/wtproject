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

const NotesDSA = () => {
  const goBack = () => {
    alert("Go Back function called");
  };

  const home = () => {
    alert("Home function called");
  };

  const navigate = useNavigate();
  const navigateto = (route) => {
    navigate(route);
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
          <h3>Data Structures and Algorithm</h3>
        </div>
        <div className="nav-buttons">
          <button
            className="nav-button"
            onClick={() => navigateto("/dsagetinfo")}
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
          <h2>Introduction to Data Structures and Algorithms</h2>
          <p>
            Data Structures and Algorithms (DSA) are the foundational building
            blocks for computer programming and problem-solving. Understanding
            DSA is critical for optimizing code performance, reducing
            complexity, and solving complex real-world problems efficiently.
          </p>
          <p>
            <b>Key Components:</b>
          </p>
          <ul>
            <li>
              <b>Data Structures:</b> Organize and store data efficiently for
              better access and modification (e.g., arrays, linked lists, trees,
              graphs).
            </li>
            <li>
              <b>Algorithms:</b> A step-by-step procedure or formula for solving
              problems, such as sorting and searching algorithms.
            </li>
          </ul>
        </section>

        <section className="note-section" id="arrays">
          <h2>Arrays</h2>
          <p>
            An array is a collection of elements, identified by index or key,
            all of which are of the same type. Arrays are one of the simplest
            and most commonly used data structures for storing multiple values
            of the same type in Java.
          </p>
          <p>
            <b>Array Syntax:</b>
          </p>
          <pre>
            {`int[] arr = new int[5]; // Declares an array of integers with 5 elements
arr[0] = 10; // Assigns 10 to the first element of the array`}
          </pre>
          <h3>Basic Operations on Arrays:</h3>
          <ul>
            <li>
              <b>Accessing an element:</b> Use the index to access elements,
              starting from 0.
            </li>
            <li>
              <b>Traversing:</b> Iterate over the array using loops (e.g.,
              `for`, `foreach`).
            </li>
            <li>
              <b>Updating:</b> Modify elements directly by accessing the index.
            </li>
            <li>
              <b>Searching:</b> Searching for an element in the array can be
              done via a linear search or binary search (if sorted).
            </li>
          </ul>
          <div className="code-snippet">
            <h3>
              <i>Example of Array:</i>
            </h3>
            <pre>{`int arr[] = {10, 20, 30, 40, 50};`}</pre>
          </div>
        </section>

        <section className="note-section" id="linked-list">
          <h2>Linked List</h2>
          <p>
            A linked list is a linear data structure where elements, called
            nodes, are connected using pointers. Each node contains data and a
            reference (or link) to the next node in the sequence.
          </p>
          <h3>Types of Linked Lists:</h3>
          <ul>
            <li>
              <b>Single Linked List:</b> Each node points to the next node, with
              the last node pointing to null.
            </li>
            <li>
              <b>Doubly Linked List:</b> Each node points to both the next and
              previous nodes.
            </li>
            <li>
              <b>Circular Linked List:</b> The last node points back to the
              first node.
            </li>
          </ul>
          <p>
            <b>Basic Operations:</b>
          </p>
          <ul>
            <li>
              <b>Insertion:</b> Add a node at the beginning, end, or a specific
              position.
            </li>
            <li>
              <b>Deletion:</b> Remove a node from the list.
            </li>
            <li>
              <b>Traversal:</b> Iterate through the list to access elements.
            </li>
            <li>
              <b>Search:</b> Find a node with a specific value.
            </li>
          </ul>
          <div className="code-snippet">
            <h3>
              <i>Example of a Single Linked List:</i>
            </h3>
            <pre>
              {`class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedListExample {
    Node head;

    public void addNode(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedListExample list = new LinkedListExample();
        list.addNode(10);
        list.addNode(20);
        list.addNode(30);
        list.printList();
    }
}`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="stacks-and-queues">
          <h2>Stacks and Queues</h2>
          <p>
            Stacks and Queues are linear data structures used for storing data
            in a specific order.
          </p>

          <h3>Stack</h3>
          <p>
            A stack follows the Last In, First Out (LIFO) principle, meaning the
            last element added to the stack is the first one to be removed.
            Common operations include <code>push</code> (add an element),{" "}
            <code>pop</code> (remove an element), and <code>peek</code> (view
            the top element).
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Stack:</i>
            </h3>
            <pre>
              {`import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack.peek());  // Output: 30
        stack.pop();
        System.out.println(stack.peek());  // Output: 20
    }
}`}
            </pre>
          </div>

          <h3>Queue</h3>
          <p>
            A queue follows the First In, First Out (FIFO) principle. The first
            element added to the queue will be the first one to be removed.
            Common operations include <code>enqueue</code> (add an element),{" "}
            <code>dequeue</code> (remove an element), and <code>peek</code>{" "}
            (view the front element).
          </p>
          <div className="code-snippet">
            <h3>
              <i>Example of a Queue:</i>
            </h3>
            <pre>
              {`import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(10);
        queue.add(20);
        queue.add(30);
        System.out.println(queue.peek());  // Output: 10
        queue.remove();
        System.out.println(queue.peek());  // Output: 20
    }
}`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="trees">
          <h2>Trees in Java</h2>
          <p>
            A tree is a hierarchical data structure consisting of nodes
            connected by edges. The topmost node is called the root, and each
            node can have child nodes.
          </p>
          <h3>Types of Trees:</h3>
          <ul>
            <li>
              <b>Binary Tree:</b> A tree where each node has at most two
              children, referred to as left and right.
            </li>
            <li>
              <b>Binary Search Tree (BST):</b> A binary tree where the left
              child node has a smaller value, and the right child node has a
              greater value.
            </li>
            <li>
              <b>AVL Tree:</b> A self-balancing binary search tree.
            </li>
          </ul>
          <h3>Basic Operations:</h3>
          <ul>
            <li>
              <b>Insertion:</b> Add a node to the tree at the correct position.
            </li>
            <li>
              <b>Traversal:</b> Visit all nodes (pre-order, in-order, post-order
              traversal).
            </li>
            <li>
              <b>Searching:</b> Find a node with a specific value.
            </li>
            <li>
              <b>Deletion:</b> Remove a node from the tree.
            </li>
          </ul>
          <div className="code-snippet">
            <h3>
              <i>Example of a Binary Tree:</i>
            </h3>
            <pre>
              {`class Node {
    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        left = right = null;
    }
}

public class BinaryTreeExample {
    Node root;

    public BinaryTreeExample() {
        root = null;
    }

    public void insert(int data) {
        root = insertRec(root, data);
    }

    private Node insertRec(Node root, int data) {
        if (root == null) {
            root = new Node(data);
            return root;
        }
        if (data < root.data) {
            root.left = insertRec(root.left, data);
        } else if (data > root.data) {
            root.right = insertRec(root.right, data);
        }
        return root;
    }

    public void inorder() {
        inorderRec(root);
    }

    private void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.data + " ");
            inorderRec(root.right);
        }
    }

    public static void main(String[] args) {
        BinaryTreeExample tree = new BinaryTreeExample();
        tree.insert(50);
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(70);
        tree.insert(60);
        tree.insert(80);

        tree.inorder(); // Output: 20 30 40 50 60 70 80
    }
}`}
            </pre>
          </div>
        </section>

        <section className="note-section" id="algorithms">
          <h2>Sorting and Searching Algorithms</h2>
          <p>
            Algorithms are step-by-step instructions used to solve problems.
            Here, we will cover a few essential sorting and searching
            algorithms.
          </p>

          <h3>Sorting Algorithms:</h3>
          <ul>
            <li>
              <b>Bubble Sort:</b> A simple comparison-based sorting algorithm
              where adjacent elements are compared and swapped if necessary.
            </li>
            <li>
              <b>Selection Sort:</b> It selects the minimum element from the
              unsorted part and places it at the beginning.
            </li>
            <li>
              <b>Quick Sort:</b> A divide-and-conquer algorithm that picks an
              element as a pivot and partitions the array into two sub-arrays.
            </li>
          </ul>

          <div className="code-snippet">
            <h3>
              <i>Example of Quick Sort:</i>
            </h3>
            <pre>
              {`public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 80, 30, 90, 40, 50, 70};
        int n = arr.length;
        quickSort(arr, 0, n - 1);
        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}`}
            </pre>
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

export default NotesDSA;
