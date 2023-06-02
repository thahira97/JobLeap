import "./Profile.css";
import Nav from "./Nav";
import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <Nav />
      <div class="container">
        <div class="outline"></div>
        <div class="row">
          <div class="col-3">
            <div class="card border-0">
              <div class="card-body">
                <img src="1-profile.jpg" class="img-thumbnail" alt="..."></img>
                <h4>About me</h4>
                <p class="card-text">
                  Experienced software engineer with expertise in web
                  development
                </p>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <h5>Location</h5>
                <p class="card-text">Toronto Ontario</p>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body">
                <h5>Skills</h5>
                <p class="card-text">
                C++, JavaScript, Python, Node
                </p>
              </div>
            </div>
          </div>          
          <div class="col-9">
            <div class="card border-0">
              <div class="card-body title">
                <h1> John Doe</h1>
                <h4>Software Engineer</h4>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body ">
                <h5 class="expirience"> Expirience</h5>
                <p class="card-text expirience">
                  Spark Digital 2014-2021
                  <br></br>
                  Quantum Group 2008-2014
                  <br></br>
                  TechHub 2005-2008
                </p>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body ">
                <h5 class="expirience"> Projects</h5>
                <p class="card-text expirience">
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
            <div class="card border-0">
              <div class="card-body ">
                <h5 class="expirience">Education</h5>
                <p class="card-text expirience">
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
        <div class="outline"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
