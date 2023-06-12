import React, { useState, useRef } from "react";
import axios from "axios";
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

  const [userData, setUserData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const userImageInput = useRef(null);
  const projectImageInput = useRef(null);

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

    const requiredFields = [
      "name",
      "phone_number",
      "present_job",
      "location",
      "skills",
      "summary",
      "company",
      "start_date",
      "end_date",
      "project_name",
      "project_description",
      "degree",
      "university_name",
    ];
    const emptyFields = requiredFields.filter((field) => !resume[field]);

    if (emptyFields.length > 0) {
      const errorMessage = {};
      emptyFields.forEach((field) => {
        errorMessage[field] = "This field is required";
      });
      setErrorMessages(errorMessage);
      return;
    }

    setErrorMessages({});

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
        university_name,
      } = resume;

      const resumeData = {
        user_id: userData.user_id,
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
        university_name,
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
                      name="company"
                      value={resume.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                    />
                    {errorMessages.company && (
                      <p className="error-message">{errorMessages.company}</p>
                    )}
                    <br />
                    <input
                      type="text"
                      className="card-text editable-input"
                      name="start_date"
                      value={resume.start_date}
                      onChange={handleInputChange}
                      placeholder="Start Date"
                    />
                    {errorMessages.start_date && (
                      <p className="error-message">{errorMessages.start_date}</p>
                    )}
                    -
                    <input
                      type="text"
                      className="card-text editable-input"
                      name="end_date"
                      value={resume.end_date}
                      onChange={handleInputChange}
                      placeholder="End Date"
                    />
                    {errorMessages.end_date && (
                      <p className="error-message">{errorMessages.end_date}</p>
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
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="expirience">Education</h5>
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="university_name"
                    value={resume.university_name}
                    onChange={handleInputChange}
                    placeholder="School Name"
                  />
                  {errorMessages.university_name && (
                    <p className="error-message">
                      {errorMessages.university_name}
                    </p>
                  )}
                  <br />
                  <input
                    type="text"
                    className="card-text editable-input"
                    name="degree"
                    value={resume.degree}
                    onChange={handleInputChange}
                    placeholder="Degree"
                  />
                  {errorMessages.degree && (
                    <p className="error-message">{errorMessages.degree}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="button-control d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
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
