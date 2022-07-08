import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
            <Link className="nav-link active" aria-current="page" to="/About">{props.About}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.modechange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label ml-3" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={title: PropTypes.string.isRequired,
About: PropTypes.string.isRequired
}
Navbar.defaultProps ={
title:"set title here",
About:"set Abour here"
};