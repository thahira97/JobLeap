import React from "react";
import { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./JobSearch.css";
import FilterSearch from "./FilterSearch";
import JobLists from "./JobLists";
import axios from "axios";
import { ResumeContext } from '../context/resumeContext';

const JobSearch = (props) => {
  
  const { myExperience, jobDescription } = useContext(ResumeContext);
  console.log("ghfjsgdfhjgsdhf", jobDescription )
  const [arrayList, setArrayList] = useState([]);

  const inputValueTitle = JSON.parse(
    window.localStorage.getItem("INPUT_VAL")
  ).title;
  const inputValueLocation = JSON.parse(
    window.localStorage.getItem("INPUT_VAL")
  ).location;

  const defaultState = {
    jobTitle : props.data.job_title || inputValueTitle,
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


