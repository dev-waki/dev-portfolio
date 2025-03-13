import {useState,useEffect} from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import  logo  from '../assets/img/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg"
import { Contact } from "./Contact";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import {BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const[activeLink, setActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);

  useEffect(() =>  {
    onscroll =() => {
        if (window.scrollY >50) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

 window.addEventListener("scroll",onscroll);

 return() => window.removeEventListener("scroll",onscroll)


  }  ,[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);

    }
  return ( 
      <>
        <Navbar expand="md"  className={ scrolled ?  "scrolled" : ""}>

            <container>


            <Navbar.Brand href="/">
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="./" className={activeLink === 'Banner' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Banner')}>Home</Nav.Link>
              <Nav.Link href="./Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="./projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="./Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/wickliff-ntarangwi-91b1b1304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/share/14uL8Cvrm1/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/wykientara?igsh=dXNzemloemFiMDkw"><img src={navIcon3} alt="" /></a>
              </div>
              
            </span>
          </Navbar.Collapse>
          </container>
        </Navbar>
        </>

        )
        };

        
      
    
  


