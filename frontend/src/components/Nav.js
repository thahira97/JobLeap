import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
      <div className="container">
        <a className="navbar-brand" href="/">JobLeap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Find jobs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">My applications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">My profile</a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Sign up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Log in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
