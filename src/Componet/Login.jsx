import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../style/RegStyle.css'
import Shopping from './Shopping'

function Login() {
  let [user_id, setUser_id] = useState('')
  let [password, setPassword] = useState('')
  let [userdata, setUserdata] = useState([])
  let [showPassword, setShowPassword] = useState(false)
  let usenavigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault()
    axios.get("http://localhost:3000/user")
      .then((res) => {
        setUserdata(res.data)
        let getdata = res.data.find((ud) => ud.email === user_id && ud.password === password)
        if (getdata) {
          toast.success("Successfully Logged In")
          sessionStorage.setItem('id', getdata.id)
          
          usenavigate('/')
        } else {
          toast.error("Invalid User")
        }
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <ToastContainer />

      <Shopping/>

      <div className="Cointainer">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="fa-solid fa-user" />
            <input 
              type="text" 
              placeholder="UserName" 
              className="Same" 
              id="login" 
              onChange={(e) => setUser_id(e.target.value)} 
            />
          </div>

          <div className="form-group position-relative">
            <i className="fa-solid fa-key" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='Password' 
              className="Same" 
              id="password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <i 
              className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`} 
              onClick={() => setShowPassword(!showPassword)} 
            />
          </div>

          <div className="form-group">
            <h5>Forget Password? Click <Link className='nav-item' to='/ForgetPass'>Here</Link></h5>
          </div>

          <button type="submit" className="Lbutton">Login</button>
          <div className="form-group">
            <h5>
              Already have an account? <Link className="nav-item" to="/registration"> Register here</Link>
            </h5>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
