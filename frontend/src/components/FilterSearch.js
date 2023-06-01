import React from "react";
import "./FilterSearch.css";

const FilterSearch = (props) => {
  return (
    <div className="search-filter">
      <div className="container text-center">
        <form>
          <div className="row">
          <div className="col">
            <select className="btn btn-primary btn-lg"  aria-label="Default select example">
  <option selected >Date-Posted</option>
  <option value="1">Yesterday</option>
  <option value="2">Past-week</option>
  <option value="3">Past-month</option>
  
</select>
            </div>
            <div className="col">
            <select className="btn btn-primary btn-lg"  aria-label="Default select example">
  <option selected >Schedule</option>
  <option value="1">Full-time</option>
  <option value="2">Part-time</option>
  <option value="3">Internship</option>
</select>
            </div>
            <div className="col">
            <select className="btn btn-primary btn-lg"  aria-label="Default select example">
  <option selected>On-site/remote</option>
  <option value="1">On-site</option>
  <option value="2">Remote</option>
  <option value="3">Hybrid</option>
</select>
            </div>
            <div className="col">
            <select className="btn btn-primary btn-lg"  aria-label="Default select example">
  <option selected>Salary</option>
  <option value="1">$40,000+</option>
  <option value="2">$60,000+</option>
  <option value="3">$80,000+</option>
  <option value="4">$90,000+</option>
</select>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary btn-lg">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSearch;
