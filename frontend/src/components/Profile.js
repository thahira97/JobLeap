import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { ResumeContext } from "../context/resumeContext";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Profile.css";

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [resume, setResume] = useState({});
  const { currentUser } = useContext(AuthContext);
  const { setMyExperience, myExperience } = useContext(ResumeContext);
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
  }, [
    resume.name,
    resume.user_img,
    resume.present_job,
    resume.position_company,
    resume.summary,
    resume.experience,
    resume.education,
    resume.skills,
    resume.project_description,
    setMyExperience,
  ]);

  console.log("^^^^^^^", myExperience);

  const educationList =
    resume.education &&
    resume.education.map((item, index) => <div key={index}>{item}</div>);

  const [input, setInput] = useState({
    present_job: "",
    location: "",
    summary: "",
    user_img: "",
    skills: "",
    phone_number: "",
  });

  function handleEditClick() {
    setEditMode(true);
  }

  function handleChange(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSaveClick(e) {
    e.preventDefault();
    setEditMode(false);
    try {
      const response = await axios.put(
        "http://localhost:8080/api/resumes",
        input
      );
      console.log(response, "RESPONSE");
    } catch {
      console.log("error");
    }
  }

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
      <div className="main-container">
        <div className="card main">
          <div className="top-container">
            <img
              src="https://media.licdn.com/dms/image/C5616AQGIhqexxrnssA/profile-displaybackgroundimage-shrink_350_1400/0/1643125960150?e=1692230400&v=beta&t=tktSWlPzG4s005tMwBrAg1XP8BkM6nkIGeqRjFGNpGw"
              alt="back-img"
            />
          </div>
          <div className="user-info">
            <img src={resume.user_img} alt={resume.name} />
          </div>
          <div className="user-information">
            <div className="name-info">
              <div>
                <form onSubmit={handleSaveClick}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={
                        editMode ? "form-control" : "form-control-plaintext"
                      }
                      placeholder={resume.name}
                      name="name"
                      onChange={handleChange}
                      required
                    />
                    <button
                      onClick={() => handleEditClick()}
                      type="button"
                      className="btn btn-info"
                    >
                      edit
                    </button>

                    <button type="submit" className="btn btn-info">
                      save
                    </button>
                  </div>
                </form>
                {/* <h4>{resume.present_job}</h4> */}
                <form onSubmit={handleSaveClick}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className={
                        editMode ? "form-control" : "form-control-plaintext"
                      }
                      placeholder={resume.present_job}
                      name="present_job"
                      onChange={handleChange}
                      required
                    />
                    <button
                      onClick={() => handleEditClick()}
                      type="button"
                      className="btn btn-info"
                    >
                      edit
                    </button>

                    <button type="submit" className="btn btn-info">
                      save
                    </button>
                  </div>
                </form>
              </div>
              <div className="job-img">
                <img
                  src="https://www.lighthouselabs.ca/uploads/testimonial/company_logo/32/lighthouselabs.jpg"
                  width="50px"
                />
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
          {/* <div className="more-about">
                <h4>About me</h4>
                <p className="card-text">
                  {resume.summary}
                </p>
              </div> */}
        </div>

        <div className="middle-container">
          <div className="about-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <h4>About me</h4>
                <p className="card-text">{resume.summary}</p>
              </div>
            </div>
          </div>
          <div className="experience-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <h5 className="expirience"> Experience</h5>
                <p className="card-text expirience">
                  <b>
                    {" "}
                    {resume.position_company}- {resume.years_worked}
                  </b>
                  <div>{resume.experience}</div>
                </p>
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
                <h5 className="expirience"> Projects</h5>
                <p className="card-text expirience">
                  {resume.project_name}
                  <br></br>
                  {resume.project_description}
                  <br></br> <br></br>
                  <img
                    src={resume.project_img}
                    alt={resume.project_name}
                    width="200px"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="education-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <h5 className="expirience">Education</h5>
                <p className="card-text expirience">
                  <ul>{educationList}</ul>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="skills-container">
            <div
              className="card border-0"
              style={{ padding: 0, marginLeft: 0 }}
            >
              <div className="card-body">
                <h5>Skills</h5>
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
