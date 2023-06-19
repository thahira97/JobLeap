import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { ResumeContext } from "../context/resumeContext";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Profile.css";

function Profile() {
  const [aboutEditMode, setAboutEditMode] = useState(false);
  const [experienceEditMode, setExperienceEditMode ] = useState(false)
  const [projectsEditMode, setProjectsEditMode] = useState(false)
  const { currentUser } = useContext(AuthContext);
  const { setMyExperience, myExperience, resume, setResume } = useContext(ResumeContext);
  const userID = currentUser.id;
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/resumes/user/${userID}`
        );
        if (res.data) {
          setResume(res.data);
        } else {
          history.push("/profile/new");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [userID, history]);

  useEffect(() => {
    const textResume = {
      name: resume.name,
      email: resume.email,
      image: resume.user_img,
      job: resume.present_job,
      phone: resume.phone_number,
      location: resume.location,
      positionCompany: resume.position_company,
      years: resume.years_worked,
      aboutMe: resume.summary,
      experience: resume.experience,
      skills: resume.skills,
      education: resume.education,
      project_name: resume.project_name,
      project_description: resume.project_description,
      project_img: resume.project_img,
    };
    setMyExperience(textResume);
  }, [resume]);

  const [cardContent, setCardContent] = useState({
    jobTitle: resume.present_job,
    aboutMe: resume.aboutMe,
    experience: resume.experience,
    location: resume.location,
    phoneNumber: resume.phone_number,
    skills: resume.skills,
    projects: resume.project_description,
  });

  ///For handling about container
  const aboutInputChangeHandler= (event) => {
    setCardContent((prevContent) => ({
      ...prevContent,
      aboutMe: event.target.value
    }));
  }
   const aboutEditHandler = () => {
    setAboutEditMode(true)
   }
   
   const aboutSaveHandler = () => {
    setAboutEditMode(false)
    setResume((prevResume) => ({
      ...prevResume,
      summary: cardContent.aboutMe
    }));
   }
  
  //For experience container
  const experienceInputChangeHandler= (event) => {
    setCardContent((prevContent) => ({
      ...prevContent,
      experience: event.target.value
    }));
  }
   const experienceEditHandler = () => {
    setExperienceEditMode(true)
   }
   
   const experienceSaveHandler = () => {
    setExperienceEditMode(false)
    setResume((prevResume) => ({
      ...prevResume,
      experience: cardContent.experience
    }));
   }

  // For projects container
  const projectsInputChangeHandler= (event) => {
    setCardContent((prevContent) => ({
      ...prevContent,
      projects: event.target.value
    }));
  }
   const projectsEditHandler = () => {
    setProjectsEditMode(true)
   }
   
   const projectsSaveHandler = () => {
    setProjectsEditMode(false)
    setResume((prevResume) => ({
      ...prevResume,
      project_description: cardContent.projects
    }));
  }

   useEffect(() => {
    const updateData = async () => {
      try {
        const response = await axios.put(`/api/resumes/${userID}`, resume)
      } catch (error) {
        console.log(error);
      }
    };

    updateData();
  }, [resume]);
 
  return (
    <div>
      <Nav />

      <div className="profile-container">

        <div className="summary-panel">
          <div className="top-container">
            <img src="https://media.licdn.com/dms/image/C5616AQGIhqexxrnssA/profile-displaybackgroundimage-shrink_350_1400/0/1643125960150?e=1692230400&v=beta&t=tktSWlPzG4s005tMwBrAg1XP8BkM6nkIGeqRjFGNpGw" alt="back-img" className="img-fluid"
            />
          </div>
          <div className="row">
            <div className="col-md-3"><img src={resume.user_img} alt={resume.name} className="img-fluid user-img"/></div>
            <div className="col-md-8">
              <h2>{resume.name}</h2>
              <h5>{resume.present_job}</h5>
            </div>
            <div className="col-md-1 text-end"><button type="button" className="btn btn-link btn-sm"><i className="fas fa-pen"></i></button></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"><i className="fa-sharp fa-solid fa-envelope"></i> {resume.email}</div>
            <div className="col-md-3"><i className="fa-solid fa-phone"></i> {resume.phone_number}</div>
            <div className="col-md-3"><i className="fa-sharp fa-solid fa-location-dot"></i> {resume.location}</div>
          </div>
        </div>

        <div className="about profile-panel">
          <div className="panel-header">
            <h4>About</h4>
            <button type="button" className="btn btn-link btn-sm"><i className="fas fa-pen" onClick={aboutEditHandler}></i></button>
          </div>
          {aboutEditMode ? (
            <div>
              <textarea className="form-control" name="aboutMe" defaultValue={resume.summary} onChange={aboutInputChangeHandler} rows="5"></textarea>
              <button className="btn btn-primary" onClick={aboutSaveHandler}>Save changes</button>
            </div>
          ) : (
            <p>{resume.summary}</p>
          )}
        </div>

        <div className="experience profile-panel">
          <div className="panel-header">
            <h4>Experience</h4>
            <button type="button" className="btn btn-link btn-sm"><i className="fas fa-pen" onClick={experienceEditHandler}></i></button>
          </div>
          <h5>{resume.position_company} ({resume.years_worked})</h5>
          {experienceEditMode ? (
            <div>
              <textarea className="form-control" name="experience" defaultValue={resume.experience} onChange={experienceInputChangeHandler} rows="5"></textarea>
              <button className="btn btn-primary" onClick={experienceSaveHandler}>Save changes</button>
            </div>
          ) : (
            <p>{resume.experience}</p>
          )}
        </div>

        <div className="projects profile-panel">
          <div className="panel-header">
            <h4>Projects</h4>
            <button type="button" className="btn btn-link btn-sm"><i className="fas fa-pen" onClick={projectsEditHandler}></i></button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={resume.project_img}  alt={resume.project_name} className="img-fluid"/>
            </div>
            <div className="col-md-8 my-auto">
              <h5>{resume.project_name}</h5>
              {projectsEditMode ? (
                <div>
                  <textarea className="form-control" name="projects" defaultValue={resume.project_description} onChange={projectsInputChangeHandler} rows="5"></textarea>
                  <button className="btn btn-primary" onClick={projectsSaveHandler}>Save changes</button>
                </div>
              ) : (
                <p>{resume.project_description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="education profile-panel">
          <div className="panel-header">
            <h4>Education</h4>
            <button type="button" className="btn btn-link btn-sm"><i className="fas fa-pen"></i></button>
          </div>
          <p>{resume.education}</p>
        </div>

        <div className="skills profile-panel">
          <div className="panel-header">
            <h4>Skills</h4>
            <button type="button" className="btn btn-link btn-sm"><i className="fas fa-pen"></i></button>
          </div>
          <p>{resume.skills}</p>
        </div>
      
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
