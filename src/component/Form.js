import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Form = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    eid: "",  
    birthDate: ""
  });
  const { firstName, lastName, emailAddress, eid, birthDate } = user;
  const onInputChange = e => {
    console.log('typee');
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    console.log('submit');
    if(firstName === '' ||
    lastName === '' ||
    emailAddress === '' ||
    eid === '' ||
    birthDate === ''
    ){
      alert('Invalid Input! Cannot be empty.');
      return;
    }
    if(!firstName.match(/^[a-zA-Z,.ñ ]+$/) ||
        firstName.length > 30) {
      alert('Please enter valid First Name.');
      return;
    }
    if(!lastName.match(/^[a-zA-Z,.ñ ]+$/) ||
        lastName.length > 30) {
      alert('Please enter valid Last Name.');
      return;
    }
    if(emailAddress.length > 45) {
      alert('Please enter valid email.');
      return;
    }
    if(eid.length !== 8) {
      alert('Please enter 8-digit number.');
      return;
    } else {
      console.log('submit')
      alert('New user has been added.');
      axios.post("http://localhost:3003/users", user);
      history.push("/");
    }
  };
  return (
    <div><Navbar/>
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Workbox Signup</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <label>First Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
          <label>Last Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
          <label>Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="example@email.com"
              name="emailAddress"
              value={emailAddress}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
          <label>EID</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="EID number"
              name="eid"
              value={eid}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
          <label>Birth Date</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="mm-dd-yy"
              name="birthDate"
              value={birthDate}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <button className="btn btn-dark btn-block">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Form;
