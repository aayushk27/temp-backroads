import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <PageLink key={link.id} childClass="nav-link" {...link} />;
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} childClass="nav-icon" {...link} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
