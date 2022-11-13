import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] =useState('light'); //dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  let showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has beeen enbled", "success");
      document.title = "FisadDi - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "FisadDi - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="FisadDi" aboutText="About Us" mode={mode} toggleMode ={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
        </Routes>
      
      {/* <About/> */}
      </div>
      
      <Navbar />
    </Router>
    </>
  );
}

export default App;
