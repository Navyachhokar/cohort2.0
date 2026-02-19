import React from 'react'
import './services.scss';

const Services = () => {
  return (
    <div className="services-section">
      <div className="service-text-container">
        <button id="services">Services</button>
        <h2>
          Explore our full range of coaching, raining, and tennis experiences.
          From first serve to match point — we've got the right program for you.
        </h2>
        <button id="explore">
          Explore More <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div className="service-image-container">
        <div className="image1">
          <img
            src="https://images.unsplash.com/photo-1714741980848-5b0b77d2cd68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbm5pc3MlMjBsZXNzb25zfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="image2">
          <img
            src="
        https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbm5pcyUyMGJhbGx8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Services
