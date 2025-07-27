// src/components/Hero.jsx
import React from 'react';
import profileImg from '../assets/avatar.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
    
      <div className="hero-text">
        <p className="welcome">ยินดีต้อนรับสู่โปรไฟล์ของฉัน</p>
        <h1>
          สวัสดีครับ ผมชื่อ <span className="highlight">นาย วิเศษ ไผ่อุรุวนา</span><br />
          Software Developer
        </h1>
        <p className="description">
          สวัสดีครับ ผมชื่อเศก กำลังศึกษาอยู่ชั้นปีที่ 4 ในระดับปริญญาตรี สาขาวิชาวิทยาการคอมพิวเตอร์ 
          คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา ผมเป็นคนที่มีความรับผิดชอบสูง 
          มีความอดทนและมุ่งมั่นในการทำงานที่ได้รับมอบหมายเสมอ นอกจากนี้ 
          ผมยังมีความสามารถในการเรียนรู้สิ่งใหม่ ๆ อย่างรวดเร็วและมีทัศนคติที่เปิดกว้าง 
          พร้อมที่จะรับฟังและปรับตัวเข้ากับเทคโนโลยีและแนวคิดใหม่ ๆ อยู่เสมอ 
          เพื่อพัฒนาตัวเองและสร้างผลงานที่มีคุณภาพในทุก ๆ โอกาสที่ได้รับมอบหมายครับ
        </p>
      </div>

      <div className="hero-img">
        <img src={profileImg} alt="รูปโปรไฟล์" />
      </div>
    </section>
  );
}

export default Hero;
