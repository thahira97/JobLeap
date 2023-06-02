import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./JobSearch.css";
import FilterSearch from "./FilterSearch";
import JobLists from "./JobLists";

const dummyData = [
  {
    id: 1,
    companyName: "Cognizant",
    compImg:
      "https://media.licdn.com/dms/image/C560BAQF57ipqWkZvpQ/company-logo_100_100/0/1656617304605?e=1693440000&v=beta&t=ejKr_lBSJiX3mOSwtM1UnXGUmNXkxMuFtu7snOfar1E",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
    salary: "$80,000",
    schedule: "Full-time",
    flexTime: "Remote",
    datePosted: "19/3/2023",
  },
  {
    id: 1,
    companyName: "Walmart",
    compImg:
      "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
    salary: "$80,000",
    schedule: "Full-time",
    flexTime: "On-site",
    datePosted: "19/3/2023",
  },
  {
    id: 1,
    companyName: "Innova Post Credit ",
    compImg:
      "https://media.licdn.com/dms/image/D560BAQHNYCRROlQDaA/company-logo_100_100/0/1685627291785?e=1693440000&v=beta&t=tjR82CgFzlBsl2CgnN_0Nh092C5sVrl3_tSvkVeYfOQ",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      `WHAT YOU’LL GET OUT OF IT:

      $17-$22 Per Hour + Additional Bonus’
      Bi-weekly payroll company events
      Work with your friends and get to work outside in the spring/summer months
      Grow your management and leadership skills
      REQUIREMENTS:
      
      Positive Attitude (We hire for attitude, train for skill)
      No experience needed, TRAINING IS PROVIDED for both safety and painting
      Full time commitment: 40-50 hrs/ Per Week
      Detail Oriented and Results Driven
      Ability to work at heights (not afraid of using ladders)
      Reliable Transportation
      Please submit your resume if interested in applying.
      
      Job Type: Full-time
      
      Salary: $16.50-$24.00 per hour
      
      Benefits:
      
      Automobile allowance
      Casual dress
      Company events
      On-site parking
      Profit sharing
      Flexible Language Requirement:
      
      French not required
      Schedule:
      
      8 hour shift
      Monday to Friday
      Supplemental pay types:
      
      Bonus pay
      Overtime pay
      Retention bonus
      Tips`,
    salary: "$80,000",
    schedule: "Part-time",
    flexTime: "Hybrid",
    datePosted: "19/3/2023",
  },
  {
    id: 1,
    companyName: "Nokia",
    compImg:
      "https://media.licdn.com/dms/image/C4E0BAQGL8hpduEqGKQ/company-logo_100_100/0/1677420438777?e=1693440000&v=beta&t=Q7Dvgtt5pdmHEWuoDDjfDrFB5Vn2OVY7EyJEpW7Lu7o",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps).Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps).Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
    salary: "$80,000",
    schedule: "Internship",
    flexTime: "Remote",
    datePosted: "19/3/2023",
  },
  {
    id: 1,
    companyName: "Walmart",
    compImg:
      "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
    salary: "$80,000",
    schedule: "Full-time",
    flexTime: "On-site",
    datePosted: "19/3/2023",
  },
  {
    id: 1,
    companyName: "Walmart",
    compImg:
      "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
    salary: "$80,000",
    schedule: "Full-time",
    flexTime: "On-site",
    datePosted: "19/3/2023",
  },
  {
    id: 1,
    companyName: "Walmart",
    compImg:
      "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
    title: "Full-Stack Developer",
    location: "Calgary",
    summary:"Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
    description:
      "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
    salary: "$80,000",
    schedule: "Full-time",
    flexTime: "On-site",
    datePosted: "19/3/2023",
  },
];
const JobSearch = (props) => {
  return (
    <div>
      <Nav />
      <div className="job-search">
        <div className="top-container">
          <div className="main-image">
            <img src="jobsearch3.jpg" alt="..." />
          </div>
        </div>
        <FilterSearch />
        <div className="job-container">
          <JobLists jobs={dummyData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;
