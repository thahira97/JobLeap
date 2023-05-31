import './Nav.css';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg" aria-label="Tenth navbar example">
      <div class="container">
        <a class="navbar-brand" href="/">JobLeap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Find jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">My applications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">My profile</a>
            </li>
          </ul>
        </div>

        <div class="d-flex">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Sign up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Log in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
