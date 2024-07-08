import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Registration(props) {
    let showhide = props.showmodal
    useEffect(()=>{
        getEditData()
    
    
      },[showhide])

  let [input_data,setinpData] = useState({
    
        name:"",
        email:"",
        password:"",
        address:"",
        age:""

  })
  let [error,seterror]=useState({})

  let setData=(e)=>{ 
    setinpData({...input_data, [e.target.name]:e.target.value})

  }
  let getEditData = () => {
    if (props.getedit != "") {
      axios.get("http://localhost:3031/user/" + props.getedit)
        .then((res) => setinpData(res.data))
        .catch((err) => console.log(err.message))
    }
  }

  let saveData = () => {
    let dataValidation = {}
      if(!input_data.name){
        dataValidation.name = "Name is required"
      }      
      if(!input_data.address){
        dataValidation.address = "address is required"
      }
      if(!input_data.age){
        dataValidation.age = "age is required"
      }
      if(!input_data.email){
        dataValidation.email = "email is required"
      }

      if(!input_data.password){
        dataValidation.password = "password is required"
      }





      seterror (dataValidation)

      if(Object.keys(dataValidation).length==0)
        {
          if (props.getedit == "") {
              axios.post('http://localhost:3000/user', input_data)
                .then((res) => {
                  props.getadduser()
                  alert("Sucecssfully Save")
                })
                .catch((e) => alert(e))
              
            }
            else {
              axios.put('http://localhost:3000/user/'+props.getedit, input_data)
              .then((res) => {
                props.getadduser()
                alert("Sucecssfully Modify Your Data")
              })
              .catch((e) => alert(e))
              
            }              
        }
    }


  return (
    <>
    <Modal show={showhide}>
        <Modal.Header closeButton onClick={()=>{props.getadduser()}}>
          <Modal.Title>User Registration</Modal.Title>
        </Modal.Header>

<Modal.Body>
<div className='container p-3'>
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" id="uname" className="form-control" name='name'value={input_data.name} onChange={setData}/> 
  {error.name && <span className='text-danger'>{error.name} </span>} <br></br>  
  <label htmlFor="name" className="form-label">Email</label>
  <input type="email" id="uemail" className="form-control" name='email' value={input_data.email}  onChange={setData}/> 
  {error.email && <span className='text-danger'>{error.email} </span>} <br></br>
  <label htmlFor="name" className="form-label">Password</label>
  <input type="password" id="upass" className="form-control" name='password' value={input_data.password}  onChange={setData}/> 
  {error.password && <span className='text-danger'>{error.password} </span>} <br></br>
  <label htmlFor="name" className="form-label">Address</label>
  <input type="text" id="uaddress" className="form-control" name='address' value={input_data.address} onChange={setData}/>  
  {error.address && <span className='text-danger'>{error.address} </span>} <br></br>
  <label htmlFor="name" className="form-label">Age</label>
  <input type="text" id="uage" className="form-control" name='age' value={input_data.age} onChange={setData}/> 
  {error.age && <span className='text-danger'>{error.age} </span>} <br></br> 
  
  
</div>
</Modal.Body>
<Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.getadduser()}}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    
    

      
    </>
  )
}

export default Registration
