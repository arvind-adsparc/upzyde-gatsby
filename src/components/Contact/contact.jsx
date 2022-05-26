import React from "react";
import Form from "../Form/form";
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="inner-container">
        <h2>CONTACT US</h2>

        <div className="contact-content">
          <div className="detail">
            <div className="company-name">Upzyde B.V.</div>
            <div className="address">
              Fonteinlaan 5a, 2012 JT Haarlem, The Netherlands
            </div>
          </div>

          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
