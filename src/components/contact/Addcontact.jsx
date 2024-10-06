import React, { Component } from 'react'
import './addcontact.css'; 
import axios from 'axios';
import Swal from 'sweetalert2';

export default class Addcontact extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      country:'',
    };

    // Bind the methods to `this`
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3005/contacts", this.state)
      .then((res) => {
        // Show success SweetAlert on successful submission
        Swal.fire({
          icon: 'success',
          title: 'Contact Added Successfully!',
          text: `Name: ${this.state.name}`,
          showConfirmButton: true,
          timer: 3000,
        });

        // Reset form after successful submission
        this.setState({
          name: '',
          email: '',
          phone: '',
          country: '',
        });
      })
      .catch((error) => {
        // Show error SweetAlert in case of submission error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.log(error);
      });
  }

  render() {    
    return (
        <div className="container add-contact">
        <h2 className="text-center animate__animated animate__fadeInDown">Add Contact</h2>
        <form className="contact-form animate__animated animate__zoomIn" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={this.state.phone}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Country</label>
            <input
              type="tel"
              className="form-control"
              id="country"
              name="country"
              placeholder="Enter Country "
              value={this.state.country}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block animate__animated animate__pulse animate__infinite">Add Contact</button>
        </form>
        <br />
      </div>
    
    )
  }
}
