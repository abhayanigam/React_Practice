import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light"); // Whether dark mode Enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.background = "#33373b";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setDarkMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          home="Home"
          mode={darkMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/*
            With the use exact it matches completly otherwise it matches
            partially 
              /users --> Component 1
              /users/home --> Component 2 
            */}
            <Route exact path="/about" element={<About mode={darkMode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text To Analyze Below"
                  mode={darkMode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
