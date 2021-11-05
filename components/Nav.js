import Link from "next/link";

const Nav = () => {
  return (
    <nav>
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
