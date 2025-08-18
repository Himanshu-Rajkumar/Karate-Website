import NavBar from "./NavBar"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <>
      <MainHeader>
        <div className="menuIcon">
          <NavLink to="/">
            <img className="icon-image" src="./images/karate logo.jpg" alt="logo" />
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
  /* Added width constraint and overflow prevention */
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;

  .icon-image{
  height:Auto;
  max-width:40%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    /* Reduced padding on mobile to prevent overflow */
    padding: 0 2rem;
    
    .icon-image{
    height:Auto;
    max-width:40%
    }
  }
`

export default Header
