import Search from "../components/Search";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <Nav />
      <div className="section header">
        <div className="container">
          <h1>Welcome to JobLeap!</h1>
          <p>
            Find jobs and create optimized resumes based on the job description
          </p>
          <Search 
            onChange={props.onChange} 
            onSubmit={props.onSubmit}
            data={props.data}/>
        </div>
      </div>
      <div className="section how-it-works">
        <div className="container">
          <h2>How it Works</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="1-profile.jpg" className="img-fluid" alt=""></img>
              <h5>1. Create your profile</h5>
              <p>
                Craft a compelling profile that showcases your skills and
                experience, paving the way for exciting career opportunities.
              </p>
            </div>
            <div className="col-md-4">
              <img src="2-generate.jpg" className="img-fluid" alt=""></img>
              <h5>2. Generate optimized resume</h5>
              <p>
                Unlock the power of a resume optimized to the job listing that
                maximizes your chances of landing your dream job.
              </p>
            </div>
            <div className="col-md-4">
              <img src="3-submit.jpg" className="img-fluid" alt=""></img>
              <h5>3. Submit application</h5>
              <p>
                Take the final step towards your desired career by submitting
                your meticulously crafted application. Good luck!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
