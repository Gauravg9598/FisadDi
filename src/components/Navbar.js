import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  
  const[myStyleCss, setMyStyleCss] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const[btnText, setBtanValue] = useState("Dark Mode");
  const toggleDarkMode = ()=>{
    if(myStyleCss.color === "black")
    {
      setMyStyleCss({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtanValue('Light Mode');
    }
    else
    {
      setMyStyleCss({
        color : 'black',
        backgroundColor : 'white'
      });
      setBtanValue('Dark Mode')
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={myStyleCss}>
  <div className="container-fluid" style={myStyleCss}>
    {/* <Link className="navbar-brand" to="/" style={myStyleCss}>{props.title}</Link> */}
    <a className="navbar-brand" href="/" style={myStyleCss}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyleCss}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/" style={myStyleCss}>Home</Link> */}
          <a className="nav-link active" aria-current="page" href="/" style={myStyleCss}>Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about" style={myStyleCss}>{props.aboutText}</Link> */}
          <a className="nav-link" href="/about" style={myStyleCss}>{props.aboutText}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div>
      <button type="button" className="btn btn-dark" onClick={toggleDarkMode} >{btnText}</button>
      </div> */}
      <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
</div>
    </div>
  </div>
</nav> 
  )
}

Navbar.prototype ={
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title : 'Set title here',
    aboutText : 'set about us here'
}