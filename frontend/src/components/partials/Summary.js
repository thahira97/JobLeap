import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { ResumeContext } from "../../context/resumeContext";
import "../Profile.css";

function Summary() {
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

  const [textarea, setTextarea] = useState({
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
    setTextarea((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSaveClick(e) {
    e.preventDefault();
    setEditMode(false);
    try {
      const response = await axios.put(
        `http://localhost:8080/api/resumes/${userID}`,
        textarea
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
      <form onSubmit={handleSaveClick}>
        <div className="mb-3">
            <textarea
              className={editMode ? "form-control" : "form-control-plaintext"}
              placeholder={resume.summary}
              name="summary"
              onChange={handleChange}
              required
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
              <button
                onClick={() => handleEditClick()}
                type="button">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>

            <button type="submit">
              <i class="fa-regular fa-floppy-disk"></i>
              </button>
        </div>
      </form>
    </div>
  );
}

export default Summary;
