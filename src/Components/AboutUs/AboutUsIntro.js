import React from "react";
import { Row, Col } from "react-bootstrap";

const AboutUsIntro = () => {
  return (
    <div
      fluid
      style={{
        backgroundColor: "black",
        padding: "20px 0",
        position: "relative",
      }}
    >
      <Row>
        <h2 style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
          About us
        </h2>
      </Row>

      <Row className="align-items-center">
        <Col md={1} lg={1}>
          <i
            className="fas fa-chevron-left"
            style={{
              border: "2px solid red",
              padding: "10px",
              color: "white",
              fontSize: "20px",
              float: "right",
              borderRadius: "100%",
            }}
          ></i>
        </Col>
        <Col md={10} lg={10}>
          <Row
            className="align-items-center"
            style={{ background: "grey", borderRadius: "8px", padding: "20px" }}
          >
            <Col md={8} lg={8} style={{ color: "white" }}>
              <p style={{ textAlign: "justify" }}>
                KFC entered Pakistan in 1997 and since then, it's been a journey
                full of excitement and Finger Lickin’ goodness! The first KFC
                restaurant opened in Pakistan in Gulshan Iqbal, Karachi and now
                our Finger Lickin’ Chicken is available in 37 cities with over
                128 restaurants! Being the most loved fast food chain in
                Pakistan, KFC leaves no stone unturned to provide its customers
                the most delicious chicken and an excellent dining experience.
              </p>
            </Col>
            <Col md={4} lg={4} style={{ color: "white" }}>
              <p
                style={{
                  padding: "10px",
                  backgroundColor: "#e4002b",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                  right: "25px", // Positioned close to the main paragraph box
                  width: "400px", // Adjusted width for better fit
                  maxWidth: "100%",
                }}
              >
                WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
                INGREDIENTS FROM TRUSTED SUPPLIERS
              </p>
            </Col>
          </Row>
        </Col>

        <Col md={1} lg={1}>
          <i
            className="fas fa-chevron-right"
            style={{
              border: "2px solid red",
              padding: "10px",
              color: "white",
              fontSize: "20px",
              float: "left",
              borderRadius: "100%",
            }}
          ></i>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsIntro;
