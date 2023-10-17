import "./Navbar.css";
import "./Palette.css";

function NavDivider() {
  return <div className="nav-divider"></div>;
}

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <p className="icon">Icon to be replaced</p>
        <ul className="sections">
          <li>About</li>
          <li>Featured</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <NavDivider />
    </>
  );
}

export default Navbar;
