import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const navigateto = (route) => {
    navigate(route);
  };

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f2f5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100%",
    },
    container: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#fff",
      padding: "0px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "2px solid #e0e0e0",
      backgroundColor: "#6a0dad",
      color: "#fff",
    },
    logo: {
      fontWeight: "bold",
      fontSize: "24px",
      paddingLeft: "20px",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      background: "none",
      border: "none",
      padding: 0,
    },
    roadmap: {
      textAlign: "center",
      flexGrow: 1,
      padding: "40px 0",
      backgroundColor: "#fff",
    },
    roadmapTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    roadmapDiagram: {
      border: "2px solid #333",
      borderRadius: "10px",
      padding: "30px",
      display: "inline-block",
      textAlign: "center",
      maxWidth: "400px",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      paddingBottom: "50px",
      backgroundColor: "#fff",
    },
    button: {
      color: "#fff",
      backgroundColor: "#6a0dad",
      height: "50px",
      width: "100px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.logo}>Logo</div>
          <div style={styles.navLinks}>
            <button style={styles.navLink} onClick={() => navigateto("/")}>
              Home
            </button>
            <button style={styles.navLink} onClick={() => navigateto("/about")}>
              About
            </button>
          </div>
        </div>

        {/* Roadmap Section */}
        <div style={styles.roadmap}>
          <div style={styles.roadmapTitle}>Road maps</div>
          <div style={styles.roadmapDiagram}>
            <img
              src="/assets/croadmap.png"
              alt="c Roadmap"
              style={styles.image}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div style={styles.buttons}>
          <button
            style={styles.button}
            onClick={() => navigateto("/cgetinfo/quiz")}
          >
            Quizzes
          </button>
          <button
            style={styles.button}
            onClick={() => navigateto("/cgetinfo/cnotes")}
          >
            Notes
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
