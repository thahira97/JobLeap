import './Home.css';
import Search from '../components/Search';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <Nav />
      <div class="section header">
        <div class="container">
          <h1>Welcome to JobLeap!</h1>
          <p>Find jobs and create optimized resumes based on the job description</p>
          <Search />
        </div>
      </div>
      <div class="section how-it-works">
        <div class="container">
          <h2>How it Works</h2>
          <div class="row">
            <div class="col-md-4">
              <img src="1-profile.jpg" class="img-fluid" alt=""></img>
              <h5>1. Create your profile</h5>
              <p>Craft a compelling profile that showcases your skills and experience, paving the way for exciting career opportunities.</p>
            </div>
            <div class="col-md-4">
              <img src="2-generate.jpg" class="img-fluid" alt=""></img>
              <h5>2. Generate optimized resume</h5>
              <p>Unlock the power of a resume optimized to the job listing that maximizes your chances of landing your dream job.</p>
            </div>
            <div class="col-md-4">
              <img src="3-submit.jpg" class="img-fluid" alt=""></img>
              <h5>3. Submit application</h5>
              <p>Take the final step towards your desired career by submitting your meticulously crafted application. Good luck!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
