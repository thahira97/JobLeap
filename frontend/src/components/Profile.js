import "./Profile.css";
import Nav from"./Nav"
import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <Nav />
      <div class="container">
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
                <p class="card-text">
                Toronto Ontario
                </p>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="card border-0">
              <div class="card-body title">
                <h1> John Doe</h1>
                <h4>Web Developer</h4>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body ">
                <h5 class="expirience"> Expirience</h5>
                <p class="card-text expirience">I worked here and here</p>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body ">
                <h5 class="expirience"> Skills</h5>
                <p class="card-text expirience">I have many skills</p>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-body ">
                <h5 class="expirience"> Education</h5>
                <p class="card-text expirience">I went to school here and here</p>
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
