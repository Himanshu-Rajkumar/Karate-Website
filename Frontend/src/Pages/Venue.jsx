import React from 'react'
import styled from 'styled-components'

const Venue = () => {
  return (
    <Wrapper>
      <h1>Our Dojo Locations</h1>
      <div className="venue-section">
        
        <div className="venue-box">
          <div className="venue-info">
            <h2>Curzon Ground Stadium , Hazaribagh , Jharakhand</h2>
            <p><strong>Contact:</strong> +91 8789447475, +91 7321941005</p>
            <p><strong>Email:</strong> himanshuraj01081999@gmail.com</p>
            <p><strong>Working days:</strong> Tuesday, Thursday, Saturday</p>
            <p><strong>Morning Time:</strong> 06:00 AM – 08:00 AM </p>
            <p><strong>Evening Time:</strong> 04:00 PM – 06:00 PM </p>
            
          </div>
          <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d17321.07096172329!2d85.35079750813466!3d23.989767702608006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f49dfe788c149b%3A0xe4653f93ea145923!2sDadi%20Bulsara%20Karate%2C%20Old%20bus%20stand%2C%20New%20Forest%20Colony%2C%20Hazaribagh%2C%20Jharkhand%20825301%2C%20India!3m2!1d23.9911703!2d85.364458!5e0!3m2!1sen!2sin!4v1754646888076!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
    

        <div className="venue-box">
          <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.7829928051537!2d85.3478398968419!3d23.997785622234446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49f005ea10761%3A0x65eb6ee0d65cad3!2sDadi%20bulsara%20karate%20ashihara%20kai%20kan%20foundation!5e0!3m2!1sen!2sin!4v1755244149760!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="venue-info">
            <h2> Near Tini Toy Play School , New Area , Hazaribagh ,Jhankhand</h2>
            <p><strong>Contact:</strong> +91 7321941005, +91 7979730392</p>
            <p><strong>Email:</strong> himanshuraj01081999@gmail.com</p>
            <p><strong>Working days:</strong> Monday, Wednesday, Friday</p>
            <p><strong>Morning Time:</strong> 06:00 AM – 08:00 AM</p>
            <p><strong>Evening Time:</strong> 04:00 PM – 06:00 PM</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 h1{
 text-align:center;
 margin-top:50px
 }
  .venue-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .venue-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    background: white;
  }

  .venue-info {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    border: 3px solid #c00;
    padding: 15px;
    border-radius: 8px;
  }

  .venue-info h2 {
    color: #c00;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .venue-map {
    border: 3px solid #c00;
    border-radius: 8px;
    overflow: hidden;
  }

  .venue-map iframe {
    height: 250px;
    width: 100%;
    border: none;
  }

  /* Tablet */
  @media (max-width: 992px) {
    .venue-info h2 {
      font-size: 20px;
    }

    .venue-info {
      font-size: 14px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .venue-box {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .venue-map iframe {
      height: 200px;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .venue-info h2 {
      font-size: 18px;
    }

    .venue-info {
      font-size: 13px;
    }

    .venue-map iframe {
      height: 180px;
    }
  }
`

export default Venue
