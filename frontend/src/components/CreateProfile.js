import React, { useState, useRef } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import "./CreateProfile.css";

function CreateProfile() {
  const [resume, setResume] = useState({
    user_id: "",
    present_job: "",
    location: "",
    summary: "",
    user_img: "",
    skills: "",
    position_company: "",
    years_worked: "",
    experience: "",
    phone_number: "",
    project_name: "",
    project_img: "",
    project_description: "",
  });

  const [errorMessages, setErrorMessages] = useState({});
  const userImageInput = useRef(null);
  const projectImageInput = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        [field]: {
          preview: reader.result,
          file,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleUserImageUpload = (e) => {
    handleImageUpload(e, "user_img");
  };

  const handleRemoveUserImage = () => {
    setResume((prevResume) => ({
      ...prevResume,
      user_img: "",
    }));
    // Reset the input value to an empty string
    if (userImageInput.current) {
      userImageInput.current.value = "";
    }
  };

  const handleProjectImageUpload = (e) => {
    handleImageUpload(e, "project_img");
  };

  const handleRemoveProjectImage = () => {
    setResume((prevResume) => ({
      ...prevResume,
      project_img: "",
    }));
    // Reset the input value to an empty string
    if (projectImageInput.current) {
      projectImageInput.current.value = "";
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("user_id", resume.user_id);
      formData.append("present_job", resume.present_job);
      formData.append("location", resume.location);
      formData.append("summary", resume.summary);
      formData.append("user_img", resume.user_img.file);
      formData.append("skills", resume.skills);
      formData.append("position_company", resume.position_company);
      formData.append("years_worked", resume.years_worked);
      formData.append("experience", resume.experience);
      formData.append("phone_number", resume.phone_number);
      formData.append("project_name", resume.project_name);
      formData.append("project_img", resume.project_img.file);
      formData.append("project_description", resume.project_description);
      formData.append("is_original", true); // Assuming is_original is a boolean field
  
      await axios.post("http://localhost:8080/api/resumes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMessages(err.response.data.errors);
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
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUserImageUpload}
                    ref={userImageInput}
                  />
                  {resume.user_img && (
                    <div className="image-container">
                      <img
                        src={resume.user_img && resume.user_img.preview}
                        alt="User"
                        className="uploaded-image"
                      />
                      <button
                      type="button"
                      className="btn btn-danger remove-image-button"
                      onClick={handleRemoveUserImage}
                      >
                      Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body">
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="name"
                    value={resume.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                  />
                  {errorMessages.name && (
                    <p className="error-message">{errorMessages.name}</p>
                  )}
                  <br />
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="phone_number"
                    value={resume.phone_number}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                  />
                  {errorMessages.phone_number && (
                    <p className="error-message">
                      {errorMessages.phone_number}
                    </p>
                  )}
                  <br />
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="present_job"
                    value={resume.present_job}
                    onChange={handleInputChange}
                    placeholder="Your Current Position"
                  />
                  {errorMessages.present_job && (
                    <p className="error-message">
                      {errorMessages.present_job}
                    </p>
                  )}
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="location"
                    value={resume.location}
                    onChange={handleInputChange}
                    placeholder="Your Current Location"
                  />
                  {errorMessages.location && (
                    <p className="error-message">{errorMessages.location}</p>
                  )}
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="skills"
                    value={resume.skills}
                    onChange={handleInputChange}
                    placeholder="List your skills"
                  />
                  {errorMessages.skills && (
                    <p className="error-message">{errorMessages.skills}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="summary">About Me</h5>
                  <textarea
                    className="card-text editable-input"
                    name="summary"
                    value={resume.summary}
                    onChange={handleInputChange}
                    placeholder="Tell me about yourself"
                  />
                  {errorMessages.summary && (
                    <p className="error-message">{errorMessages.summary}</p>
                  )}
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="expirience">Experience</h5>
                  <div>
                    <input
                      type="text"
                      className="card-text editable-input"
                      name="position_company"
                      value={resume.position_company}
                      onChange={handleInputChange}
                      placeholder="Position, Company"
                    />
                    {errorMessages.company && (
                      <p className="error-message">{errorMessages.position_company}</p>
                    )}
                    <br />
                    <div className="date-input-container">
                    <input
                      type="text"
                      className="card-text editable-input"
                      name="years_worked"
                      value={resume.years_worked}
                      onChange={handleInputChange}
                      placeholder="Start Date, End Date"
                    />
                    {errorMessages.start_date && (
                      <p className="error-message">{errorMessages.years_worked}</p>
                    )}
                    </div>
                    <textarea
                     className="card-text editable-input"
                     name="experience"
                     value={resume.experience}
                     onChange={handleInputChange}
                     placeholder="Describe your experiences in this job"
                    ></textarea>
                    {errorMessages.experience && (
                      <p className="error-message">{errorMessages.experience}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="projects">Projects</h5>
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="project_name"
                    value={resume.project_name}
                    onChange={handleInputChange}
                    placeholder="Project Name"
                  />
                  {errorMessages.project_name && (
                    <p className="error-message">
                      {errorMessages.project_name}
                    </p>
                  )}
                  <br />
                  <textarea
                    className="card-text editable-input"
                    name="project_description"
                    value={resume.project_description}
                    onChange={handleInputChange}
                    placeholder="More about the project"
                  />
                  {errorMessages.project_description && (
                    <p className="error-message">
                      {errorMessages.project_description}
                    </p>
                  )}
                  <br />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProjectImageUpload}
                    ref={projectImageInput}
                  />
                  {resume.project_img && (
                    <div className="image-container-project">
                      <img
                        src={resume.project_img && resume.project_img.preview}
                        alt="Project"
                        className="uploaded-image"
                      />
                      <button
                      type="button"
                      className="btn btn-danger remove-image-button"
                      onClick={handleRemoveProjectImage}
                      >
                      Remove
                    </button>
                    </div>
                  )}
                </div>
              </div>
          </div>
        </div>
          <div className="button-control d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Create Profile
            </button>
          </div>
        </form>
        <br />
        <div className="outline"></div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateProfile;