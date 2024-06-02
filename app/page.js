"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header>
      <a href="#" className="logo-holder">
        <div className="logo">M</div>
        <div className="logo-text">Mainul's Portfolio</div>
      </a>
      <nav>
        <ul id="menu" className={menuOpen ? "active" : " "}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="mailto:s.m.sunny97@gmail.com" className="button">Contact Me</a></li>
        </ul>
        <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </a>
      </nav>
    </header>
    <main>
      <section id="home" className="hero container">
        <div className="hero-blue">
          <div>
            <h1>
              <small>Hi I'm</small>
              Mainul Islam
            </h1>
            <p>
              I have completed my graduation from <b>Daffodil International University</b> in Computer Science and Engineering. I'm a Designer and Developer in Bangladesh.
              <span
                >I'm interested in AI topics which is why i also add things like
                ChatGPT into my projects these days.</span
              >
            </p>
            <div className="call-to-action">
              <a href="./imgs/Mainul.pdf" className="button black">View Resume</a>
              <a href="mailto:s.m.sunny97@gmail.com" className="button white">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/MainulIslamSunny">
                <img src="./imgs/github.png" alt="GitHub" width="48" />
              </a>
              <a href="https://www.linkedin.com/in/mainul-islam-2452a5148/">
                <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-yellow">
          <img src="./imgs/my.png" alt="Mainul Islam" width="100%" />
        </div>
      </section>
      <section className="logos container">
        <div className="marquee">
          <div className="track">
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/javascript.png" alt="JS" width="128" />
            <img src="./imgs/sass.png" alt="Sass" width="128" />
            <img src="./imgs/react.png" alt="ReactJS" width="128" />
            <img src="./imgs/nextjs.png" alt="NextJS" width="128" />
            
            <img src="./imgs/vscode.png" alt="Vs Code" width="128" />
            <img src="./imgs/python.png" alt="Python" width="128" />
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/javascript.png" alt="JS" width="128" />
            <img src="./imgs/sass.png" alt="Sass" width="128" />
            <img src="./imgs/react.png" alt="ReactJS" width="128" />
            <img src="./imgs/nextjs.png" alt="NextJS" width="128" />
      
            <img src="./imgs/vscode.png" alt="Vs Code" width="128" />
            <img src="./imgs/python.png" alt="Python" width="128" />
          </div>
        </div>
      </section>
      <section id="skills" className="skills container">
        <h2>
          <small>About Me</small>
          Skills
        </h2>
        <div className="holder-blue">
          <div className="left-column">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
         
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>NodeJS</li>
          
              <li>Python</li>
              <li>Java</li>
      
            </ul>
          </div>
          <div className="right-column">
            <h3>A bit about me</h3>
            <p>
              Hi I'm Mainul Islam, a Designer and Developer in Bangladesh. As a graduate with a degree in Computer Science & Engineering, I am passionate about leveraging my academic knowledge to make meaningful contributions to the field of software engineering. While I may lack professional experience, I bring a fresh perspective, a hunger for learning, and a strong willingness to adapt and grow in a dynamic work environment.
            </p>
            <p>
              I'm a results-driven software developer with expertise in Python, JavaScript, React, Next.js, HTML, CSS, TailwindCSS, Redux and C. My passion lies in creating user-centric web solutions that drive engagement and growth.
            </p>
          </div>
        </div>
      </section>
      <section className="work-experience container">
        <h2>
          <small>Recent</small>
          Work Experience
        </h2>
        <div className="jobs">
          <article>
            <figure>
              <div>
                <img src="./imgs/soft.jpg" alt="workplace-1" width="100%" />
                <figcaption>Softin</figcaption>
              </div>
            </figure>
            <h3>Softin</h3>
            <div>2023-2023</div>
            <p>I worked there as a Software Marketing Intern.</p>
          </article>
          <article>
            <figure>
              <div>
                <img src="./imgs/a1qa.png" alt="workplace-2" width="100%" />
                <figcaption>a1qa</figcaption>
              </div>
            </figure>
            <h3>a1qa</h3>
            <div>2023-2024</div>
            <p>
              I worked there as a Manual Software Testing Trainee. I was
              responsible for manual testing.
            </p>
          </article>
       
        </div>
      </section>
      <section id="projects" className="bento container">
        <h2>
          <small> Previous </small>
          Completed Projects
        </h2>
        <div className="bento-grid">
          <a href="#" className="bento-item">
            <img src="./imgs/1.png" alt="BGCCI" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/2.png" alt="Churhview" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/3.png" alt="Harley" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-5.jpg" alt="Bunbury" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-6.jpg" alt="Running" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/4.png" alt="School" width="100%" />
          </a>
        </div>
      </section>
   
      <section id="contact" className="contact container">
        <h2>
            <small>Get In Touch</small>
            Contact Me
        </h2>
        <div className="cha">
            <div className="ch">
                <h3><b>Mainul Islam</b></h3>
                <p>To secure a challenging position where I can utilize my 
                  learning and expand my learning’s, knowledge, and skills. 
                  Secure a responsible career opportunity to fully utilize my 
                  training and skills.</p>
                <p>You can also download my resume here if you want to take a look at it. I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!!</p>
                <a href="./imgs/Mainul.pdf" className="button black" download>Download Resume</a>
            </div>
            <form action="https://formspree.io/f/xqkrvkvg" method="POST" className="contact-form">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="button black">Send</button>
                </div>
            </form>
        </div>
    </section>
    </main>
    <footer>
      <div className="footer">
          <div className="footer-first">
              <h3>Mainul's Portfolio</h3>
          </div>
          <div className="footer-second">
              <ul>
                  <li>Mainul Islam</li>
                  <li>+8801521260456</li>
                  <li>s.m.sunny97@gmail.com</li>
              </ul>
          </div>

      </div>

      <div className="footer-rights">
          Copyright &#169 Mainul Islam | All rights reserved.
      </div>
  </footer>
    </>
  );
}
