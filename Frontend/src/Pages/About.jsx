// AboutSection.jsx
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-section">
          <h2>About</h2>
          <h1>Our School!</h1>
          <p>
            Ashihara kaikan (芦原 会館) is a modern full contact street karate developed from Kyokushin karate by Hideyuki Ashihara with influences from various martial arts including Muay Thai, Pankration, and Jujutsu with an emphasis on Sabaki, using footwork and techniques to turn an opponent's power and momentum against them and to reposition oneself to the opponent's "blind" spot. The style is focused on practical application in a real fight including multiple attackers.
          </p>
          <h3>Our Vision/Goals:</h3>
          <ul>
            <li>Teach the highest quality martial arts.</li>
            <li>Contribute to a safe and peaceful community.</li>
            <li>Empower our students with valuable life skills.</li>
          </ul>
          <button
            onClick={() =>
              window.open(
                "https://en.wikipedia.org/wiki/Ashihara_kaikan",
                "_blank"
              )
            }
          >
            EXPLORE
          </button>
        </div>

        <div className="video-section">
          <iframe
            src="https://www.youtube.com/embed/n0IWTfv1sTY"
            title="Karate Training"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #000;
  color: #fff;
  padding: 50px 20px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    gap: 30px;
    flex-wrap: wrap;
  }

  .text-section {
    flex: 1;
    min-width: 300px;
  }

  .text-section h2 {
    font-size: 3rem;
    margin-bottom: 10px;
    color: #fff;
  }

  .text-section h1 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #fff;
  }

  .text-section p,
  .text-section ul {
    color: #fff;
    line-height: 1.6;
  }

  .text-section h3 {
    margin: 10px 0;
    font-size: 1.8rem;
  }

  .text-section li {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .text-section button {
    background: red;
    border: none;
    color: #fff;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 15px;
    transition: background 0.3s ease;
  }

  .text-section button:hover {
    background: darkred;
  }

  .video-section {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .video-section iframe {
    border: 5px solid red;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    height: 280px;
  }

  /* 📱 Tablet (max 992px) */
  @media (max-width: 992px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .text-section {
      order: 1;
    }

    .video-section {
      order: 2;
      width: 100%;
    }

    .video-section iframe {
      height: 250px;
    }
  }

  /* 📱 Mobile (max 576px) */
  @media (max-width: 576px) {
    .text-section h2 {
      font-size: 2rem;
    }

    .text-section h1 {
      font-size: 1.5rem;
    }

    .text-section li {
      font-size: 1rem;
    }

    .video-section iframe {
      height: 200px;
    }
  }
`;

export default About;
