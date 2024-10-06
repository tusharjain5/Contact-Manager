import axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { withRouter } from './withRouter';  // Import the custom withRouter

class Edituser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.router.params.id,
          name: '',
          email: '',
          phone: '',
          country: '',
        };

        // Bind methods to 'this'
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goback = this.goback.bind(this);
    }
    
    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    

    componentDidMount() {
        const { id } = this.props.router.params;
        axios.get("http://localhost:3005/contacts/" + id)
        .then((res) => {
            this.setState(res.data);
        })
        .catch((err) => console.log(err));  // Handle error with catch
    }    

    goback() {
        this.props.router.navigate('/contacts');
    }


    handleSubmit(e) {
        e.preventDefault();
        axios.put("http://localhost:3005/contacts/" + this.state.id, this.state)
        .then((res) => {
            Swal.fire({
                title: 'Success!',
                text: 'User details updated successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            this.props.router.navigate("/contacts");
        })
        .catch((err) => {
            console.error(err);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update user details.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        });
    }

    render() {    
        return (
            <div className="container add-contact">
                <h2 className="text-center animate__animated animate__fadeInDown">Edit Contact</h2>
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
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      placeholder="Enter country"
                      value={this.state.country}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block animate__animated animate__pulse animate__infinite">Edit User</button>
                </form>
                <button onClick={this.goback} className='btn btn-success'>Back</button>
                <br />
            </div>
        );
    }
}

export default withRouter(Edituser);  // Wrap component with custom withRouter
