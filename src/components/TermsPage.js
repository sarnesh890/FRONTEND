import React from 'react';
import '../styles/Terms.css';

function TermsPage() {
  return (
    <div className="terms-page">
      <div className="page-container">
        <h1>Terms of Service</h1>
        <section className="terms-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Eventora. By accessing or using our platform, you agree to be bound by these terms and conditions. Please read them carefully.
          </p>
        </section>
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using Eventora, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our platform.
          </p>
        </section>
        <section className="terms-section">
          <h2>2. Use of the Platform</h2>
          <p>
            You agree to use the platform in accordance with applicable laws and regulations. You must not misuse or interfere with the platform’s functionality.
          </p>
        </section>
        <section className="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Keep your account information confidential.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
          </ul>
        </section>
        <section className="terms-section">
          <h2>4. Limitation of Liability</h2>
          <p>
            Eventora is not liable for any indirect, incidental, or consequential damages arising from the use of our platform.
          </p>
        </section>
        <section className="terms-section">
          <h2>5. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Your continued use of the platform after changes have been made constitutes acceptance of the updated terms.
          </p>
        </section>
        <section className="terms-section">
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@eventora.com">support@eventora.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsPage;
