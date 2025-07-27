import React from 'react';
import './Certificate.css';
import profileImg1 from '../assets/image.jpg';
import profileImg2 from '../assets/image1.jpg';
import profileImg3 from '../assets/image.png';
import profileImg4 from '../assets/image1.png';
import profileImg5 from '../assets/image2.jpg';
const certificates = [
  {
    title: 'Machine Learning with Python',
    issuer: 'freeCodeCamp',
    
    image: profileImg2,
    
  },
   {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    
    image: profileImg1, // ✅ ใช้ชื่อที่ import มา
    
  },
  {
    title: 'Azure AI: Zero to Hero',
    issuer: 'Thaimook',
    image: profileImg5,
    
  },
  {
    title: 'Prompt Engineering with GitHub Copilot',
    issuer: 'Thaimook',
    image: profileImg4,
   
  },
  {
    title: 'Data Science Essential and Applications',
    issuer: 'Thaimook',
    image: profileImg3,
   
  },
];

function Certificate() {
  return (
    <section className="certificate-section" id="certificate">
      <h2 className="section-title">📜 Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="certificate-img"
            />
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
