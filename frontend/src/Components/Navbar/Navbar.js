import React from 'react'
import '../../App.css';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGithub, FaInstagram, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";


var cnt = "none";

function mobilemenu() {
  if (cnt === "none") {
    document.getElementById('mobilemenu').style.display = "block";
    cnt = "block";
  } else {
    document.getElementById('mobilemenu').style.display = "none";
    cnt = "none";
  }
}

window.addEventListener('scroll', function () {
  let navbar = this.document.querySelector('section');
  if (this.window.pageYOffset > 300) {
    navbar.classList.add("nav");
  }
  else {
    navbar.classList.remove('nav');
  }
}
)

function Navbar() {
  return (
    <>
      <section id="Navbar">
        <div className="container">
          <div className="Navbar w-100 d-md-flex justify-content-between align-items-center">
            <Logo imgpath={require('../../assests/logo.png')} />
            <nav className="mainmenu d-lg-flex d-none">
              <li className='pe-4'>
                <Link to="HOME">HOME</Link>
              </li>
              <li className='px-4'>
                <Link to="ABOUT US">ABOUT US</Link>
              </li>
              <li className='px-4'>
                <Link to="EDUCTION">EDUCTION-SKILL</Link>
              </li>
              <li className='px-4'>
                <Link to="USER">FOR USER</Link>
              </li>
              <li className='ps-4'>
                <Link to="CONTACT US">CONTACT US</Link>
              </li>
            </nav>
            <div className="social-icon d-flex justify-content-center">
              <a className="icon me-2 d-flex align-items-center justify-content-center" href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'><CiLinkedin /></a>
              <a className="icon mx-2 d-flex align-items-center justify-content-center" href='https://github.com/lakkadumang06'><FaGithub /></a>
              <a className="icon mx-2 d-flex align-items-center justify-content-center" href='https://www.facebook.com/profile.php?id=100083091534022&sk=about'><CiFacebook /></a>
              <a className="icon mx-2 d-flex align-items-center justify-content-center" href='https://www.instagram.com/im_umang_lakkad_06'><FaInstagram /></a>
              <div className="icon ms-2 d-flex align-items-center justify-content-center d-lg-none " onClick={() => mobilemenu()}><FaBars /></div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobilemenu d-lg-none" id="mobilemenu">
        <li className='px-3 mx-2 py-2 pt-3'>
          <Link to="HOME"  onClick={() => mobilemenu()}>HOME</Link>
        </li>
        <li className='px-3 mx-2 py-2' >
          <Link to="ABOUT US" onClick={() => mobilemenu()}>ABOUT US</Link>
        </li>
        <li className='px-3 mx-2 py-2'>
          <Link to="EDUCTION"  onClick={() => mobilemenu()}>EDUCTION-SKILL</Link>
        </li>
        <li className='px-3 mx-2 py-2' >
          <Link to="USER" onClick={() => mobilemenu()}>USER</Link>
        </li>
        <li className='px-3 mx-2 py-2' >
          <Link to="CONTACT US" onClick={() => mobilemenu()}>CONTACT US</Link>
        </li>
      </div>
    </>
  )
}

export default Navbar