import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ setStudentDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    course: "",
  });

  const navigate = useNavigate();

  const navigateto = (route) => {
    navigate(route);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentDetails(formData);
  };

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
    form: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
    },
    input: {
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    textarea: {
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
      resize: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} onClick={() => "/profile"}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
