import React, { useState } from 'react';
import Nav from "./Nav"
import axios from "axios";

function ResumeSelect(){
  const [editMode, setEditMode] = useState(false)
 
  const [input, setInput] = useState({
    present_job:"",
    location:"",
    summary:"",
    user_img:"",
    skills:"",
    phone_number:""
  });

  function handleEditClick(){ 
    setEditMode((true))
  }

  function handleChange(e){
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  
  async function handleSaveClick(e){ 
    e.preventDefault();
    // console.log('saving')
    setEditMode((false))
    // console.log("input",input)
    try {
      const response = await axios.put("http://localhost:8080/api/resumes", input);
      console.log(response,"RESPONSE");
    }
    catch { 
      console.log("error")
    }
  
  
  }

  return (
    <div>
      <Nav/>
      <form onSubmit={handleSaveClick}> 
      <div className="mb-3">
  
        <input
              type="text"
              className={editMode ? "form-control" : "form-control-plaintext"}
              placeholder="Location"
              name="location"
              onChange={handleChange}
              required
            />
      </div>
  
      <button onClick={() => handleEditClick()} type="button" className="btn btn-info">
        edit
      </button>

      <button id='resumeLocation' type="submit"   className="btn btn-info">
        save
      </button>

      </form>
      </div>
  );
}
export default ResumeSelect;
