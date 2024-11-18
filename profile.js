import React from "react";

const StudentProfile = ({ studentDetails }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px",
    },
    heading: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "320px",
      textAlign: "left",
    },
    detail: {
      fontSize: "16px",
      color: "#555",
      margin: "8px 0",
    },
    label: {
      fontWeight: "bold",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Profile</h2>
      <div style={styles.card}>
        <p style={styles.detail}>
          <span style={styles.label}>Name:</span> {studentDetails.name}
        </p>
        <p style={styles.detail}>
          <span style={styles.label}>Age:</span> {studentDetails.age}
        </p>
        <p style={styles.detail}>
          <span style={styles.label}>Email:</span> {studentDetails.email}
        </p>
        <p style={styles.detail}>
          <span style={styles.label}>Phone:</span> {studentDetails.phone}
        </p>
        <p style={styles.detail}>
          <span style={styles.label}>Address:</span> {studentDetails.address}
        </p>
        <p style={styles.detail}>
          <span style={styles.label}>Course:</span> {studentDetails.course}
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;
