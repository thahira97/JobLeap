import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import Nav from "./Nav";
import Footer from "./Footer";
import "./CreateProfile.css";

function CreateProfile() {

  const { currentUser } = useContext(AuthContext);
  const userID = currentUser.id;

  const [input, setInput] = useState({
    user_id: userID,
    present_job: "",
    phone_number: "",
    location: "",
    user_img: "",
    summary: "",
    education: "",
    skills: "",
    position_company: "",
    years_worked: "",
    experience: "",
    project_name: "",
    project_description: "",
    project_img: "",
    is_original: true
  });
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [projectImage, setProjectImage] = useState(null);
  const history = useHistory();

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl)
    if (type === 'profile') {
      setProfileImage(imageUrl);
      setInput(prev => ({ ...prev, user_img: imageUrl }));
    } else if (type === 'project') {
      setProjectImage(file);
      setInput(prev => ({ ...prev, project_img: imageUrl }));
    }
  };

  const handleRemoveImage = type => {
    if (type === 'profile') {
      setProfileImage(null);
      setInput(prev => ({ ...prev, user_img: "" }));
    } else if (type === 'project') {
      setProjectImage(null);
      setInput(prev => ({ ...prev, project_img: "" }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/resumes", input);
      history.push("/profile");
    } catch(err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="create-page">
      <Nav />
      <div className="create-container">
        <h3>Create Profile</h3>
        <form>
          
          <div className="create-panel">
            <h4>Profile Summary</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentUser.name}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Current role</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. Web Developer"
                    name="present_job"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                <label>Profile picture</label>
                  {profileImage ? (
                    <div>
                      <img src={profileImage} alt="Profile" className="profile-image-preview" />
                      <button type="button" className="btn btn-danger" onClick={() => handleRemoveImage('profile')}>
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={e => handleImageChange(e, 'profile')}
                    />
                  )}
                </div>
                <div className="form-group">
                  <label>About me</label>
                  <textarea
                    className="form-control"
                    placeholder="Write a 2-3 line summary about your professional experience."
                    name="summary"
                    onChange={handleChange}
                    rows="3">
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Contact Information</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentUser.email}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. 416-123-4567"
                    name="phone_number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. Toronto, ON"
                    name="location"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Educational Background</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. Bachelor of Science - University Name"
                    name="education"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. HTML, CSS"
                    name="skills"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Work Experience</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. Web Developer - ABC Inc."
                    name="position_company"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Years</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. 2010-2015"
                    name="years_worked"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Responsibilities</label>
                  <textarea
                    className="form-control"
                    placeholder="Write about your responsibilities and key achievements in this role."
                    name="experience"
                    onChange={handleChange}
                    rows="3">
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Projects</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. E-commerce Website"
                    name="project_name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                <label>Project Image</label>
                  {projectImage ? (
                    <div>
                      <img src={URL.createObjectURL(projectImage)} alt="Project" className="project-image-preview" />
                      <button type="button" className="btn btn-danger" onClick={() => handleRemoveImage('project')}>
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={e => handleImageChange(e, 'project')}
                    />
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Project Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Write about your key contributions to this project."
                    name="project_description"
                    onChange={handleChange}
                    rows="3">
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          {error &&
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          }
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Save Profile
          </button>

        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateProfile;