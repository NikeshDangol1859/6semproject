import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Registration(props) {
  let showhide = props.showmodal
  const [input_data, setinpData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    age: '',
    gender: ''
  });

  const [error, seterror] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getEditData();
  }, [props.getedit]);

  const setData = (e) => {
    setinpData({ ...input_data, [e.target.name]: e.target.value });
  };

  const getEditData = () => {
    if (props.getedit) {
      axios
        .get('http://localhost:3000/user/' + props.getedit)
        .then((res) => setinpData(res.data))
        .catch((err) => console.log(err.message));
    }
  };

  const saveData = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    let dataValidation = {};

    if (!input_data.name) {
      dataValidation.name = 'Name is required';
    }
    if (!input_data.address) {
      dataValidation.address = 'Address is required';
    }
    if (!input_data.age) {
      dataValidation.age = 'Age is required';
    }
    if (!input_data.email) {
      dataValidation.email = 'Email is required';
    }
    if (!input_data.password) {
      dataValidation.password = 'Password is required';
    }
    if (!input_data.gender) {
      dataValidation.gender = 'Gender is required';
    }

    seterror(dataValidation);

    if (Object.keys(dataValidation).length === 0) {
      if (!props.getedit) {
        axios
          .post('http://localhost:3000/user', input_data)
          .then((res) => {
            props.getadduser();
            alert('Successfully Saved');
          })
          .catch((e) => alert(e.message));
      } else {
        axios
          .put('http://localhost:3000/user/' + props.getedit, input_data)
          .then((res) => {
            props.getadduser();
            alert('Successfully Modified Your Data');
          })
          .catch((e) => alert(e.message));
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Cointainer">
      <h1>Registration</h1>
      <div className="Form-Container">
        <form onSubmit={saveData} name="Myform" method="POST" autoComplete="Off">
          <div className="form-group" id="Name">
            <i className="fa fa-user lock" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="Name"
              value={input_data.name}
              onChange={setData}
            />
            {error.name && <span>{error.name}</span>}
          </div>

          <div className="form-group" id="Email">
            <i className="fa fa-envelope email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="Same"
              size={25}
              value={input_data.email}
              onChange={setData}
            />
            {error.email && <span>{error.email}</span>}
          </div>

          <div className="form-group" id="Pass">
            <i className="fa fa-lock lock" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="Same"
              value={input_data.password}
              onChange={setData}
            />
            <i 
              className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} 
              onClick={() => setShowPassword(!showPassword)} 
            />
            {error.password && <span>{error.password}</span>}
          </div>

          <div className="form-group" id="Address">
            <i className="fa fa-home lock" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="Same"
              value={input_data.address}
              onChange={setData}
            />
            {error.address && <span>{error.address}</span>}
          </div>

          <div className="form-group" id="Age">
            <i className="fa fa-birthday-cake lock" />
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="Same"
              value={input_data.age}
              onChange={setData}
            />
            {error.age && <span>{error.age}</span>}
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={input_data.gender === 'Male'}
              onChange={setData}
              className="radio"
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={input_data.gender === 'Female'}
              onChange={setData}
              className="radio"
            />
            <label>Female</label>
            {error.gender && <span>{error.gender}</span>}
          </div>

          <div className="form-group">
            <button type="submit" className="button">
              Register
            </button>
          </div>

          <div className="form-group">
            <h5>
              Already have an account? <Link className="nav-item" to="/Login"> Login</Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
