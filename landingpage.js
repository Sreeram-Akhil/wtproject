import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Toggle Profile Menu
  const toggleProfileMenu = () => {
    setProfileMenuOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  // Correct navigateto function to navigate using the navigate hook
  const navigateto = (route) => {
    navigate(route); // Use navigate to perform navigation
  };

  return (
    <div>
      {/* Inline CSS */}
      <style>
        {`
        /* Basic reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        /* Navbar */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          background-color: #f1f1f1;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar .logo {
          font-size: 24px;
        }

        .navbar nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #333;
          transition: width 0.3s ease;
        }

        .navbar nav a:hover {
          border-bottom: 2px solid #6a0dad;
        }

        .login-btn {
          background-color: #6a0dad;
          color: #fff;
          padding: 8px 16px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s, box-shadow 0.3s;
        }

        .login-btn:hover {
          background-color: #5b0cac;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }

        .profile-icon {
          cursor: pointer;
          margin: 0.2% 1.5% 0.2% 0%;
        }

        .profile-menu {
          display: none;
          position: absolute;
          right: 20px;
          top: 60px;
          background: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          padding: 10px;
          width: 150px;
          border-radius: 5px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .profile-menu.show {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }

        .profile-menu p {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .profile-menu a {
          display: block;
          padding: 8px 4px;
          text-decoration: none;
          color: #333;
          font-size: 14px;
          border-bottom: 1px solid #e0e0e0;
        }

        .profile-menu a:hover {
          background-color: #f0f0f0;
          color: #6a0dad;
        }

        .profile-menu a:last-child {
          border-bottom: none;
        }

        .profile-menu a:last-child:hover {
          color: red;
        }

        /* Main Content */
        main {
          padding: 40px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 35px;
          padding: 20px;
        }

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 30px;
          background-color: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .card p {
          padding: 6px;
        }

        .card img {
          height: 100px;
          width: auto;
          margin-bottom: 10px;
        }

        .info-btn {
          background-color: #6a0dad;
          color: #fff;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        /* Footer */
        footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px 40px;
          background-color: #f1f1f1;
          margin-top: 20px;
        }

        .footer-logo {
          font-size: 24px;
        }

        .footer-links {
          margin: 10px 0;
        }

        .footer-links a {
          text-decoration: none;
          color: #333;
        }

        .footer-links a:hover {
          color: #5b0cac;
        }
        `}
      </style>

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">Logo</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Quiz</a>
        </nav>
        <button className="login-btn" onClick={() => navigateto("/login")}>
          Login
        </button>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <img src="./assets/profile-icon.png" width="20px" alt="profile" />
        </div>
      </header>

      {/* Profile Dropdown */}
      <div className={`profile-menu ${profileMenuOpen ? "show" : ""}`}>
        <p>
          Name
          <br />
          Email_id
        </p>
        <button onClick={() => navigateto("/form")}>My-Profile</button>
        <a href="#">Logout</a>
      </div>

      {/* Main Content */}
      <main>
        <section className="card-grid">
          <div className="card">
            <img src="assets/python-icon.png" alt="Python" />
            <p>Python</p>
            <button
              className="info-btn"
              onClick={() => navigateto("/pythongetinfo")}
            >
              Get info
            </button>
          </div>
          <div className="card">
            <img src="assets/mysql-icon.png" alt="sql" />
            <p>My-SQL</p>
            <button
              className="info-btn"
              onClick={() => navigateto("/sqlgetinfo")}
            >
              Get info
            </button>
          </div>
          <div className="card">
            <img src="assets/react-icon.png" alt="Artificial Intelligence" />
            <p>React</p>
            <button
              className="info-btn"
              onClick={() => navigateto("/reactgetinfo")}
            >
              Get info
            </button>
          </div>

          <div className="card">
            <img src="./assets/dsa.jpg" alt="DSA" />
            <p>Data structure & Algorithms</p>
            <button
              className="info-btn"
              onClick={() => navigateto("/dsagetinfo")}
            >
              Get info
            </button>
          </div>

          <div className="card">
            <img src="./assets/c.jpg" alt="c language" />
            <p>c language</p>
            <button
              className="info-btn"
              onClick={() => navigateto("/cgetinfo")}
            >
              Get info
            </button>
          </div>

          <div className="card">
            <img src="./assets/java.jpg" alt="java" />
            <p>java</p>
            <button
              className="info-btn"
              onClick={() => navigateto("/javagetinfo")}
            >
              Get info
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-logo">Logo</div>
        <div className="footer-links">
          <a href="#">Home</a> | <a href="#">Roadmaps</a> |{" "}
          <a href="#">Track Progress</a>
        </div>
        <p>© copyright | www.seekbeyond.com</p>
      </footer>
    </div>
  );
}

export default Homepage;
