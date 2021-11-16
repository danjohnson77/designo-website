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
          <a href="/about" aria-label="Link to about page">
            OUR COMPANY
          </a>
        </li>
        <li>
          <a href="/locations" aria-label="link to locations page">
            LOCATIONS
          </a>
        </li>
        <li>
          <a href="/contact" aria-label="link to contact page">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
