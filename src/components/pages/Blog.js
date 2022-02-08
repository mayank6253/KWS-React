import React from "react";
import Bottom from "../Bottom";
import Footer from "../Footer";

import "./Blog.css";

function Blog() {
  return (
    <>
      <div className="section">
        <h1 className="problem">HOUSTON WE HAVE A PROBLEM</h1>
        <h1 className="lost">WE ARE LOST IN DIGITAL SPACE</h1>
        <h1 className="error">404</h1>
        <button className="home-page">HOME PAGE</button>
        <div className="video-container">
          <video src="../videos/space video.mp4" autoPlay loop muted />
        </div>
      </div>

      <Bottom />
      <Footer />
    </>
  );
}

export default Blog;
