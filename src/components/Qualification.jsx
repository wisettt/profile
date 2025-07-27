import React from 'react';
import './Qualification.css';

function Qualification() {
  return (
    <section className="qualification" id="qualification">
      <h2>
        Here's My <span className="highlight">Qualifications</span>
      </h2>

      <div className="qualification-container">
        {/* ทักษะด้านคอมพิวเตอร์ */}
        <div className="qualification-box">
          <h3>ทักษะด้านคอมพิวเตอร์</h3>
          <ul className="skills-list">
            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                  <span>Java</span>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                  <span>CSS</span>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <span>MySQL</span>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                  <span>SQLite</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" />
                  <span>Dart</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* เครื่องมือที่ใช้ในการพัฒนา */}
        <div className="qualification-box">
          <h3>เครื่องมือที่ใช้ในการพัฒนา</h3>
          <ul className="skills-list">
            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                  <span>Visual Studio Code</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" />
                  <span>Android Studio</span>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                  <span>Flutter</span>
                </div>
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                  <span>GitHub</span>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-pair">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                  <span>Figma</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Qualification;