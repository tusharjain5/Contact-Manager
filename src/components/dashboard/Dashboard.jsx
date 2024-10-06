import axios from 'axios'
import React, { Component } from 'react'
import 'animate.css';
import './dashboard.css';

export default class Dashboard extends Component {

constructor(){
  super()
  this.state={mydata:[]}
}

componentDidMount(){
 
  axios.get("http://localhost:3005/contacts")
  .then((res)=>{
      this.setState({mydata:res.data})
  })
  }

  render() {
    return (
      <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center animate__animated animate__fadeInDown" style={{ marginTop: "5%", fontFamily: "cursive", fontStyle: "oblique", marginBottom: "5%", color:"darkblue" }}>Contact List</h1>
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
                </tr>
              </thead>
              <tbody>
                {this.state.mydata.map((item, index) => (
                  <tr key={index} className="contact-row animate__animated animate__zoomIn animate__delay-3s">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
