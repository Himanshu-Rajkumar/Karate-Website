import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";


const Footer = () => {
  return (
    <Wrapper>
     <div className='footer'>
      <div  >
        <HiOutlineOfficeBuilding className='icons-office'/>
       <h2>OFFICE ADDRESS</h2>
      <h3>Karzan Ground,Hazaribagh</h3>
      </div>
      <hr />
      <div >
        <ul className='footer-nav'>
          <li>
            <NavLink className='NavLink' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to='/programme'>
              Programme
            </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to='/venue'>
              Venue
            </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to='/instructures'>
              Our Instructures
            </NavLink>
          </li>
          <li>
            <NavLink className='NavLink' to='/contact'>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p>Designed by - <span>Himanshu kumar</span></p><br />
        <div className="footer-social--icons">
          <div>
            <a href="https://github.com/Himanshu-Rajkumar" target="_blank">
              <FaGithub className="icons" />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/himanshu-kumar-68b258286/"
              target="_blank">
              <FaLinkedin className="icons" />
            </a>
          </div>
        </div>

      </div>
     </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .footer {
    background-color: ${({ theme }) => theme.colors.footer_bg};
    margin-top: 120px;
    padding: 20px;
  }

  * {
    color: ${({ theme }) => theme.colors.hr};
  }

  .footer-nav {
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    padding: 0;
    list-style: none;
  }

  h2 {
    text-align: center;
    margin-top: 10px;
  }

  h3 {
    text-align: center;
    margin: 10px 0;
  }

  p {
    text-align: center;
  }

  .footer-social--icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-bottom: 10px;
    font-size: 20px;
  }

  .icons-office {
    color: white;
    font-size: 40px;
    display: block;
    margin: 20px auto 10px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .footer {
      text-align: center;
    }

    .footer-nav {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .footer-social--icons {
      gap: 10px;
    }
  }
`;


export default Footer
