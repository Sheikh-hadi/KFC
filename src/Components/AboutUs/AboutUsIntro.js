import React from 'react';
import { Row, Col } from "react-bootstrap";

const AboutUsIntro = () => {
  return (
    <div fluid style={{ backgroundColor: "black", padding: "20px 0" }}>
      <Row>
        <Col md={12}>
          <h2 style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
            About us
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <i
              className="fas fa-chevron-left"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </div>
        </Col>
        <Col
          md={5}
          style={{
            backgroundColor: "#2e2e2e",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <p>
            KFC entered Pakistan in 1997 and since then, it's been a journey
            full of excitement and Finger Lickin’ goodness! The first KFC
            restaurant opened in Pakistan in Gulshan Iqbal, Karachi and
            now our Finger Lickin’ Chicken is available in 37 cities with over
            128 restaurants! Being the most loved fast food chain in Pakistan,
            KFC leaves no stone unturned to provide its customers the most
            delicious chicken and an excellent dining experience.
          </p>

          <p style={{ 
            display:'flex',
            backgroundColor: "#e4002b", 
            color: "white", 
            padding: "20px", 
            borderRadius: "10px", 
            fontWeight: "bold", 
            textAlign: "center" 
          }}>
            WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL
            INGREDIENTS FROM TRUSTED SUPPLIERS
          </p>
        </Col>

        <Col
          md={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <i
              className="fas fa-chevron-right"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsIntro;
