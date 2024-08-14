import React from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="page-container">
        <h1>Contact Us</h1>
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            We're here to help! If you have any questions or need support, don't
            hesitate to reach out to us using the contact form below or via email.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <section className="contact-section">
          <h2>Alternative Contact</h2>
          <p>
            You can also reach us at <a href="mailto:support@eventora.com">support@eventora.com</a> or call us at <a href="tel:+1234567890">+123-456-7890</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
