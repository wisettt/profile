import React from 'react';
import './Qualification.css';
function Qualification() {
    return (
        <section className="qualification" id="qualification">
            <h2>Here's My <span className="highlight">Qualifications</span></h2>
            <div className="qualification-container">
                <div className="qualification-box">
                    <h3>ทักษะด้านคอมพิวเตอร์</h3>
                    <ul>
                        <li className="skills-list">
                            <div className="skill-pair"><span>JavaScript</span><span>Java</span></div>
                            <div className="skill-pair"><span>HTML</span><span>CSS</span></div>
                            <div className="skill-pair"><span>Python</span><span>MySQL</span></div>
                            <div className="skill-pair"><span>SQLite</span><span>Dart</span></div>
                        </li>
                    </ul>
                </div>

                <div className="qualification-box">
                    <h3>เครื่องมือที่ใช้ในการพัฒนา</h3>
                    <ul>
                        <li className="skills-list">
                            <div className="skill-pair"><span>Visual Studio Code</span><span>Android Studio</span></div>
                            <div className="skill-pair"><span>Flutter </span><span>GitHub</span></div>
                            <div className="skill-pair"><span>Figma</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Qualification;