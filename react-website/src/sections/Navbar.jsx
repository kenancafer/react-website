import "./style.css";
export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <a className="navbar-brand fw-bold fs-4" href="#!">
            Apex Legends
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a
                  className="nav-link text-white  fw-bold "
                  aria-current="page"
                  href="#!"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white  fw-bold" href="#!">
                  Battle Pass
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#!">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
