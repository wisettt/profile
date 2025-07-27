// src/components/About.jsx
import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

import './About.css'; // ใช้ร่วมกับ CSS ด้านล่าง

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
      
        <div>
          <h2 className="about-title">contact</h2>
          
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <MdLocationOn className="about-icon" />
          <h4>Address</h4>
          <p>10/2 ม.10 ต.บ้านกาศ อ.แม่สะเรียง จ.แม่ฮ่องสอน 58110</p>
        </div>

        <div className="about-card">
          <MdPhone className="about-icon" />
          <h4>Phone</h4>
          <p>092-581-6188</p>
        </div>

        <div className="about-card">
          <MdEmail className="about-icon" />
          <h4>Email</h4>
          <p>dlbwiset@gmail.com</p>
        </div>

        <div className="about-card">
  <FaFacebookF className="about-icon" />
  <h4 className="card-title">Facebook</h4>
  <a
    className="card-content"
    href="https://www.facebook.com/gicjfjescjkjvdtuf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Wiset
  </a>
</div>



        <div className="about-card">
  <FaGithub className ="about-icon" />
  <h4 className="card-title">Github</h4>
  <a
    className="card-content"
    href="https://github.com/wisettt"
    target="_blank"
    rel="noopener noreferrer"
  >
    Wiset
  </a>
</div>
      </div>

      
    </section>
  );
}

export default About;
