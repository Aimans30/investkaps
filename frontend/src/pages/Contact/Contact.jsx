import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Get in touch with our team of financial experts
          </p>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="contact-icon-location"></i>
              </div>
              <h3 className="contact-info-title">Visit Us</h3>
              <p className="contact-info-text">
                123 Finance Street<br />
                Investment City, IC 12345<br />
                United States
              </p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="contact-icon-phone"></i>
              </div>
              <h3 className="contact-info-title">Call Us</h3>
              <p className="contact-info-text">
                +1 (555) 123-4567<br />
                Monday - Friday: 9am - 5pm
              </p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="contact-icon-email"></i>
              </div>
              <h3 className="contact-info-title">Email Us</h3>
              <p className="contact-info-text">
                info@investkaps.com<br />
                support@investkaps.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <div className="contact-form-content">
              <div className="section-header">
                <span className="section-subtitle">Get In Touch</span>
                <h2 className="section-title">Send Us a Message</h2>
                <p className="section-description">
                  Have questions about our services or want to schedule a consultation? 
                  Fill out the form below and one of our experts will get back to you shortly.
                </p>
              </div>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
            
            <div className="contact-image">
              <img src="/src/assets/contact-image.jpg" alt="Contact InvestKaps" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            {/* In a real application, you would embed a Google Map or similar here */}
            <div className="map-overlay">
              <h3>Our Location</h3>
              <p>123 Finance Street, Investment City, IC 12345</p>
              <button className="map-button">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Hours Section */}
      <section className="office-hours-section">
        <div className="contact-container">
          <div className="office-hours-content">
            <div className="section-header">
              <span className="section-subtitle">Visit Us</span>
              <h2 className="section-title">Office Hours</h2>
            </div>
            
            <div className="hours-grid">
              <div className="hours-item">
                <div className="day">Monday - Friday</div>
                <div className="time">9:00 AM - 5:00 PM</div>
              </div>
              
              <div className="hours-item">
                <div className="day">Saturday</div>
                <div className="time">10:00 AM - 2:00 PM</div>
              </div>
              
              <div className="hours-item">
                <div className="day">Sunday</div>
                <div className="time">Closed</div>
              </div>
            </div>
            
            <div className="appointment-info">
              <p>Prefer to schedule a specific time? Book an appointment with one of our financial advisors.</p>
              <button className="appointment-button">Schedule Appointment</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
