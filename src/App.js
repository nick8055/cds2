import "./App.css";
import "./navbar.css";
import "./navbar2.css";
import "./hero.css";
import "./aboutUs.css";
import "./services.css";
import "./gallery.css";
import "./doctors.css";
import "./footer.css";
import "./sidebar.css";

import logo from "./images/Logo.jpeg";
import hero from "./images/Hero4.webp";
import Hamburger from "hamburger-react";

import serviceIcon1 from "./images/service icons/i1.png";
import serviceIcon2 from "./images/service icons/i2.png";
import serviceIcon3 from "./images/service icons/i3.png";
import serviceIcon4 from "./images/service icons/i4.png";
import serviceIcon5 from "./images/service icons/i6.png";
import serviceIcon6 from "./images/service icons/i7.png";
import serviceIcon7 from "./images/service icons/i8.png";

import g1 from "./images/gallery/g1.jpg";
import g2 from "./images/gallery/g2.jpg";
import g3 from "./images/gallery/g3.jpg";
import g4 from "./images/gallery/g4.jpg";

import d1 from "./images/Doctors/d1.jpg";
import d2 from "./images/Doctors/d2.png";
import d3 from "./images/Doctors/d3.jpg";
import d4 from "./images/Doctors/d4.jpg";
import d5 from "./images/Doctors/d5.jpg";
import d6 from "./images/Doctors/d6.jpg";
import dT from "./images/Doctors/dtemplate.jpg";

import { useState } from "react";

function Service({ sIcon, sHeading, sDesc }) {
  return (
    <div className="serviceComponent">
      <img className="serviceIcon" src={sIcon}></img>
      <div className="serviceHeading">{sHeading}</div>
      <div className="serviceDesc">{sDesc}</div>
    </div>
  );
}

function Doctor({ dPic, dName, dDesc }) {
  return (
    <div className="doctorComponent">
      <img className="doctorPic" src={dPic}></img>
      <div className="doctorName">{dName}</div>
      <div className="doctorDesc">{dDesc}</div>
    </div>
  );
}

function App() {
  const [isShown, setIsShown] = useState(false);

  const HamburgerButton = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };

  return (
    <div className="App">
      {/* <div className='navbar'>
        <a href="#"><img className='logo' src={logo}/></a>
        <div className='navlinkContainer'>
          <a href="#aboutUs" className='navlink'>About Us</a>
          <a href="#services"  className='navlink'>Services</a>
          <a href="#gallery" className='navlink'>Gallery</a>
          <a href="#doctorSection" className='navlink'>Doctors</a>
          <a href="#footer" className='navlink'>Contact Us</a>
        </div>
        <button className='hamburgerIcon'><Hamburger/></button>
      </div> */}

      <div className="navbar2">
        <a href="#">
          <img className="logo2" src={logo} />
        </a>
        <div className="navlinkContainer2">
          <a href="#aboutUs" className="navlink2">
            About Us
          </a>
          <a href="#services" className="navlink2">
            Services
          </a>
          <a href="#gallery" className="navlink2">
            Gallery
          </a>
          <a href="#doctorSection" className="navlink2">
            Doctors
          </a>
          <a href="#footer" className="navlink2">
            Contact Us
          </a>
        </div>
        <button onClick={HamburgerButton} className="hamburgerIcon2">
          <Hamburger />
        </button>
      </div>

      <div
        // style={{display: isShown ? 'block' : 'none'}}
        className={isShown ? "sideBar" : "sideBar2"}
        //  className='sideBar'
        id="sideBar"
      >
        <div className="sidelinkContainer">
          <a href="#aboutUs" className="sidelink2">
            About Us
          </a>
          <a href="#services" className="sidelink2">
            Services
          </a>
          <a href="#gallery" className="sidelink2">
            Gallery
          </a>
          <a href="#doctorSection" className="sidelink2">
            Doctors
          </a>
          <a href="#footer" className="sidelink2">
            Contact Us
          </a>
        </div>
      </div>

      <div className="HS">
        <div className="heroSection">
          <div className="heroSlogan">
            <div className="sloganSub1">Welcome To </div>
            <div>Mandoli's Dental Clinic</div>
            <div className="sloganSub2">
              We value our patients highly, so we always provide the best
              treatments and medications for your health{" "}
            </div>
            <button className="appointmentButton">
              Request An Appointment
            </button>
          </div>
          <div className="heroPicContainer">
            <img className="heroPic" src={hero} />
          </div>
        </div>
      </div>

      <div className="aboutUs" id="aboutUs">
        <div className="aboutUsHeading">About us</div>
        <div className="aboutUsDesc">
          Complete Dental Solutions is located at Puthiyara, in the heart of
          Calicut city and has been providing top-quality dental care for the
          past 15 years. We pride ourselves on using the best in class
          technology to provide complete dental solutions for our patients. Our
          team of experienced professionals are dedicated to keeping up with the
          latest advancements in dentistry to ensure that our patients receive
          the most effective and comfortable treatments available. We are
          committed to ensuring exceptional care and service to each and every
          one of our patients.
        </div>
      </div>

      <div className="services" id="services">
        <div className="serviceHeader">Services</div>
        <div className="serviceComponentsFlexbox">
          <Service
            sIcon={serviceIcon1}
            sHeading={"SCALING"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          <Service
            sIcon={serviceIcon2}
            sHeading={"CROWN"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          <Service
            sIcon={serviceIcon3}
            sHeading={"BONDING"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          <Service
            sIcon={serviceIcon4}
            sHeading={"IMPLANT"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          <Service
            sIcon={serviceIcon5}
            sHeading={"BRACES"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          <Service
            sIcon={serviceIcon6}
            sHeading={"POLISHING"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          <Service
            sIcon={serviceIcon7}
            sHeading={"ROOT CANAL"}
            sDesc={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            }
          ></Service>
          {/* <Service sIcon={serviceIcon1} sHeading={"ROOT CANAL"} sDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}></Service> */}
        </div>
      </div>

      <div className="gallery" id="gallery">
        <div className="galleryHeader">Gallery</div>
        <div className="galleryFlexbox">
          <img className="galleryPic" src={g1} />
          <img className="galleryPic" src={g2} />
          <img className="galleryPic" src={g3} />
          <img className="galleryPic" src={g4} />
        </div>
      </div>

      <div className="doctorSection" id="doctorSection">
        <div className="doctorHeader">Meet our Team</div>
        <div className="doctorFlexbox">
          <Doctor dPic={dT} dName={"Doctor's Name"} dDesc={"+913456826357"} />
          <Doctor dPic={dT} dName={"Doctor's Name"} dDesc={"+913456826357"} />
          <Doctor dPic={dT} dName={"Doctor's Name"} dDesc={"+913456826357"} />
          <Doctor dPic={dT} dName={"Doctor's Name"} dDesc={"+913456826357"} />
          <Doctor dPic={dT} dName={"Doctor's Name"} dDesc={"+913456826357"} />
          <Doctor dPic={dT} dName={"Doctor's Name"} dDesc={"+913456826357"} />
        </div>
      </div>

      <footer className="footer" id="footer">
        <div className="footerHeading">Contact us</div>
        <div className="contactDetails">
          Mobile : +919037523140
          <br />
          Email ID : shajumandoli@gmail.com
          <br />
          Address : Mandoli's Dental Clinic, AKS Towers, Puthiyara Junction,
          Kerala 673004
        </div>

        <iframe
          className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2012556.8202421046!2d75.245276739425!3d9.86923170146565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592cbdf1cdf7%3A0x6a22cda1b6db50df!2sMandoli&#39;s%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1673853304632!5m2!1sen!2sin"
          width="600"
          height="450"
        ></iframe>
        <div className="copyright">
          © 2022, Fraktal Ecosystems Pvt. Ltd. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
