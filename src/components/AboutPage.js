import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-container">
        <h1>About Eventora</h1>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Eventora is your go-to platform for discovering and managing events
            effortlessly. Our mission is to connect people with the events they
            are passionate about, while providing a seamless experience for
            event organizers.
          </p>
        </section>
        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            We offer a comprehensive range of features to help you manage events
            from start to finish. Whether you’re looking to host a concert, a
            conference, or a community gathering, Eventora provides tools for
            event creation, management, and promotion.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals dedicated to
            providing the best event management solutions. With a passion for
            technology and a commitment to excellence, we strive to offer
            unparalleled service and support.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Feel free to reach out to us through
            our contact page or email us at <a href="mailto:support@eventora.com">support@eventora.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
