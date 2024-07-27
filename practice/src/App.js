import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setDarkMode] = useState("light"); // Whether dark mode Enabled or not
  const [greenMode, setGreenMode] = useState("light");
  const [yellowMode, setYellowMode] = useState("light");
  const [redMode, setRedMode] = useState("light");

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

  const toggleMode1 = () => {
    if (greenMode === "light" || greenMode === "green") {
      setGreenMode("green");
      document.body.style.background = "green";
      showAlert("Green mode has been enable", "success");
      document.title = "TextUtils - Green Mode";
    } else {
      setDarkMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const toggleMode2 = () => {
    if (yellowMode === "light" || yellowMode === "yellow") {
      setYellowMode("yellow");
      document.body.style.background = "yellow";
      showAlert("Yellow mode has been enable", "success");
      document.title = "TextUtils - Yellow Mode";
    } else {
      setDarkMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const toggleMode3 = () => {
    if (redMode === "light" || redMode === "red") {
      setRedMode("red");
      document.body.style.background = "red";
      showAlert("Red mode has been enable", "success");
      document.title = "TextUtils - Red Mode";
    } else {
      setDarkMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        home="Home"
        mode={darkMode}
        toggleMode={toggleMode}
        toggleMode1={toggleMode1}
        toggleMode2={toggleMode2}
        toggleMode3={toggleMode3}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Analyz Below"
          mode={darkMode}
        />
      </div>
    </>
  );
}

export default App;
