import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#434b53';
      showAlert("Dark mode has been enabled", "success");
      
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, Character counter, remove extra spaces" mode={mode} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode}/> }>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
