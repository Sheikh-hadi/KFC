import React, { useState } from "react";

const Footer = () => {
  const [hoveredText, setHoveredText] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const footerStyle = {
    backgroundColor: "#1c1c1c",
    color: "#fff",
    padding: "30px 20px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginBottom: "20px",
  };

  const titleStyle = (isHovered) => ({
    color: isHovered ? "#ea002a" : "white",
  });

  const spanStyle = (isHovered) => ({
    color: isHovered ? "#ea002a" : "white",
  });

  const iconCircleStyle = {
    color: "#fff",
    fontSize: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px",
  };

  const storeIconStyle = (isHovered) => ({
    width: "130px",
    margin: "0 10px",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  });

  const bottomTextStyle = {
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #333",
    paddingTop: "10px",
    fontSize: "23px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "600px",
  };

  return (
    <footer style={footerStyle}>
      <div style={columnStyle}>
        <span
          style={titleStyle(hoveredText === "about")}
          onMouseEnter={() => setHoveredText("about")}
          onMouseLeave={() => setHoveredText(null)}
        >
          About Us
        </span>
        <span
          style={spanStyle(hoveredText === "mitao")}
          onMouseEnter={() => setHoveredText("mitao")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Mitao Bhook
        </span>
        <span
          style={spanStyle(hoveredText === "scholarship")}
          onMouseEnter={() => setHoveredText("scholarship")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Mitao Bhook - Scholarship
        </span>
        <span
          style={spanStyle(hoveredText === "privacy")}
          onMouseEnter={() => setHoveredText("privacy")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Privacy Policy
        </span>
        <span
          style={spanStyle(hoveredText === "careers")}
          onMouseEnter={() => setHoveredText("careers")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Careers
        </span>
      </div>
      <div style={columnStyle}>
        <span
          style={titleStyle(hoveredText === "contact")}
          onMouseEnter={() => setHoveredText("contact")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Contact Us
        </span>
        <span
          style={spanStyle(hoveredText === "store")}
          onMouseEnter={() => setHoveredText("store")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Store Locator
        </span>
        <span
          style={spanStyle(hoveredText === "track")}
          onMouseEnter={() => setHoveredText("track")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Track Order
        </span>

        <span
          style={spanStyle(hoveredText === "terms")}
          onMouseEnter={() => setHoveredText("terms")}
          onMouseLeave={() => setHoveredText(null)}
        >
          Terms & Conditions
        </span>
      </div>

      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ ...iconCircleStyle, backgroundColor: "#ff0000" }}>
            <i className="fab fa-youtube"></i>
          </span>
          <span style={{ ...iconCircleStyle, backgroundColor: "black" }}>
            <i className="fab fa-instagram"></i>
          </span>
          <span style={{ ...iconCircleStyle, backgroundColor: "#1877f2" }}>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href="https://play.google.com/store/apps/details?id=io.bramerz.kfc&hl=en&gl=US" // Replace with the actual KFC Google Play Store link
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="GOOGLE.png"
            alt="Google Play"
            style={storeIconStyle(hoveredImage === "google")}
            onMouseEnter={() => setHoveredImage("google")}
            onMouseLeave={() => setHoveredImage(null)}
          />
        </a>
        <a 
          href="https://apps.apple.com/us/app/kfc-pakistan/id1480491422" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="app.png"
            alt="App Store"
            style={storeIconStyle(hoveredImage === "apple")}
            onMouseEnter={() => setHoveredImage("apple")}
            onMouseLeave={() => setHoveredImage(null)}
          />
        </a>
      </div>

      <div style={bottomTextStyle}>
        <p>© 2024 KFC. All rights reserved</p>
        <p style={{ fontSize: "19px", color: "#ea002a" }}>
          Powered by{" "}
          <a
            href="https://simplextechnologysolutions.com"
            style={{ color: "#ea002a", textDecoration: "underline" }}
          >
            SimpleX Technology Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
