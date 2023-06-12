import React, { useState } from "react";
import axios from 'axios';
import Nav from "./Nav";
import Footer from "./Footer";
import "./CreateProfile.css";

function CreateProfile() {
  const [resume, setResume] = useState({
    user_img: "",
    summary: "",
    location: "",
    skills: "",
    name: "",
    present_job: "",
    company: "",
    start_date: "",
    end_date: "",
    project_name: "",
    project_description: "",
    project_img: "",
    degree: "",
    university_name: "",
    phone_number: "",
  });

  const handleInputChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setResume((prevResume) => ({
        ...prevResume,
        [field]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleUserImageUpload = (e) => {
    handleImageUpload(e, "user_img");
  };

  const handleProjectImageUpload = (e) => {
    handleImageUpload(e, "project_img");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["name", "phone_number", "present_job", "location", "skills", "summary", "company", "start_date", "end_date", "project_name", "project_description", "degree", "university_name"];
    const emptyFields = requiredFields.filter(field => !resume[field]);
  
    if (emptyFields.length > 0) {
      // Display an error message for empty fields
      alert(`Please fill in the following fields: ${emptyFields.join(", ")}`);
      return;
    }

    try {
      const { 
        user_img,
        summary,
        location,
        skills,
        present_job,
        phone_number,
        company,
        start_date,
        end_date,
        project_name,
        project_description,
        project_img,
        degree,
        university_name
      } = resume;

      const resumeData = {
      //user_id,
        user_img, 
        summary,
        location,
        skills,
        present_job,
        phone_number,
        company,
        start_date,
        end_date,
        project_name,
        project_description,
        project_img,
        degree,
        university_name
      };
  
      await axios.post("http://localhost:8080/api/resumes", resumeData);
    } catch (err) { 
      console.error(err);
    }
  };
  
  

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="outline"></div>
          <h4>Create Your Profile</h4>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="row">
              <div className="col-3">
                <div className="card border-0">
                  <div className="card-body">
                    <h5>Profile Image</h5>
                    <p className="card-text">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUserImageUpload}
                      />
                      {resume.user_img && (
                        <div className="image-container">
                          <img src={resume.user_img} alt="User" className="uploaded-image" />
                        </div>
                      )}
                    </p>
                    </div>
                  </div>

              <div className="card border-0">
              <div className="card-body">
                <h5>Name</h5>
                <p className="card-text">
                <input
                  type="text"
                  className="card-text editable-input"
                  name="name"
                  value={resume.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  />
                </p>
                <br></br>
                <h5>Contact Number</h5>
                <p className="card-text">
                <input
                  type="text"
                  className="card-text editable-input"
                  name="phone_number"
                  value={resume.phone_number}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  />
                </p>
                <br></br>
                <h5>Current Position</h5>
                <p className="card-text">
                <input
                  type="text"
                  className="card-text editable-input"
                  name="present_job"
                  value={resume.present_job}
                  onChange={handleInputChange}
                  placeholder="Your Current Position"
                  />
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Location</h5>
                <p className="card-text">
                <input
                  type="text"
                  className="card-text editable-input"
                  name="location"
                  value={resume.location}
                  onChange={handleInputChange}
                  placeholder="Your Current Location"
                />
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Skills</h5>
                <p className="card-text">
                <input
                  type="text"
                  className="card-text editable-input"
                  name="skills"
                  value={resume.skills}
                  onChange={handleInputChange}
                  placeholder="List your skills"
                />
                </p>
              </div>
            </div>
          </div>          
          <div className="col-9">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="summary">About Me</h5>
                <p className="card-text summary">
                <input
                  type="text"
                  className="card-text editable-input"
                  name="summary"
                  value={resume.summary}
                  onChange={handleInputChange}
                  placeholder="Tell me about yourself"
                  />
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience"> Experience</h5>
                <p className="card-text expirience">
                <div>
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="company"
                    value={resume.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                  />
                  <br />
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="start_date"
                    value={resume.start_date}
                    onChange={handleInputChange}
                    placeholder="Start Date"
                  />
                  -
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="end_date"
                    value={resume.end_date}
                    onChange={handleInputChange}
                    placeholder="End Date"
                  />
                </div>
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience"> Projects</h5>
                <p className="card-text projects">
                <input
                    type="text"
                    className="card-text editable-input"
                    name="project_name"
                    value={resume.project_name}
                    onChange={handleInputChange}
                    placeholder="Project Name"
                  />
                  <br></br>
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="project_description"
                    value={resume.project_description}
                    onChange={handleInputChange}
                    placeholder="More about the project"
                  />
                  <br></br>
                  <h8>Project Image </h8>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProjectImageUpload}
                      />
                      {resume.project_img && (
                        <div className="image-container-project">
                          <img src={resume.project_img} alt="Project" className="uploaded-image" />
                        </div>
                      )}
                 <img alt=""/>
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience">Education</h5>
                <p className="card-text education">
                <input
                    type="text"
                    className="card-text editable-input"
                    name="university_name"
                    value={resume.university_name}
                    onChange={handleInputChange}
                    placeholder="School Name"
                  />             
                   <br></br>
                   <input
                    type="text"
                    className="card-text editable-input"
                    name="degree"
                    value={resume.degree}
                    onChange={handleInputChange}
                    placeholder="Degree"
                  />  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-control d-flex justify-content-center">
          <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
      </form>
      <br></br>
        <div className="outline"></div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateProfile;