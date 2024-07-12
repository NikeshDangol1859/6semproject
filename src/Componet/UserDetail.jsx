import React, { useEffect, useState } from 'react'
import Registration from './Registration'

function UserDetail() {
  let [title, setTitle] = useState([]) 
    let [showAddMod,setAddMod] = useState(false) 
    let [showEditMod,setEditMod] = useState("")
    let [search,setsearh]= useState("")
         
    
  useEffect(()=>{
    getalluser()
        

    },[title])  
    let getalluser= () =>{
      axios.get("http://localhost:3000/user")
      .then(response => setTitle(response.data))

    }  
    

    let handleDelete = (id)=>{
      // alert(id)
      axios.delete(`http://localhost:3000/user/${id}`)
      // axios.delete('http://localhost:3000/user'+ id, input_data)
    }
          
    
       
  return (
    <>
    <Registration
        getedit = {showEditMod}
        showmodal={showAddMod} 
        getadduser={()=>{getalluser()}}
        />
   
      
    </>
  )
}

export default UserDetail
