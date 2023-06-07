import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./FilterSearch.css";

const FilterSearch = (props) => {
  const defaultState = {
    location: "",
    datePosted: "",
    schedule: "",
    flexTime: "",
    salary: "",
  };
  const [selectedState, setSelectedState] = useState(defaultState);
  const [filteredState, setFilteredState] = useState("");

  const selectedOptionHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setSelectedState((selectedState) => {
      return { ...selectedState, [name]: value };
    });
  };
  useEffect(() => {
    if (
      Object.values(selectedState).every(
        (value) => value === "" || props.apiData.length === 0
      )
    ) {
      setFilteredState([]);
      return;
    }
    const refinedData = props.apiData.filter((job) => {
      return (
        (
          selectedState.location === job.location) &&
        (
          selectedState.datePosted === job.datePosted) &&
        (
          selectedState.schedule === job.schedule) &&
        (
          selectedState.flexTime === job.flexTime) &&
        ( selectedState.salary === job.salary)
      );
    });
    setSelectedState(refinedData);
    console.log("++++++++", selectedState);
  }, [props.apiData, selectedState]);

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
                value={selectedState.location}
                onChange={selectedOptionHandler}
              >
                <option value="">Location</option>
                <option value="Toronto">Toronto</option>
                <option value="Hamilton">Hamilton</option>
                <option value="Windsor">Windsor</option>
                <option value="Thunder Bay">Thunder Bay</option>
                <option value="Oakville">Oakville</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="datePosted"
                value={selectedState.datePosted}
                onChange={selectedOptionHandler}
              >
                <option value="">Date-Posted</option>
                <option value="Past 24 hrs">Past 24 hrs</option>
                <option value="Past-week">Past-week</option>
                <option value="Past-month">Past-month</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="schedule"
                value={selectedState.schedule}
                onChange={selectedOptionHandler}
              >
                <option>Schedule</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="col">
              <select
                className="btn btn-outline--light"
                aria-label="Default select example"
                name="flexTime"
                value={selectedState.flexTime}
                onChange={selectedOptionHandler}
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
                value={selectedState.salary}
                onChange={selectedOptionHandler}
              >
                <option>Salary</option>
                <option value="$40,000+">$40,000+</option>
                <option value="$60,000+">$60,000+</option>
                <option value="$80,000+">$80,000+</option>
                <option value="$90,000+">$90,000+</option>
              </select>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSearch;
