const Nav = ({ styleProp = null, handleClick, header = false }) => {
  return (
    <nav
      className={styleProp}
      onClick={() => {
        handleClick(header);
      }}
    >
      <ul>
        <li>
          <div id="nav-label-1" style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
            About Page
          </div>
          <a href="/about" aria-label="nav-label-1">
            OUR COMPANY
          </a>
        </li>
        <li>
          <div id="nav-label-2" style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
            Locations Page
          </div>
          <a href="/locations" aria-label="nav-label-2">
            LOCATIONS
          </a>
        </li>
        <li>
          <div id="nav-label-3" style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
            Contact Page
          </div>
          <a href="/contact" aria-label="nav-label-3">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
