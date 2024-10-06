import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand animated-logo text-light" href="/">Contact Manager</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link nav-animate text-light" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-animate text-light" href="/contacts">Contacts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-animate text-light" href="/add-contact">Add Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
