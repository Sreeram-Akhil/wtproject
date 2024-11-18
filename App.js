import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Homepage from "./landingpage"; // Adjust the path based on your project structure
import Python from "./pythonroadmap";
import Pynotes from "./notes_py";
import Java from "./javaroadmap";
import Javanotes from "./notes_java";
import Javaquiz from "./quiz_java";
import C from "./croadmap";
import Cnotes from "./notes_c";
import Cquiz from "./quiz_c";
import Dsa from "./dsaroadmap";
import Dsanotes from "./notes_dsa";
import Dsaquiz from "./quiz_dsa";

import React1 from "./reactroadmaps";
import Reactnotes from "./notes_react";
import Reactquiz from "./quiz_react";
import Sql from "./sqlroadmap";
import Sqlnotes from "./notes_sql";
import Sqlquiz from "./quiz_sql";
import Frontend from "./frontendroadmap";
import Form from "./form";
import Pythonquiz from "./quiz_py";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the Homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pythongetinfo" element={<Python />} />
        <Route path="/pythongetinfo/notes" element={<Pynotes />} />
        <Route path="/pythongetinfo/quiz" element={<Pythonquiz />} />
        <Route path="/reactgetinfo" element={<React1 />} />
        <Route path="/reactgetinfo/notes" element={<Reactnotes />} />
        <Route path="/reactgetinfo/quiz" element={<Reactquiz />} />

        <Route path="/dsagetinfo" element={<Dsa />} />
        <Route path="/dsagetinfo/notes" element={<Dsanotes />} />
        <Route path="/dsagetinfo/quiz" element={<Dsaquiz />} />
        <Route path="/cgetinfo" element={<C />} />
        <Route path="/cgetinfo/quiz" element={<Cquiz />} />
        <Route path="/sqlgetinfo" element={<Sql />} />
        <Route path="/sqlgetinfo/note" element={<Sqlnotes />} />
        <Route path="/sqlgetinfo/quiz" element={<Sqlquiz />} />

        <Route path="/javagetinfo" element={<Java />} />
        <Route path="/javagetinfo/notes" element={<Javanotes />} />
        <Route path="/javagetinfo/quiz" element={<Javaquiz />} />
        <Route path="/frontendgetinfo" element={<Frontend />} />
        <Route path="/cgetinfo/cnotes" element={<Cnotes />} />
      </Routes>
    </Router>
  );
}

export default App;
