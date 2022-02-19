import React, { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from "react-icons/ri";
import './Navbar.css';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About me</a>
    </p>
    <p>
      <a href="#portfolio">Portifolio </a>
    </p>
   
  </>
);

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

       return (
         <div className="gpt3__navbar">
           <div className="gpt3__navbar-links">
             <div className="gpt3__navbar-links_container">
               <Menu />
             </div>
           </div>

           <div className="gpt3__navbar-sign">
             <RiGithubLine size={27} color="#fff" />
             <RiLinkedinBoxLine size={27} color="#fff" />
           </div>

           <div className="gpt3__navbar-menu">
             {toggleMenu ? (
               <RiCloseLine
                 color="#fff"
                 size={27}
                 onClick={() => setToggleMenu(false)}
               />
             ) : (
               <RiMenu3Line
                 color="#fff"
                 size={27}
                 onClick={() => setToggleMenu(true)}
               />
             )}
             {toggleMenu && (
               <div className="gpt3__navbar-menu_container scale-up-center">
                 <div className="gpt3__navbar-menu_container-links">
                   <Menu />
                   <div className="gpt3__navbar-menu_container-links-sign">
                     <RiGithubLine size={27} color="#fff" />
                     <RiLinkedinBoxLine size={27} color="#fff" />
                   </div>
                 </div>
               </div>
             )}
           </div>
         </div>
       );
}

export default Navbar
