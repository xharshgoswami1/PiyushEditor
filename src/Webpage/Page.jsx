import React from "react"
import "./Page.css"
import profilePic from '../assets/profile-pic.png'

export default function Home() {
  return (
    <main className="main-bg">
      {/* NAVIGATION */}
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src={profilePic} alt="Piyush" className="profile-pic" />
          <span>PIYUSH</span>
        </div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a
            href="https://wa.me/918168000254?text=Hi%20Piyush"
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div>
          <iframe
            src="https://player.vimeo.com/video/1106027761?background=1&autoplay=1&loop=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Project 3"
          ></iframe>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,0,0,0.35)",
              pointerEvents: "none",
              padding: "32px"
            }}
          >
            <h1 className="hero-title">PIYUSH</h1>
            <p className="hero-desc">
              Hi! I&apos;m Piyush, a <b>Motion Designer</b> specialized in combining <b>2D and 3D</b> to explore new ways of storytelling.
            </p>
          </div>
        </div>
        <span className="hero-scroll">Scroll Down For More</span>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="work-section">
        <h2 className="section-title">Work</h2>
        <div className="work-grid">
          {/* Project 4 */}
          <div className="work-card reel">
            <div className="work-video">
              <iframe
                src="https://player.vimeo.com/video/1106029301"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Premium Edit"
                className="reel-iframe"
              ></iframe>
            </div>
            <div className="work-info">
              <div className="work-title">Premium Edit</div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="work-card" style={{ flexDirection: "column" }}>
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

          {/* Project 2 */}
          <div className="work-card reel">
            <div className="work-video">
              <iframe
                src="https://player.vimeo.com/video/1106026089"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Product Advt."
                className="reel-iframe"
              ></iframe>
            </div>
            <div className="work-info">
              <div className="work-title">Product Advt.</div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="work-card" style={{ flexDirection: "column" }}>
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

          {/* Project 5 & 6 in one row */}
          <div className="work-card" style={{ flexDirection: "row", gap: "40px" }}>
            <div style={{ flex: 1 }}>
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
            <div style={{ flex: 1 }}>
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

      {/* FOOTER */}
      <footer className="footer">
        <div>Designed & animated by PIYUSH</div>
        <div className="footer-contact">Contact: piyush@email.com | Instagram | LinkedIn</div>
        <div>Designed & animated by PIYUSH</div>
        <div className="footer-contact">Contact: piyush@email.com | Instagram | LinkedIn</div>
      </footer>
    </main>)
}