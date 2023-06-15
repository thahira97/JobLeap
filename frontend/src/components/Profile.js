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
      image: resume.user_img,
      job: resume.present_job,
      positionCompany: resume.position_company,
      aboutMe: resume.summary,
      experience: resume.experience,
      skills: resume.skills,
      education: resume.education,
      project_description: resume.project_description,
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
    console.log(event.target.value)
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
    console.log(event.target.value)
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
    console.log(event.target.value)
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
      <div className="main-container">
        <div className="card main">
          <div className="top-container">
            <img
              src="https://media.licdn.com/dms/image/C5616AQGIhqexxrnssA/profile-displaybackgroundimage-shrink_350_1400/0/1643125960150?e=1692230400&v=beta&t=tktSWlPzG4s005tMwBrAg1XP8BkM6nkIGeqRjFGNpGw"
              alt="back-img"
            />
          </div>
          <div className="user-img">
            <img src={resume.user_img} alt={resume.name} />
          </div>
          <div className="user-information">
            <div className="main-info">
            <div className="name-info">
              <span>
                <h2>{resume.name}</h2>
                <h4>{resume.present_job}</h4>
              </span>
               </div>
              <div className="job-img">
                <img
                  src="https://www.lighthouselabs.ca/uploads/testimonial/company_logo/32/lighthouselabs.jpg"
                  width="50px"
                />
              </div> 
              <div className="edit-btn">
              <i className="fas fa-pen" style={{ color: "#165ad0" }}></i>
              </div>
             
            </div>
            <div className="contact">
              <div className="location">
                <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                {resume.location}
              </div>
              <div className="email">
                <i class="fa-sharp fa-solid fa-envelope"></i> {resume.email}
              </div>
              <div className="phone">
                <i class="fa-solid fa-phone"></i> {resume.phone_number}
              </div>
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="about-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <div className="top-body">
                  <h4>About me</h4> 
                  <i className="fas fa-pen" style={{ color: "#165ad0" }} onClick={aboutEditHandler}></i>
                </div>
                <div className="bottom-body">
                  {aboutEditMode ? (
                  <textarea 
                  name="aboutMe"
                  defaultValue={resume.summary}
                  onChange={aboutInputChangeHandler} 
                  style={{ width:'100%', border: '0px'}} />) : (
                     <p className="card-text">{resume.summary}</p>
                  )}
                 {aboutEditMode && (
                <button className="btn btn-primary" onClick={aboutSaveHandler}>
                  Save
                </button>
              )}
                </div>
              </div>
            </div>
          </div>
          <div className="experience-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
              <div className="top-body">
                <h5 className="expirience"> Experience</h5>
                <i className="fas fa-pen" style={{ color: "#165ad0" }} onClick={experienceEditHandler}></i>
                </div>

                <div className="bottom-body">
              <b>{resume.position_company}- {resume.years_worked}</b>  
                  {experienceEditMode ? (
                  <textarea 
                  name="experience"
                  defaultValue={resume.experience}
                  onChange={experienceInputChangeHandler} 
                  style={{ width:'100%', border: '0px'}} />) : (
                     <p className="card-text">{resume.experience}</p>
                  )}
                 {experienceEditMode && (
                <button className="btn btn-primary" onClick={experienceSaveHandler}>
                  Save
                </button>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="projects-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
              <div className="top-body">
                <h5 className="expirience"> Projects</h5>
                <i className="fas fa-pen" style={{ color: "#165ad0" }} onClick={projectsEditHandler}></i>
                                      </div>
                  <div className="bottom-body">                
                   {resume.project_name}

                   {projectsEditMode ? (
                  <textarea 
                  name="projects"
                  defaultValue={resume.project_description}
                  onChange={projectsInputChangeHandler} 
                  style={{ width:'100%', border: '0px'}} />) : (
                     <p className="card-text">{resume.project_description}</p>
                  )}
                  {projectsEditMode && (
                <button className="btn btn-primary" onClick={projectsSaveHandler}>
                  Save
                </button>
              )} 
                  <img
                    src={resume.project_img}
                    alt={resume.project_name}
                    width="200px"
                  />
              </div>    
              </div>
            </div>
          </div>
          <div className="education-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <div className="top-body">
                   <h5 className="expirience">Education</h5>
                   <i className="fas fa-pen" style={{ color: "#165ad0" }}></i>
                </div>
                <p className="card-text">{resume.education}</p>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <div className="top-body">
                   <h5>Skills</h5>
                   <i className="fas fa-pen" style={{ color: "#165ad0" }}></i>
                </div>
                <p className="card-text">{resume.skills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
