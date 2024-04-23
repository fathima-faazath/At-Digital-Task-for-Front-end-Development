// App.js

import React from 'react';
import './app.css'; 

function app() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-blush-purple">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="Image/Logo.png" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CAREERS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="section1">
        {/* Section 1 contents */}
      </section>

      <section id="section2">
        {/* Section 2 contents */}
      </section>

      <section id="section3">
        {/* Section 3 contents */}
      </section>

      <section id="section4">
        {/* Section 4 contents */}
      </section>

      <section id="section5" className="bg-blush-purple">
        {/* Section 5 contents */}
      </section>

      {/* Bootstrap JS and Custom JS (if needed) */}
    </div>
  );
}

export default app;
