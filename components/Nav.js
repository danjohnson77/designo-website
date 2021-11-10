import Link from "next/link";

const Nav = ({ styleProp = null }) => {
  return (
    <nav className={styleProp}>
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
