import React from "react";
import { factItem, Heading } from "../../../Model/factItem"; // Import the array from the Model folder
import { Row, Col } from "react-bootstrap";

// Rename the component to avoid conflicts
const FactSection = () => (
  <div style={{ backgroundColor: "#1C1C1C", padding: "2rem 0" }}>
    <div className="container">
      <h2 className="text-left text-white mb-4">{Heading}</h2>
      <Row>
        {factItem.map((fact, index) => (
          <Col xs={24} sm={24} md={3} lg={3} xl={3} key={index} className="text-center mb-4">
            <i
              className={`${fact.icon}`}
              style={{ fontSize: "4rem", color: "red" }}
            ></i>
            <h3 style={{ fontSize: "2rem" }} className="text-white mt-2">
              {fact.title}
            </h3>
            <p className="text-white">{fact.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default FactSection;
