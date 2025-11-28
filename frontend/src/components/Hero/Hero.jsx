import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Build Your
          <span className="title-highlight"> Financial Future</span>
          <br />
          With Confidence
        </h1>

        <p className="hero-subtitle">
          Professional investment management tailored to your goals.
          Start your journey towards financial freedom with our expert guidance.
        </p>

        <div className="hero-actions">
          <Button type="primary" size="large" className="hero-cta-primary">
            Start Investing Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
