import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const AboutUsHistorySection = () => {
  return (
    <Row
      className="align-items-center"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <Col xs={0} sm={0} md={1} lg={1}></Col>
      <Col md={10} lg={10}>
        <Row
          className="align-items-center"
          style={{ background: "grey", borderRadius: "8px", padding: "20px" }}
        >
          <Col md={4} lg={4}>
            <Image
              src="historyImg.png" // Replace with your actual image path
              fluid
              style={{
                borderRadius: "10px",
                width: "100%",
                maxHeight: "350px",
                objectFit: "cover",
              }}
            />
          </Col>

          {/* Text Content Column */}
          <Col md={8} lg={8} style={{ textAlign: "left", color: "white" }}>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginBottom: "20px",
              }}
            >
              History
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              It all started with Colonel Harland Sanders, the man who convinced
              the world by saying “We do chicken right!” Sanders took a great
              deal of time perfecting his iconic secret recipe of 11 herbs and
              spices, a legacy he’s brought to the world through KFC’s 10,000+
              restaurants. Starting from outside of his gas station in Korbin,
              Kentucky to being a globally recognized face, we owe our success
              to the Colonel’s hard work and passion for sharing his love for
              chicken with the world!
            </p>
          </Col>
        </Row>
      </Col>

      <Col md={1} lg={1}></Col>
    </Row>
  );
};

export default AboutUsHistorySection;
