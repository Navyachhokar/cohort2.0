import React from 'react'
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <nav>
        <h2>Horizon Courts</h2>
        <div className="nav-links">
          <button>About Us</button>
          <a href="/">Services</a>
          <a href="/">Coaches</a>
          <a href="/">Events</a>
          <a href="/">Contacts</a>
        </div>
        <div className="button">
          <button>
            Book now <i class="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-description">
          <div className="hero-heading">
            <h1 id="heading1">Unleash Your Inner Champian Today.</h1>
            <h1 id="heading2">All In One Place.</h1>
          </div>
          <p>
            Join the ultimate tennis experience - where passion meets
            performance and every swing brings you closer to victory
          </p>
          <button>Start your own journey</button>
        </div>
        <div className="footer">
          <div className="left-details">
            <div className="para">
              <p>Train with real professionals.</p>
              <p>Get the real results</p>
            </div>
            <div className="image-container">
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="right-details">
            <a href="/" id="foot-links">
              Instagram <i class="ri-arrow-right-up-line"></i>
            </a>
            <a href="/" id="foot-links">
              Facebook <i class="ri-arrow-right-up-line"></i>
            </a>
            <a href="/" id="foot-links">
              Tik Tok <i class="ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
