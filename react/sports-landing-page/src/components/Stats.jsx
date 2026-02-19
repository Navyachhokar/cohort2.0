import React from 'react'
import './stats.scss'


const Stats = () => {
  return (
    <div className="about-section">
      <div className="about-navbar">
        <button>About Horizon</button>
        <div className="para">
          <p>
            At Horizon, we don't just play tennis — we live it. Since 2021, our
            club has been a home for players of all level, from eager beginners
            to seasoned pros.
          </p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-box1">
          <div className="logo">
            <i class="ri-macbook-fill"></i>
          </div>
          <h3>
            Professional hard courts
            <span>
              with tournament-grade lighting & climate control — play in
            </span>
            perfect conditions, in any season.
          </h3>
          <div className="bottom-section">
            <i class="ri-toggle-fill"></i>
            <p>Game Mode</p>
          </div>
        </div>
        <div className="info-box2">
          <div className="box-text">Private & Group Lessons</div>
        </div>
        <div className="info-box3">
          <div className="box-info-top">
            <h2>100+</h2>
            <h4>Pro Coaches</h4>
            <p>
              Certified professionals ready to boost your game from first serve
              to tournamnet level
            </p>
          </div>
          <div className="box-info-bottom">
            <div className="section1">
              <p>Beginner</p>
              <div className="counts-box">
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
              </div>
              <p>55</p>
            </div>
            <div className="section2">
              <p>Intermediate</p>
              <div className="counts-box">
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
              </div>
              <p>40</p>
            </div>
            <div className="section3">
              <p>Advanced</p>
              <div className="counts-box">
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
                <i class="ri-circle-fill"></i>
              </div>
              <p>35</p>
            </div>
          </div>
        </div>
      </div>
      <div className="more-info">
        <h2>A few more facts about us in numbers</h2>
      </div>
      <div className="stats-box">
        <div className="stats-box1">
          <div className="stat-count">12000+</div>
          <p>Hours of play anually</p>
        </div>
        <div className="stats-box2">
          <div className="stat-count">89%</div>
          <p>Player Retention Rate</p>
        </div>
        <div className="stats-box3">
          <div className="stat-count">1,200+</div>
          <p>Active Members</p>
        </div>
        <div className="stats-box4">
          <div className="stat-count">125+</div>
          <p>Annual Tournaments</p>
        </div>
      </div>
    </div>
  );
}

export default Stats
