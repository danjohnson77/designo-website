import Link from "next/link";

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
          <Link href="/about">OUR COMPANY</Link>
        </li>
        <li>
          <Link href="/locations">LOCATIONS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
