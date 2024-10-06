import React, { Component } from 'react'
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">Contact Manager</h5>
            <p>Your trusted contact management solution</p>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/contacts">Contacts</a></li>
              <li><a href="/add-contact">Add Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Follow Us</h5>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/profile.php?id=100092271067882" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/TusharJain05" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/tushar-jain-ba89b41b1/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="small-text">&copy; 2024 Contact Manager. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    )
  }
}
