import React from "react";
import styled from "styled-components";
import Programme from "./Programme";
import About from "./About";
import Venue from "./Venue";
import Instructures from "./Our Instructures";
import Contact from "./Contact";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <div className="main">
          <h1>
            DADI BULSHARA KARATE <br /> ASHIHARA KAIKAN <br /> FOUNDATION <br />
            <span><FaPhoneAlt />   +91 8789447475</span>
            <span><FaPhoneAlt />   +91 7321941005</span>
          </h1>

          <img src="./images/Grouping_pic.jpg" alt="img" />
        </div>
      </Wrapper>
      <Programme />
      <About />
      <Venue />
      <Instructures />
      <Contact />
    </div>
  );
};

const Wrapper = styled.section`
  .main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap; /* jab jagah kam ho to neeche shift ho jaye */
    padding: 20px;
    text-align: center;
  }

  .main > img {
    padding: 20px;
    height: 500px;
    max-width: 100%; /* responsive width */
    border-radius: 40%;
    object-fit: cover;
  }

  .main > h1 {
    font-size: 4rem;
    line-height: 1.4;
  }
  
  .main > h1 > span {
    display: block; /* alag line me aaye */
    color: red;
    font-size: 2.2rem;
    margin-top: 10px;
  }

  /* 📱 Mobile (max 768px) */
  @media (max-width: 768px) {
    .main {
      flex-direction: column; /* column layout for mobile */
      align-items: center;
    }

    .main > img {
      height: 300px; /* chhota image mobile me */
    }

    .main > h1 {
      font-size: 1.5rem;
    }

    .main > h1 > span {
      font-size: 1rem;
    }
  }

  /* 💻 Large screens (min 1200px) */
  @media (min-width: 1200px) {
    .main > h1 {
      font-size: 5rem;
    }

    .main > img {
      height: 550px;
    }
  }
`;

export default Home;
