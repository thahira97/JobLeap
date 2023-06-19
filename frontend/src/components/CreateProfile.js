import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import "./CreateProfile.css";

function CreateProfile() {

  const { currentUser } = useContext(AuthContext);
  const userID = currentUser.id;

  const [input, setInput] = useState({
    user_id: userID,
    present_job: "",
    phone_number: "",
    location: "",
    user_img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    summary: "",
    education: "",
    skills: "",
    position_company: "",
    years_worked: "",
    experience: "",
    project_name: "",
    project_description: "",
    project_img: "https://github.com/thahira97/Food-Pickup-App/raw/master/docs/Menu%20page.png",
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
    console.log(imageUrl);
    if (type === 'profile') {
      setProfileImage(imageUrl);
      // setInput(prev => ({ ...prev, user_img: imageUrl }));
    } else if (type === 'project') {
      setProjectImage(imageUrl);
      // setInput(prev => ({ ...prev, project_img: imageUrl }));
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
      <div className="create-container">
        
        <div className="heading">
          <h3>Welcome aboard, {currentUser.name.split(' ').slice(0, -1).join(' ')}!</h3>
          <p>Now let's set up your career profile.</p>
        </div>
        
        <form>
          <div className="create-panel">
            <h4>Profile Summary</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Profile photo</label>
                  { profileImage ? (
                  <div className="profile-image">
                    <img src={profileImage} alt="Profile" className="profile-image-preview" />
                    <br/>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveImage('profile')}>
                      <i className="fa-solid fa-trash-can"></i> Remove
                    </button>
                  </div>
                  ) : (
                  <input type="file" accept="image/*" className="form-control" onChange={e => handleImageChange(e, 'profile')} />
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Full name</label>
                  <input type="text" className="form-control" value={currentUser.name} disabled />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Current position</label>
                  <input type="text" className="form-control" placeholder="eg. Web Developer" name="present_job" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>About me</label>
                  <textarea className="form-control" placeholder="Write a 2-3 line summary about your skills, experience, or previous achievements." name="summary" onChange={handleChange} rows="5"></textarea>
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
                  <input type="text" className="form-control" value={currentUser.email} disabled />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" placeholder="eg. 416-123-4567" name="phone_number" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" className="form-control" placeholder="eg. Toronto, ON" name="location" onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Education</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Degree</label>
                  <input type="text" className="form-control" placeholder="eg. Bachelor of Science - University Name" name="education" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Skills</label>
                  <input type="text" className="form-control" placeholder="eg. HTML, CSS" name="skills" onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Experience</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" placeholder="eg. Web Developer - ABC Inc." name="position_company" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Duration</label>
                  <input type="text" className="form-control" placeholder="eg. 2010 - 2015" name="years_worked" onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" placeholder="Write about your responsibilities and key achievements in this role." name="experience" onChange={handleChange} rows="5"></textarea>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div className="form-group">
                  <button type="button" className="btn btn-outline-primary"><i className="fa-solid fa-plus"></i> Add more experience</button>
                </div>
              </div>
            </div>
          </div>

          <div className="create-panel">
            <h4>Projects</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Project name</label>
                  <input type="text" className="form-control" placeholder="eg. E-commerce Website" name="project_name" onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" placeholder="Write about your key contributions to this project." name="project_description" onChange={handleChange} rows="5"></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Project thumbnail</label>
                  { projectImage ? (
                  <div className="project-image">
                    <img src={projectImage} alt="Project" className="project-image-preview" />
                    <br/>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveImage('project')}>
                      <i className="fa-solid fa-trash-can"></i> Remove
                    </button>
                  </div>
                  ) : (
                  <input type="file" accept="image/*" className="form-control" onChange={e => handleImageChange(e, 'project')} />
                  )}
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div className="form-group">
                  <button type="button" className="btn btn-outline-primary"><i className="fa-solid fa-plus"></i> Add more projects</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="create-panel">
            <div className="row submit-section">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h4>Review & Submit</h4>
                <p>Don't stress about leaving a few blanks in your profile. You can always return and edit it whenever you're ready.</p>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>I'm ready to view my profile</button>
                  {error &&
                  <div className="alert alert-danger" role="alert">{error}</div>
                  }
                </div>                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfile;