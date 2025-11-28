import React from 'react';
import './About.css';
import CTA from '../../components/CTA/CTA';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About InvestKaps</h1>
          <p className="about-hero-subtitle">
            Your trusted partner in financial growth and investment success
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="our-story-container">
          <div className="our-story-content">
            <div className="section-header">
              <span className="section-subtitle">Our Story</span>
              <h2 className="section-title">Building Financial Success Since 2010</h2>
            </div>
            <p className="our-story-text">
              InvestKaps was founded in 2010 with a clear mission: to make smart investing accessible to everyone. 
              What began as a small team of passionate financial experts has grown into a trusted investment firm 
              serving thousands of clients worldwide.
            </p>
            <p className="our-story-text">
              Our journey has been defined by our commitment to innovation, integrity, and personalized service. 
              We've weathered market fluctuations and economic changes, always keeping our clients' best interests 
              at the forefront of everything we do.
            </p>
            <p className="our-story-text">
              Today, InvestKaps manages over $500 million in assets and continues to grow, thanks to our dedicated 
              team and loyal clients who trust us with their financial futures.
            </p>
          </div>
          <div className="our-story-image">
            <div className="image-container">
              <img src="/src/assets/our-story.jpg" alt="InvestKaps team" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="our-mission-section">
        <div className="our-mission-container">
          <div className="our-mission-content">
            <div className="section-header">
              <span className="section-subtitle">Our Mission</span>
              <h2 className="section-title">What Drives Us</h2>
            </div>
            <div className="mission-values">
              <div className="mission-value-item">
                <div className="mission-icon">
                  <i className="mission-icon-integrity"></i>
                </div>
                <h3 className="mission-title">Integrity</h3>
                <p className="mission-description">
                  We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.
                </p>
              </div>
              
              <div className="mission-value-item">
                <div className="mission-icon">
                  <i className="mission-icon-excellence"></i>
                </div>
                <h3 className="mission-title">Excellence</h3>
                <p className="mission-description">
                  We strive for excellence in everything we do, from investment strategies to client service.
                </p>
              </div>
              
              <div className="mission-value-item">
                <div className="mission-icon">
                  <i className="mission-icon-innovation"></i>
                </div>
                <h3 className="mission-title">Innovation</h3>
                <p className="mission-description">
                  We continuously seek innovative solutions to maximize returns and minimize risks for our clients.
                </p>
              </div>
              
              <div className="mission-value-item">
                <div className="mission-icon">
                  <i className="mission-icon-client"></i>
                </div>
                <h3 className="mission-title">Client-Focused</h3>
                <p className="mission-description">
                  Our clients' financial goals are at the center of everything we do. Their success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-header">
            <span className="section-subtitle">Our Experts</span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-description">
              Our team of experienced professionals is dedicated to helping you achieve your financial goals.
            </p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img src="/src/assets/team-1.jpg" alt="John Smith" />
                <div className="team-member-social">
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3 className="team-member-name">John Smith</h3>
              <p className="team-member-position">CEO & Founder</p>
              <p className="team-member-bio">
                With over 20 years of experience in finance and investment management, John leads our team with vision and expertise.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-member-image">
                <img src="/src/assets/team-2.jpg" alt="Sarah Johnson" />
                <div className="team-member-social">
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3 className="team-member-name">Sarah Johnson</h3>
              <p className="team-member-position">Chief Investment Officer</p>
              <p className="team-member-bio">
                Sarah's strategic insight and market knowledge drive our investment decisions and portfolio management.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-member-image">
                <img src="/src/assets/team-3.jpg" alt="Michael Chen" />
                <div className="team-member-social">
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3 className="team-member-name">Michael Chen</h3>
              <p className="team-member-position">Head of Research</p>
              <p className="team-member-bio">
                Michael leads our research team, analyzing market trends and identifying investment opportunities.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-member-image">
                <img src="/src/assets/team-4.jpg" alt="Emily Rodriguez" />
                <div className="team-member-social">
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <h3 className="team-member-name">Emily Rodriguez</h3>
              <p className="team-member-position">Client Relations Director</p>
              <p className="team-member-bio">
                Emily ensures our clients receive personalized service and support throughout their investment journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="section-header">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">InvestKaps Through the Years</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2010</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>InvestKaps was founded with a mission to provide accessible investment solutions.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2013</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>Opened our first international office and expanded our service offerings.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2016</div>
              <div className="timeline-content">
                <h3>$100M Milestone</h3>
                <p>Reached $100 million in assets under management.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2019</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>Launched our digital platform to enhance client experience and accessibility.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>$500M Milestone</h3>
                <p>Surpassed $500 million in assets under management and expanded to 10 countries.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Today</div>
              <div className="timeline-content">
                <h3>Continuing Growth</h3>
                <p>Continuing to innovate and grow, serving clients worldwide with excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};

export default About;
