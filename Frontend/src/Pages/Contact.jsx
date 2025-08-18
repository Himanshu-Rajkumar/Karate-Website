import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("📩 Sending your message...");

    try {
      const res = await fetch("https://karate-website.onrender.com/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 👇 Safely parse response (text or JSON both)
      let data;
      try {
        data = await res.json();
      } catch {
        data = await res.text();
      }

      if (res.ok) {
        setStatus(`✅ ${data.message || data || "Message sent successfully!"}`);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ ${data.message || data || "Something went wrong"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      <p className="status">{status}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #fff5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: clamp(1.5rem, 2vw, 2.2rem);
    color: #c00;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input, textarea {
    padding: 12px;
    border: 2px solid #c00;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    resize: none;
    transition: 0.3s ease;
    background: #fff;
    width:100%;
  }

  input:focus, textarea:focus {
    border-color: #ff4d4f;
    box-shadow: 0 0 5px rgba(255,77,79,0.3);
  }

  button {
    padding: 12px;
    background: #c00;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
    width: 88%;
    margin: 0 auto;
  }

  button:hover {
    background: #ff4d4f;
  }

  .status {
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 15px;
    form {
      gap: 12px;
    }
    input, textarea, button {
      font-size: 0.95rem;
    }
  }
`;

export default Contact;
