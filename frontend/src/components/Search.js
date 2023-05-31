import './Search.css';

function Search() {
  return (
    <div class="search">
      <div class="row">
        <div class="col-md-6">
          <div class="search-1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Web Developer"></input>
          </div>
        </div>
        <div class="col-md-6">
            <div class="search-2">
              <i class="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Toronto, ON"></input>
              <button type="button" class="btn btn-primary">Search</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
