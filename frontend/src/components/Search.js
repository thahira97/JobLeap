import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Search.css';

function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.onSubmit} >
      <div className="row">
        <div className="col-md-6">
          <div className="search-1">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
               type="text" 
               name="title"
               placeholder="Web Developer"
               onChange={props.onChange}
               ></input>
          </div>
        </div>
        <div className="col-md-6">
            <div className="search-2">
              <i className="fa-solid fa-location-dot"></i>
              <input 
                type="text" 
                name="location"
                placeholder="Toronto, ON"
                onChange={props.onChange}
                ></input>
                 <Link to="/jobs" >
              <button type="submit" className="btn btn-primary">
               Search</button></Link>
            </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Search;
