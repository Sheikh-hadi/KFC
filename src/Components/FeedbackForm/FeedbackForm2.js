import React from "react";
import { Row, Col } from "react-bootstrap";

const FeedbackForm2 = () => {
  return (
    <div className="container">
      <Row>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Have some Feedback to share
        </h1>
        <h2 style={{ color: "#ea002a", textAlign: "center" }}>
          Well, you’ve come to the right place!
        </h2>
        <p style={{ color: "white", textAlign: "center", padding: "0px 15%" }}>
          Fill in the sections below and we'll be in touch soon, or if you want
          to contact a specific store, visit our locations page for store
          contact details. * indicates a required answer
        </p>
      </Row>
      <Row className="mt-4">
        <Col
          md={5}
          className="mx-auto"
          style={{
            backgroundColor: "#2b2b2b",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid white",
          }}
        >
          <h4>Contact Details</h4>
          <Row>
            <Col md={6}>
              <input
                type="text"
                value="FullName"
                className="form-control"
                placeholder="Full Name *"
                style={{ height: "50px" }}
              />
            </Col>

            <Col md={6} className="mb-3">
              <div className="input-group">
                <span className="input-group-text">+92</span>
                <input
                  type="text"
                  value="PhoneNumber"
                  className="form-control"
                  placeholder="Phone Number (3XXXXXXXXX) *"
                  style={{ height: "50px" }}
                />
              </div>
            </Col>
          </Row>

          <Col className="mb-3">
            <input
              type="text"
              className="form-control"
              value="Email"
              placeholder="EMAIL *"
              style={{ height: "50px" }}
            />
          </Col>

          <Col className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="ORDER ID *"
              value="OrderId"
              style={{ height: "50px" }}
            />
          </Col>

          <div>
            <select
              className="form-select"
              style={{
                height: "50px",
                padding: "10px",
                fontSize: "16px",
                color: "#888",
              }}
            >
              <option>Feedback Channel *</option>
            </select>
          </div>
        </Col>

        <Col
          md={5}
          className="mx-auto"
          style={{
            backgroundColor: "#2b2b2b",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid white",
            marginBottom: "20px",
          }}
        >
          <h4>About Your Visit</h4>
          <Row>
            <Col md={6} className="mb-3">
              <label>Select Store</label>
              <select className="form-select">
                <option>Select Store</option>
              </select>
            </Col>
            <Col md={6} className="mb-4">
              <label>Date *</label>
              <input type="date" className="form-control" />
            </Col>
          </Row>

          <div className="mb-4">
            <select className="form-select">
              <option>FEEDBACK TYPE *</option>
            </select>
          </div>
          <div className="mb-2">
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackForm2;
