import React, { Component } from 'react';
import axios from 'axios';
import 'animate.css';
import './contact.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
    constructor() {
        super();
        this.state = { mydata: [] };
    }
      
    componentDidMount() {
        this.fetchContacts();
    }   

    fetchContacts = () => {
        axios.get("http://localhost:3005/contacts")
            .then((res) => {
                this.setState({ mydata: res.data });
            })
            .catch(err => console.error(err)); // Handle errors
    }

    deleterecord = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this contact?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3005/contacts/${id}`)
                    .then(() => {
                        this.fetchContacts(); // Refresh contacts after deletion
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your contact has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => console.error(err)); // Handle errors
            }
        });
    }

    render() {
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center animate__animated animate__fadeInDown" style={{ marginTop: "5%", fontFamily: "Tahoma", color: "red" }}>Contacts</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-dark table-striped animate__animated animate__fadeInUp animate__delay-1s">
                                <thead>
                                    <tr className="animate__animated animate__fadeInLeft animate__delay-2s">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.mydata.map((item) => (
                                        <tr key={item.id} className="contact-row animate__animated animate__zoomIn animate__delay-3s">
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.country}</td>
                                            <td>
                                                <Link to={`/edit-user/${item.id}`} className='btn btn-success'>Edit</Link> &nbsp;&nbsp;
                                                <button onClick={() => { this.deleterecord(item.id) }} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
