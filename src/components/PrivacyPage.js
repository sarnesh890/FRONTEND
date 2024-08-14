import React from 'react';
import '../styles/PrivacyPage.css';

function PrivacyPage() {
  return (
    <div className="privacy-page">
      <div className="page-container">
        <h1>Privacy Policy</h1>
        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            At Eventora, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.
          </p>
        </section>
        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide to us directly, such as when you create an account or contact us. This may include your name, email address, and phone number.
          </p>
        </section>
        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to provide, maintain, and improve our services. We may also use it to communicate with you, including sending updates and promotional materials.
          </p>
        </section>
        <section className="privacy-section">
          <h2>3. Data Security</h2>
          <p>
            We implement various security measures to ensure the protection of your personal data. However, please note that no method of transmission over the Internet or electronic storage is completely secure.
          </p>
        </section>
        <section className="privacy-section">
          <h2>4. Your Rights</h2>
          <ul>
            <li>Access: You can request access to the personal data we hold about you.</li>
            <li>Correction: You can request correction of inaccurate or incomplete data.</li>
            <li>Deletion: You can request deletion of your personal data, subject to certain conditions.</li>
          </ul>
        </section>
        <section className="privacy-section">
          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
          </p>
        </section>
        <section className="privacy-section">
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@eventora.com">support@eventora.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPage;
