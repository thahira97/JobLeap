import "./Profile.css";
import Nav from "./Nav";
import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="outline"></div>
        <div className="row">
          <div className="col-3">
            <div className="card border-0">
              <div className="card-body">
                <img src="1-profile.jpg" className="img-thumbnail" alt="..."></img>
                <h4>About me</h4>
                <p className="card-text">
                  Experienced software engineer with expertise in web
                  development
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Location</h5>
                <p className="card-text">Toronto Ontario</p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body">
                <h5>Skills</h5>
                <p className="card-text">
                C++, JavaScript, Python, Node
                </p>
              </div>
            </div>
          </div>          
          <div className="col-9">
            <div className="card border-0">
              <div className="card-body title">
                <h1> John Doe</h1>
                <h4>Software Engineer</h4>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience"> Expirience</h5>
                <p className="card-text expirience">
                  Spark Digital 2014-2021
                  <br></br>
                  Quantum Group 2008-2014
                  <br></br>
                  TechHub 2005-2008
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience"> Projects</h5>
                <p className="card-text expirience">
                  E-commerce Website
                  <br></br>
                  Developed a responsive e-commerce website using React and Node.js, integrating payment gateways and user authentication
                  <br></br>  <br></br>
                  Restaurant Application
                  <br></br>
                Developed a responsive restaurant application website using Java and python, allowing business' to reach a wide rage of customers. 
                </p>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-body ">
                <h5 className="expirience">Education</h5>
                <p className="card-text expirience">
                  Concordia Univeristy 
                  Bachelor's of Engineering 2001-2004
                  <br></br>
                  Marianopolis
                  Computer Science 2002-2004
                  <br></br>
                 Royal West Academy 1996-2003
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
