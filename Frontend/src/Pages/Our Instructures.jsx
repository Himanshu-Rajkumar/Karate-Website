import React from 'react'
import styled from 'styled-components'

const Instructures = () => {
  return (
    <Wrapper>
      <h1>Our Instructures</h1>
      <div className='main'>
        <div>
          <img src="./images/Sameer Shihan.jpg" alt="" /><br />
          <h3>Sameer Shihan</h3>
        </div>
        <div>
          <img src="./images/Praveen_Shihan_img.jpg" alt="" /><br />
          <h3>Praveen Shihan</h3>
        </div>
        <div>
          <img src="./images/Shihan Amit Sharma.jpg" alt="" /><br />
          <h3>Amit Shihan</h3>
        </div>
        <div>
          <img src="./images/Sensai Roshan Raj.jpg" alt="" /><br />
          <h3>Roshan Sensai</h3>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: clamp(1.5rem, 2vw, 2.5rem);
  }

  .main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .main div {
    background: #f9f9f9;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .main div:hover {
    transform: translateY(-5px);
  }

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin-top: 10px;
    padding: 8px 16px;
    background: #ff4d4f;
    color: white;
    border: none;
    border-radius: 5px;
    
    font-size: 1rem;
  }



  /* Tablet view */
  @media (max-width: 1024px) {
    .main {
      gap: 15px;
    }
    img {
      height: 180px;
      width: 180px;
    }
  }

  /* Mobile view */
  @media (max-width: 768px) {
    .main {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
    img {
      width: 90%;
      height: auto;
    }
    .main div {
      width: 100%;
      max-width: 350px;
    }
  }
`;

export default Instructures
