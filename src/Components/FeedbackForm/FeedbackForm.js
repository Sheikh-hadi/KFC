import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [focusedInput, setFocusedInput] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    orderId: "",
    feedbackChannel: "Dine In", // Default value
    selectStore: "Lahore",      // Default value
    date: "",
    feedbackType: "Compliment", // Default value
    feedback: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Data:", formData); // Log form data to console
    // Here you can also add code to send form data to a server or perform other actions
  };

  const style = {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    borderBottom:
      focusedInput === "fullName" ? "2px solid #ea002a" : "1px solid #fff",
    padding: "0.5rem 1rem",
    width: "100%",
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row className="text-center mt-5 mb-4">
        <Col>
          <h1 style={{ color: "white", fontSize: "30px" }}>
            Have some Feedback to share
          </h1>
          <h2 style={{ color: "#ea002a", fontSize: "25px" }}>
            Well, you’ve come to the right place!
          </h2>
          <p style={{ color: "white", padding: "0 27%" }}>
            Fill in the sections below and we'll be in touch soon, or if you
            want to contact a specific store, visit our locations page for store
            contact details. * indicates a required answer
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={5} className="mb-3">
          <div
            style={{
              backgroundColor: "#1C1C1C",
              borderRadius: "8px",
              padding: "1.5rem",
              height: "450px",
            }}
          >
            <h4
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Contact Details
            </h4>
            <Row className="mb-3">
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Name:"
                  className="form-control"
                  style={style}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("fullName")}
                  onBlur={() => setFocusedInput("")}
                />
              </Col>
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  PHONE NUMBER *
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number:"
                    className="form-control"
                    style={{
                      backgroundColor: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      borderBottom:
                        focusedInput === "phoneNumber"
                          ? "2px solid #ea002a"
                          : "1px solid #fff",
                      padding: "0.5rem 1rem",
                    }}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("phoneNumber")}
                    onBlur={() => setFocusedInput("")}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email:"
                  className="form-control"
                  style={style}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput("")}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  ORDER ID *
                </label>
                <input
                  type="text"
                  name="orderId"
                  placeholder="Enter Your order:"
                  className="form-control"
                  style={style}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("orderId")}
                  onBlur={() => setFocusedInput("")}
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  FEEDBACK CHANNEL *
                </label>
                <select
                  name="feedbackChannel"
                  className="form-select"
                  style={style}
                  value={formData.feedbackChannel} // Set default value
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("feedbackChannel")}
                  onBlur={() => setFocusedInput("")}
                >
                  <option value="Dine In">Dine In</option>
                  <option value="Take away">Take away</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Pick Up">Pick Up</option>
                </select>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6} lg={5}>
          <div
            style={{
              backgroundColor: "#1C1C1C",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <h4
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              About Your Visit
            </h4>
            <Row className="mb-3">
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  SELECT STORE
                </label>
                <select
                  name="selectStore"
                  className="form-select"
                  style={style}
                  value={formData.selectStore} // Set default value
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("selectStore")}
                  onBlur={() => setFocusedInput("")}
                >
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Multan">Multan</option>
                </select>
              </Col>
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  DATE *
                </label>
                <div className="input-group">
                  <input
                    type="date"
                    name="date"
                    placeholder="DD MM YYYY"
                    style={style}
                    onFocus={() => setFocusedInput("date")}
                    onBlur={() => setFocusedInput("")}
                  />
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#ff0000",
                      fontSize: "1.5rem",
                      pointerEvents: "none",
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  FEEDBACK TYPE
                </label>
                <select
                  name="feedbackType"
                  className="form-select"
                  style={style}
                  value={formData.feedbackType} // Set default value
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("feedbackType")}
                  onBlur={() => setFocusedInput("")}
                >
                  <option value="Compliment">Compliment</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Suggestion">Suggestion</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  FEEDBACK *
                </label>
                <textarea
                  name="feedback"
                  className="form-control"
                  rows="6"
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    borderBottom:
                      focusedInput === "feedback"
                        ? "2px solid #ea002a"
                        : "1px solid #fff",
                    padding: "0.5rem 1rem",
                  }}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("feedback")}
                  onBlur={() => setFocusedInput("")}
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Row className="justify-content-center mt-3 mb-5">
          <Col xs="auto">
            <button
              type="submit"
              className="btn btn-danger"
              style={{ padding: "0.5rem 2rem" }}
            >
              SUBMIT
            </button>
          </Col>
        </Row>
      </Row>
    </form>
  );
};

export default FeedbackForm;
