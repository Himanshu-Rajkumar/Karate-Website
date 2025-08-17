import React from 'react';
import styled from 'styled-components';

const Programme = () => {
  return (
    <Wrapper>
      <h1>OUR PROGRAMMES</h1>
      <div className="programme">
        <div>
          <img src="./images/img1.jpg" alt="" />
          <h2>Martial Arts For Schools</h2>
        </div>
        <div>
          <img src="./images/img2.jpg" alt="" />
          <h2>Martial Arts For Children’s</h2>
        </div>
        <div>
          <img src="./images/img3.jpg" alt="" />
          <h2>Martial Arts For Women</h2>
        </div>
        <div>
          <img src="./images/img4.jpg" alt="" />
          <h2>Martial Arts For Physical Fitness</h2>
        </div>
        <div>
          <img src="./images/img5.jpg" alt="" />
          <h2>Martial Arts For Family</h2>
        </div>
        <div>
          <img src="./images/img6.jpg" alt="" />
          <h2>Martial Arts For Adults</h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;

  h1 {
    text-align: center;
    margin: 20px 0;
    
  }

  .programme {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }

  .programme div {
    text-align: center;
  }
  
  h2{
  margin-top:20px
  }
  img {
    width: 250px;
    height: 200px;
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.3s ease;
  
  }

  img:hover {
    transform: scale(1.05);
  }

  /* 📱 Mobile view */
  @media (max-width: 768px) {
    .programme {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  /* 📱 Small Mobile (portrait) */
  @media (max-width: 480px) {
    .programme {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Programme;
