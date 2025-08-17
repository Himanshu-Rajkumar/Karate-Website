import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Header = () => {
    return (
        <>
            <MainHeader>
                <div className='menuIcon'>
                    <NavLink to='/' >
                        <img className='icon-image' src='./images/karate logo.jpg' alt="logo" />
                    </NavLink>
                </div>
                <NavBar />
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-image{
  height:Auto;
  max-width:40%;
  }

 

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .icon-image{
    height:Auto;
    max-width:40%
    }
  }
`;

export default Header
