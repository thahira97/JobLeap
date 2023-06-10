import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../context/authContext';
import { ResumeContext } from '../context/resumeContext';
import Nav from "./Nav";
import Footer from "./Footer";
import "./Profile.css";

function Profile() {

  const [resume, setResume] = useState({});
  const { currentUser } = useContext(AuthContext);
  const { setMyExperience, myExperience } = useContext(ResumeContext);
  const userID = currentUser.id;
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/resumes/user/${userID}`);
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
      Name: resume.name,
      title: resume.present_job,
      aboutMe: resume.summary,
      companyName: resume.position_company,
      yearsWorked: resume.years_worked,
      experience: resume.description,
      skills: resume.skills,
      project_name: resume.project_name,
      project_description: resume.project_description,
    };
    setMyExperience(textResume);
  }, [
    resume.name,
    resume.present_job,
    resume.summary,
    resume.position_company,
    resume.years_worked,
    resume.description,
    resume.skills,
    resume.project_name,
    resume.project_description,
    setMyExperience,
  ]);

console.log(myExperience)
  
const educationList = resume.education && resume.education.map((item, index) => (
  <div key={index}>{item}</div>
));



// const experienceArr = Array.from(
//   new Map(
//     (resume.experiences || []).map((experience) => [
//       JSON.stringify(experience.id),
//       JSON.stringify(experience.company),
//       JSON.stringify(experience.description)
//     ])
//   ).values()
// );

// const experienceDivs = experienceArr.map(([id, company, description], index) => (
//   <div key={index}>
//     <div>{company}</div>
//     <div>{description}</div>
//   </div>
// ));

// console.log(experienceArr)
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="outline"></div>
        <div className="row">
          <div className="col-3">
            <div className="card border-0">
                <img src={resume.user_img} className="img-thumbnail" alt={resume.name}></img>
                <h4>About me</h4>
                <p className="card-text">
                  {resume.summary}
                </p>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Location</h5>
                <p className="card-text">{resume.location}</p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Skills</h5>
                <p className="card-text">
              {resume.skills}
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Contact</h5>
                <p className="card-text">
              {resume.email}
              <br></br>
              {resume.phone_number}
                </p>
              </div>
            </div>
          </div>          
          <div className="col-9">
            <div className="card border-0">
              <div className="card-body title">
                <h1>{resume.name}</h1>
                <h4>{resume.present_job}</h4>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience"> Experience</h5>
              {resume.position_company} 
              <br></br>
              {resume.years_worked}
              <br></br>
              {resume.experience}
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience"> Projects</h5>
                <p className="card-text expirience">
                 {resume.project_name}
                  <br></br>
                  {resume.project_description}
                  <br></br>  <br></br>
                 <img src={resume.project_img} alt={resume.project_name} width="200px" />
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience">Education</h5>
                <p className="card-text expirience">
                <ul>{educationList}</ul>
                   <br></br>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="outline"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;