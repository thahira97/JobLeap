import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";

function ResumeSelect() {
  const [editMode, setEditMode] = useState(false);
  const [resumes, setResumes] = useState([]);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/resumes");
        setResumes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      {resumes.map((resume) => (
        <div key={resume.id}>
          <form onSubmit={handleSaveClick}>
            <div className="mb-3">
              <input
                type="text"
                className={editMode ? "form-control" : "form-control-plaintext"}
                placeholder={resume.location}
                name="location"
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
      ))}
      ;
    </div>
  );
}
export default ResumeSelect;
