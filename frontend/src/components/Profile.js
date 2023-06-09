import { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../context/authContext';
import Nav from "./Nav";
import Footer from "./Footer";
import "./Profile.css";

function Profile() {

  const [resume, setResume] = useState({});
  const { currentUser } = useContext(AuthContext);
  const userID = currentUser.id;
  const history = useHistory();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(`http://localhost:8080/api/resumes/user/${userID}`);
        if (res.data) {
          console.log(res.data)
          setResume(res.data);
        } else {
          history.push("/profile/new");
        }
      } catch(err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userID]);

  const textResume = `Name: ${resume.name} \n
  Title: ${resume.present_job} \n
  About me: ${resume.summary} \n
  Experience: ${resume.company} ${resume.start_date}${resume.end_date}\n
  ${resume.description} \n
  Skills: ${resume.skills} \n
  Projects: ${resume.project_name} ${resume.project_description} \n
  Education: ${resume.degree} ${resume.university_name}
` 

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="outline"></div>
        <div className="row">
          <div className="col-3">
            <div className="card border-0">
              <div className="card-body">
                <img src={resume.user_img} className="img-thumbnail" alt={resume.name}></img>
                <h4>About me</h4>
                <p className="card-text">
                  {resume.summary}
                </p>
              </div>
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
                <p className="card-text expirience">
                {resume.company} {resume.start_date}-{resume.end_date}  
                <div>
                {resume.description}
                </div>
      
                </p>
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
                 {resume.degree} - {resume.university_name}
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