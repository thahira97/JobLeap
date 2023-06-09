import {React,useState} from "react";
import Nav from "./Nav"
import axios from "axios";

function ResumeSelect(){
  const [editMode, setEditMode] = useState(false)

  function handleEditClick(){ 
    setEditMode((true))
  }

  function handleSaveClick(tableName,section,filter,valueOne,valueTwo){ 
  
    setEditMode((false))

    const resumeLocation = document.getElementById('resumeLocation');

    // if (resumeLocation.id === 'resumeLocation') { 
    //   tableName = "resumes"
    //   section = "location"
    //   valueOne = "Montreal"
    //   filter = "user.id"
    //   valueTwo = "1"
    // }

     axios.put("http://localhost:8080//api/resumes", {
     
    
     }).then(() =>
     { 
       
     }) 


    //create a post route in express server that calls the get resume function 
    //test route make sure we can update information in the database that we send it to
    //create a save button which makes an axios call and updates the state 
    //axios call to the route where the data is hardcoded and verify that it is still updating in the database
    //modify existing axios call to ensure that it can be used with dynamic data
    //check that modified axios call works
    //update state to reflect the data that has been modified in the database
  
  
  }

  return (
    <div>
      <Nav/>
      <div class="mb-3">

        <label for="formGroupExampleInput" className="form-label">Example label</label>

        <input type="text" className={editMode ? "form-control" : "form-control-plaintext"} id="formGroupExampleInput" placeholder="Example input placeholder" />
        
      </div>
  
      <button onClick={() => handleEditClick()} type="button" className="btn btn-info">
        edit
      </button>

      <button onClick={() => handleSaveClick()} id='resumeLocation' type="button"   className="btn btn-info">
        save
      </button>

    </div>
  );
}
export default ResumeSelect;
