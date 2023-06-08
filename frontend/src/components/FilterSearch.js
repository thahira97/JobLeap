import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./FilterSearch.css";

const FilterSearch = (props) => {
 

  // const defaultState = {
  //   location: "",
  //   datePosted: "",
  //   schedule: "",
  //   flexTime: "",
  //   salary: "",
  // };

  // const [arrayList, setArrayList] = useState([]);
  // const [filterValues, setFilterValues] = useState(defaultState);
  // const [filteredList, setFilteredList] = useState([]);

  // useEffect(() => {
  //   setFilterValues(props.apiData);
  //   setFilteredList(props.apiData);
  // }, []);
  
  // const props.handleFilterChange = (event) => {
  //   const { name, value } = event.target;
  //   setFilterValues(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  //   filterArray(filterValues); // Call the filterArray function with updated filter values
  // };

  // const filterArray = (filterValues) => {
  //   let filteredArray = [...arrayList];
  
  //   Object.entries(filterValues).forEach(([filterName, filterValue]) => {
  //     if (filterValue !== '') {
  //       filteredArray = filteredArray.filter(item =>
  //         item[filterName] === filterValue
  //       );
  //     }
  //   });
  
  //   setFilteredList(filteredArray);
  // };
  
  // const searchHandler= ()=> {
  //   setFilteredState(selectedState)
  //   console.log(filteredState)
  // }
  
  return (
    <div className="search-filter">
      <div className="container text-center">
        <form>
          <div className="row">
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="location"
                value={props.filterValues.location}
                onChange={props.handleFilterChange}
              >
                <option value="">Location</option>
                <option value="Toronto">Toronto</option>
                <option value="Hamilton">Hamilton</option>
                <option value="Windsor">Windsor</option>
                <option value="Oakville">Oakville</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="date_posted"
                value={props.filterValues.datePosted}
                onChange={props.handleFilterChange}
              >
                <option value="">Date-Posted</option>
                <option value="1 day ago">Past day</option>
                <option value="3 days ago">Past 3 days</option>
                <option value="1 week ago">Past week</option>
                <option value="1 month ago">Past month</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="schedule"
                value={props.filterValues.schedule}
                onChange={props.handleFilterChange}
              >
                <option>Schedule</option>
                <option value="Full-Time">Full-time</option>
                <option value="Part-Time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="flex_time"
                value={props.filterValues.flexTime}
                onChange={props.handleFilterChange}
              >
                <option>On-site/remote</option>
                <option value="On-site<">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="salary"
                value={props.filterValues.salary}
                onChange={props.handleFilterChange}
              >
                <option>Salary</option>
                <option value="$60,000">$60,000+</option>
                <option value="$65,000">$80,000+</option>
                <option value="$70,000">$90,000+</option>
              </select>
            </div>
            {/* <div className="col">
              <button type="button" className="btn btn-primary" onClick={searchHandler}>
                Search
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSearch;
