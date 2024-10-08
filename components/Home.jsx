/* Student Name: Jorlin Roy
// Student ID: 301240499
 Date: 7 OCT 2024*/
import React from 'react';
import './Home.css'; 
import logo from '../src/assets/logo.jpeg'; 
import resume from '../src/assets/resume.pdf'; 

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="Personal Logo" className="logo" /> 
        <h1>Jorlin Roy</h1>
        <p>Full-Stack Developer | Software Engineer | Game Developer</p>
      </header>

      <section className="home-about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer specializing in front-end and back-end development. 
          With a strong foundation in React, Node.js, and modern web technologies, 
          I enjoy creating dynamic and user-friendly applications.
        </p>
      </section>

      <section className="home-projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project One</h3>
            <p>Developed a 2D side-scrolling action-adventure game, "Death to Deathless," where players embark on an epic journey to defeat powerful enemies. The game features immersive gameplay mechanics, rich storyline, and multiple levels of increasing difficulty.</p>
            <a 
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:326e4e1e-46a6-4519-92a0-14d1217db803" 
              className="view-project" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Developed the MOODY app, a mental health platform that addresses the challenges faced by individuals dealing with mental health issues. The app provides 24/7 access to personalized assistance, connections to mental health professionals, and a variety of treatment options. By offering a stigma-free environment and easy access to resources, MOODY promotes overall mental well-being and helps users take the first step toward better mental health.</p>
            <a 
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:95a9675d-24de-4e77-a141-1cc7a2f590c6" 
              className="view-project" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      <section className="home-resume">
        <h2>My Resume</h2>
        <p>Click below to view or download my resume:</p>
        <a 
          href={resume} 
          className="resume-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a 
          href={resume} 
          download 
          className="resume-button"
        >
          Download Resume
        </a>
      </section>

      <section className="home-contact">
        <h2>Get in Touch</h2>
        <p>Interested in working together? Feel free to reach out!</p>
        <a href="/contact" className="contact-btn">Contact Me</a>
      </section>
    </div>
  );
}
