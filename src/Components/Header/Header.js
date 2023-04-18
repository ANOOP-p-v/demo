import React, { useState } from 'react'
import './Header.css'
import { NavLink } from "react-router-dom"
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import p4 from './img/p1.jpg'
import p5 from './img/p4.jpg'
import p6 from './img/shop1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Header() {


  return (
    <>

      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <a href="/">MyCanvas</a>
              </div>
            </div>
            {/* menu start here */}
            <div className="header-item item-center">

              <nav className="menu">
                <ul className="menu-main">
                  <li className="menu-item-has-children">
                    <a href="#">
                      Design Spotlights <FontAwesomeIcon icon="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Visual Document</h4>
                        <ul>
                          <li>
                            <a href="#">Worksuites</a>
                          </li>
                          <li>
                            <a href="#">Docs</a>
                          </li>
                          <li>
                            <a href="#">Presentations</a>
                          </li>
                          <li>
                            <a href="#">WhiteBoards</a>
                          </li>
                        </ul>
                        <h4 className="title">Photos and Videos</h4>
                        <ul>
                          <li>
                            <a href="#">Text to Image</a>
                          </li>
                          <li>
                            <a href="#"> Image Editor</a>
                          </li>
                          <li>
                            <a href="#">Pdf Editor</a>
                          </li>
                          <li>
                            <a href="#">Video Editor</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Print</h4>
                        <ul>
                          <li>
                            <a href="#">Cards</a>
                          </li>
                          <li>
                            <a href="#">Invitations</a>
                          </li>
                          <li>
                            <a href="#">Calender</a>
                          </li>
                          <li>
                            <a href="#">Label</a>
                          </li>
                        </ul>
                        <h4 className="title">Marketing</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Logos</a>
                          </li>
                          <li>
                            <a href="#">Posters</a>
                          </li>
                          <li>
                            <a href="#">Brochures</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Resources</h4>
                        <ul>
                          <li>
                            <a href="#">Business Resources</a>
                          </li>
                          <li>
                            <a href="#">Case studies</a>
                          </li>
                          <li>
                            <a href="#">Features</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img src={p5} alt="shop" />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Business  <FontAwesomeIcon icon="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={p1} alt="new Product" />
                          <h4 className="title">Image Editor</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={p2} alt="new Product" />
                          <h4 className="title">Text To Image</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={p3} alt="new Product" />
                          <h4 className="title">Pdf Editor</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={p4} alt="new Product" />
                          <h4 className="title">Video Editor</h4>
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">
                      Blog  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                    </a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <a href="#">Standard Layout</a>
                        </li>
                        <li>
                          <a href="#">Grid Layout</a>
                        </li>
                        <li>
                          <a href="#">single Post Layout</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Pages  <FontAwesomeIcon icon="fas fa-angle-down" />
                    </a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <NavLink to="/signin" >
                            Login
                          </NavLink>

                        </li>
                        <li>
                          <NavLink to="/signup" >
                            Register
                          </NavLink>
                        </li>
                        <li>
                          <a href="#">Faq</a>
                        </li>
                        <li>
                          <a href="#">404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>



            {/* Right Sidebar Hamburger */}
            <div class="header-item item-right">
 				
 				<div class="mobile-menu-trigger">
         <input type="checkbox" name="" id="" className="check" />
              <ul className="menu-items">
                <li>
                  <a href="https://google.com" target="_blank">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://google.com" target="_blank">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://google.com" target="_blank">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="https://google.com" target="_blank">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ham-menu">
                <span className="line line1" />
                <span className="line line2" />
                <span className="line line3" />
              </div>
            </div>

 				</div>
 			</div>

            

        </div>



      </header>
    </>
  );
};

export default Header

