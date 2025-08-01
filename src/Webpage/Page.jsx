import React from "react"
import "./Page.css"

const linkedinIcon = "../../Public/linkedin.png"
const instagramIcon = "../../Public/instagram.png"
const profilePic = "../../Public/Profile-pic.png"
const whatsappIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23fff' d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'/%3E%3C/svg%3E"
const briefcaseIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56z'/%3E%3C/svg%3E"

export default function Home() {
  return (
    <main className="main-bg">
      {/* NAVIGATION */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={profilePic} alt="Piyush" className="profile-pic" />
            <span>PIYUSH</span>
          </div>
          <div className="nav-links">
            <a href="#work" className="work-link">
              <img src={briefcaseIcon} alt="Work" className="nav-icon" />
              Work
            </a>
            <a
              href="https://wa.me/918168000254?text=Hi%20Piyush"
              className="social-btn whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-goswami9"
              className="social-btn linkedin-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/mai.piyushhoon"
              className="social-btn instagram-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
              Instagram
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-video-container">
          <iframe
            src="https://player.vimeo.com/video/1106027761?background=1&autoplay=1&loop=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Project 3"
            className="hero-video"
          ></iframe>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">PIYUSH</h1>
              <p className="hero-desc">
                Hi! I&apos;m Piyush, a <b>Motion Designer</b> specialized in combining <b>2D and 3D</b> to explore new ways of storytelling.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-scroll">Scroll Down For More</div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="work-section">
        <div className="section-container">
          <h2 className="section-title">Work</h2>
          <div className="work-grid">
            {/* First video (vertical) */}
            <div className="work-card">
              <div className="work-video vertical">
                <iframe
                  src="https://player.vimeo.com/video/1106029301"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Premium Edit"
                ></iframe>
              </div>
              <div className="work-info">
                <div className="work-title">Premium Edit</div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="work-card">
              <div className="work-video">
                <iframe
                  src="https://player.vimeo.com/video/1106027761"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Premium Edit"
                ></iframe>
              </div>
              <div className="work-info">
                <div className="work-title">Premium Edit</div>
              </div>
            </div>

            {/* Third video (vertical) */}
            <div className="work-card">
              <div className="work-video vertical">
                <iframe
                  src="https://player.vimeo.com/video/1106026089"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Product Advt."
                ></iframe>
              </div>
              <div className="work-info">
                <div className="work-title">Product Advt.</div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="work-card">
              <div className="work-video">
                <iframe
                  src="https://player.vimeo.com/video/1106026315"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="3D Motion Design"
                ></iframe>
              </div>
              <div className="work-info">
                <div className="work-title">3D Motion Design</div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="work-card">
              <div className="work-video">
                <iframe
                  src="https://player.vimeo.com/video/1106034819"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Talking Head"
                ></iframe>
              </div>
              <div className="work-info">
                <div className="work-title">Talking Head</div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="work-card">
              <div className="work-video">
                <iframe
                  src="https://player.vimeo.com/video/1106035995"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Talking Head"
                ></iframe>
              </div>
              <div className="work-info">
                <div className="work-title">Talking Head</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <div className="section-container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Piyush's creative vision and technical expertise brought our brand story to life in ways we never imagined. The 3D animations were absolutely stunning!"
              </p>
              <div className="testimonial-author">Sarah Johnson</div>
              <div className="testimonial-role">Creative Director, Design Studio</div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Working with Piyush was incredible. He perfectly balanced creativity with professionalism, delivering beyond our expectations."
              </p>
              <div className="testimonial-author">Michael Chen</div>
              <div className="testimonial-role">Marketing Head, Tech Innovations</div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "The motion graphics Piyush created for our campaign were exceptional. His ability to combine 2D and 3D elements is truly remarkable."
              </p>
              <div className="testimonial-author">Emma Rodriguez</div>
              <div className="testimonial-role">Brand Manager, Creative Agency</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}