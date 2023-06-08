import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./JobSearch.css";
import FilterSearch from "./FilterSearch";
import JobLists from "./JobLists";
import axios from "axios";

// const dummyData = [
//   {
//     id: 1,
//     companyName: "Cognizant",
//     compImg:
//       "https://media.licdn.com/dms/image/C560BAQF57ipqWkZvpQ/company-logo_100_100/0/1656617304605?e=1693440000&v=beta&t=ejKr_lBSJiX3mOSwtM1UnXGUmNXkxMuFtu7snOfar1E",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
//     salary: "$80,000",
//     schedule: "Full-time",
//     flexTime: "Remote",
//     datePosted: "19/3/2023",
//   },
//   {
//     id: 1,
//     companyName: "Walmart",
//     compImg:
//       "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
//     salary: "$80,000",
//     schedule: "Full-time",
//     flexTime: "On-site",
//     datePosted: "19/3/2023",
//   },
//   {
//     id: 2,
//     companyName: "Innova Post Credit ",
//     compImg:
//       "https://media.licdn.com/dms/image/D560BAQHNYCRROlQDaA/company-logo_100_100/0/1685627291785?e=1693440000&v=beta&t=tjR82CgFzlBsl2CgnN_0Nh092C5sVrl3_tSvkVeYfOQ",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description: `WHAT YOU’LL GET OUT OF IT:

//       $17-$22 Per Hour + Additional Bonus’
//       Bi-weekly payroll company events
//       Work with your friends and get to work outside in the spring/summer months
//       Grow your management and leadership skills
//       REQUIREMENTS:
      
//       Positive Attitude (We hire for attitude, train for skill)
//       No experience needed, TRAINING IS PROVIDED for both safety and painting
//       Full time commitment: 40-50 hrs/ Per Week
//       Detail Oriented and Results Driven
//       Ability to work at heights (not afraid of using ladders)
//       Reliable Transportation
//       Please submit your resume if interested in applying.
      
//       Job Type: Full-time
      
//       Salary: $16.50-$24.00 per hour
      
//       Benefits:
      
//       Automobile allowance
//       Casual dress
//       Company events
//       On-site parking
//       Profit sharing
//       Flexible Language Requirement:
      
//       French not required
//       Schedule:
      
//       8 hour shift
//       Monday to Friday
//       Supplemental pay types:
      
//       Bonus pay
//       Overtime pay
//       Retention bonus
//       Tips`,
//     salary: "$80,000",
//     schedule: "Part-time",
//     flexTime: "Hybrid",
//     datePosted: "19/3/2023",
//   },
//   {
//     id: 3,
//     companyName: "Nokia",
//     compImg:
//       "https://media.licdn.com/dms/image/C4E0BAQGL8hpduEqGKQ/company-logo_100_100/0/1677420438777?e=1693440000&v=beta&t=Q7Dvgtt5pdmHEWuoDDjfDrFB5Vn2OVY7EyJEpW7Lu7o",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps).Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps).Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
//     salary: "$80,000",
//     schedule: "Internship",
//     flexTime: "Remote",
//     datePosted: "19/3/2023",
//   },
//   {
//     id: 1,
//     companyName: "Walmart",
//     compImg:
//       "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
//     salary: "$80,000",
//     schedule: "Full-time",
//     flexTime: "On-site",
//     datePosted: "19/3/2023",
//   },
//   {
//     id: 4,
//     companyName: "Walmart",
//     compImg:
//       "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
//     salary: "$80,000",
//     schedule: "Full-time",
//     flexTime: "On-site",
//     datePosted: "19/3/2023",
//   },
//   {
//     id: 5,
//     companyName: "Walmart",
//     compImg:
//       "https://media.licdn.com/dms/image/C560BAQHs5FN9hz6seQ/company-logo_100_100/0/1654192382941?e=1693440000&v=beta&t=DokNoPXWD9qbhQHkugkQwB_AA5UmwMSnxBcMkVaarSA",
//     title: "Full-Stack Developer",
//     location: "Calgary",
//     summary:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products.",
//     description:
//       "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
//     salary: "$80,000",
//     schedule: "Full-time",
//     flexTime: "On-site",
//     datePosted: "19/3/2023",
//   },
// ];
// const JobSearch = (props) => {
//   // const [job, setJob] = useState([]);
//   // const [apiData, setApiData] = useState([]);
//   const [arrayList, setArrayList] = useState([]);

//   const defaultState = {
//     location: props.data.location,
//     datePosted: "",
//     schedule: "",
//     flexTime: "",
//     salary: "",
//   };

//   const [filterValues, setFilterValues] = useState(defaultState);
//   const [filteredList, setFilteredList] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/jobs");
//         setArrayList(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const inputValueTitle = JSON.parse(
//       window.localStorage.getItem("INPUT_VAL")
//     ).title;
//     const inputValueLocation = JSON.parse(
//       window.localStorage.getItem("INPUT_VAL")
//     ).location;

//     const filteredData = arrayList.filter((row) => {
//       if (props.data.title && props.data.location) {
//         return (
//           row.job_title === props.data.title &&
//           row.location === props.data.location
//         );
//       } else {
//         return (
//           row.job_title === inputValueTitle &&
//           row.location === inputValueLocation
//         );
//       }
//     });

//     if (
//       filteredData.length === 0 &&
//       props.data.title &&
//       props.data.location
//     ) {
//       window.localStorage.removeItem("JOBS_USER_SEARCHES_FOR");
//       setFilteredList([]);
//     } else if (filteredData.length > 0) {
//       window.localStorage.setItem(
//         "JOBS_USER_SEARCHES_FOR",
//         JSON.stringify(filteredData)
//       );
//       setFilteredList(filteredData);
//     } else {
//       const existingData = JSON.parse(
//         window.localStorage.getItem("JOBS_USER_SEARCHES_FOR")
//       );
//       if (existingData && existingData.length > 0) {
//         setFilteredList(existingData);
//       } else {
//         setFilteredList([]);
//       }
//     }
//   }, [props.data.title, props.data.location,arrayList]);
  
//   ///Refined-Filter logic



//   useEffect(() => {
//     setFilterValues(arrayList);
//     setFilteredList(arrayList);
//   }, []);
  
//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilterValues(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//     filterArray(filterValues); 
//   };

//   const filterArray = (filterValues) => {
//     let filteredArray = [...arrayList];
  
//     Object.entries(filterValues).forEach(([filterName, filterValue]) => {
//       if (filterValue !== '') {
//         filteredArray = filteredArray.filter(item =>
//           item[filterName] === filterValue
//         );
//       }
//     });
  
//     setFilteredList(filteredArray);
//   };


//   return (
//     <div>
//       <Nav />
//       <div className="job-search">
//         <div className="top-container">
//           <div className="main-image">
//             <img src="jobsearch3.jpg" alt="..." />
//           </div>
//         </div>
//         {/* <FilterSearch apiData={apiData} jobs={job}/> */}
//         <FilterSearch handleFilterChange={handleFilterChange} filterValues={filterValues}/>
//         <div className="job-container">
//           <JobLists jobs={filteredList} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Nav from "./Nav";
// import FilterSearch from "./FilterSearch";
// import JobLists from "./JobLists";
// import Footer from "./Footer";

// const JobSearch = (props) => {
//   const [arrayList, setArrayList] = useState([]);
//   const [filterValues, setFilterValues] = useState({
//     location: props.data.location,
//     datePosted: "",
//     schedule: "",
//     flexTime: "",
//     salary: "",
//   });
//   const [filteredList, setFilteredList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/jobs");
//         setArrayList(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (arrayList.length > 0) {
//       const inputValueTitle = JSON.parse(
//         window.localStorage.getItem("INPUT_VAL")
//       ).title;
//       const inputValueLocation = JSON.parse(
//         window.localStorage.getItem("INPUT_VAL")
//       ).location;

//       const filteredData = arrayList.filter((row) => {
//         if (props.data.title && props.data.location) {
//           return (
//             row.job_title === props.data.title &&
//             row.location === props.data.location
//           );
//         } else {
//           return (
//             row.job_title === inputValueTitle &&
//             row.location === inputValueLocation
//           );
//         }
//       });

//       if (
//         filteredData.length === 0 &&
//         props.data.title &&
//         props.data.location
//       ) {
//         window.localStorage.removeItem("JOBS_USER_SEARCHES_FOR");
//         setFilteredList([]);
//       } else if (filteredData.length > 0) {
//         window.localStorage.setItem(
//           "JOBS_USER_SEARCHES_FOR",
//           JSON.stringify(filteredData)
//         );
//         setFilteredList(filteredData);
//       } else {
//         const existingData = JSON.parse(
//           window.localStorage.getItem("JOBS_USER_SEARCHES_FOR")
//         );
//         if (existingData && existingData.length > 0) {
//           setFilteredList(existingData);
//         } else {
//           setFilteredList([]);
//         }
//       }
//     }
//   }, [props.data.title, props.data.location, arrayList]);

//   useEffect(() => {
//     setFilterValues((prevState) => ({
//       ...prevState,
//       ...arrayList
//     }));
//     setFilteredList(arrayList);
//   }, [arrayList]);

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilterValues((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//     filterArray(filterValues);
//   };

//   const filterArray = (filterValues) => {
//     let filteredArray = [...arrayList];

//     Object.entries(filterValues).forEach(([filterName, filterValue]) => {
//       if (filterValue !== "") {
//         filteredArray = filteredArray.filter(
//           (item) => item[filterName] === filterValue
//         );
//       }
//     });

//     setFilteredList(() => filteredArray);
//   };

//   return (
//     <div>
//       <Nav />
//       <div className="job-search">
//         <div className="top-container">
//           <div className="main-image">
//             <img src="jobsearch3.jpg" alt="..." />
//           </div>
//         </div>
//         <FilterSearch
//           handleFilterChange={handleFilterChange}
//           filterValues={filterValues}
//         />
//         <div className="job-container">
//           <JobLists jobs={filteredList} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };


const JobSearch = (props) => {
  // const [job, setJob] = useState([]);
  // const [apiData, setApiData] = useState([]);
  const [arrayList, setArrayList] = useState([]);

  const inputValueTitle = JSON.parse(
    window.localStorage.getItem("INPUT_VAL")
  ).title;
  const inputValueLocation = JSON.parse(
    window.localStorage.getItem("INPUT_VAL")
  ).location;

  const defaultState = {
    location: props.data.location || inputValueLocation,
    datePosted: "",
    schedule: "",
    flexTime: "",
    salary: "",
  };

  const [filterValues, setFilterValues] = useState(defaultState);
  const [filteredList, setFilteredList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setArrayList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {


    const filteredData = arrayList.filter((row) => {
      if (props.data.title && props.data.location) {
        return (
          row.job_title === props.data.title &&
          row.location === props.data.location
        );
      } else {
        return (
          row.job_title === inputValueTitle &&
          row.location === inputValueLocation
        );
      }
    });

    if (
      filteredData.length === 0 &&
      props.data.title &&
      props.data.location
    ) {
      window.localStorage.removeItem("JOBS_USER_SEARCHES_FOR");
      setFilteredList([]);
    } else if (filteredData.length > 0) {
      window.localStorage.setItem(
        "JOBS_USER_SEARCHES_FOR",
        JSON.stringify(filteredData)
      );
      setFilteredList(filteredData);
    } else {
      const existingData = JSON.parse(
        window.localStorage.getItem("JOBS_USER_SEARCHES_FOR")
      );
      if (existingData && existingData.length > 0) {
        setFilteredList(existingData);
      } else {
        setFilteredList([]);
      }
    }
  }, [props.data.title, props.data.location,arrayList]);
  
  ///Refined-Filter logic



  useEffect(() => {
    setFilterValues(arrayList);
    setFilteredList(arrayList);
  }, []);
  
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues(prevState => ({
      ...prevState,
      [name]: value
    })); 
  };
  useEffect(() => {
    filterArray(filterValues);
  }, [filterValues]);

  const filterArray = (filterValues) => {
    let filteredArray = [...arrayList];
  
    Object.entries(filterValues).forEach(([filterName, filterValue]) => {
      if (filterValue !== '') {
        filteredArray = filteredArray.filter(item =>
          item[filterName] === filterValue
        );
      }
    });
  
    setFilteredList(filteredArray);
  };


  return (
    <div>
      <Nav />
      <div className="job-search">
        <div className="top-container">
          <div className="main-image">
            <img src="jobsearch3.jpg" alt="..." />
          </div>
        </div>
        {/* <FilterSearch apiData={apiData} jobs={job}/> */}
        <FilterSearch handleFilterChange={handleFilterChange} filterValues={filterValues}/>
        <div className="job-container">
          <JobLists jobs={filteredList} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;


