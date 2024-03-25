
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
// import About from './Component/About';
import Alert from './Component/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const toggle = ()=>{
    // console.log("clicked");
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
      // document.title='MyTextUtils - LightMode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#232050';
      showalert("Dark mode has been enabled","success");
      // document.title='MyTextUtils - DarkMode';
    }
  }
  const [alert,setalert]=useState(null);
    const showalert = (message,type)=>{
        setalert({
          msg: message,
          type :type
        })
        setTimeout(()=>{
          setalert(null);
        },1500);
    }
  return (
    <>
    {/* <Router> */}
    <Navbar title="MyTextUtils" about="About TextUtils" mode={mode} toggle ={toggle}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Textform heading="Enter the text to analyze below" mode={mode} showalert={showalert} />
    {/* <Routes> */}
      {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
      {/* <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showalert={showalert} />} /> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
  </>
  );
  
}

export default App;
