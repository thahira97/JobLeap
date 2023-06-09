import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Resumes() {

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get("http://localhost:8080/api/resumes");
        setResumes(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="resumes">
      <Nav />
      {resumes.map((resume) => (
        <div>
        <p>{resume.id}</p>
        <p>{resume.user_id}</p>
        <p>{resume.present_job}</p>
        <p>{resume.id}</p>
        <p>{resume.location}</p>
        <p>{resume.summary}</p>
        <p>{resume.skills}</p>
        <p>{resume.phone_number}</p>
        <p>{resume.is_original}</p>
        <hr/>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Resumes;
