import React, {Component} from 'react';

//this can be a functional component bc it's just for UI display
export default function Nav(){
  return(
    <nav className="navbar navbar-expand-lg blue-nav">
      <a className="navbar-brand brand-name" href="#">MovieSmith</a>

        <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">About</a>
        <a className="nav-item nav-link" href="#">Review Rewards Program</a>
        <a className="nav-item nav-link" href="#">Contact</a>
        </div>
    </nav>
    );}