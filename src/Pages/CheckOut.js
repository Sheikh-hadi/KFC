import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Radio } from "antd";

const CheckOut = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row justify={"center"}>
      <Form
        name="basic"
        labelAlign="left"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Col lg={24}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                hasFeedback
                label={<span style={{ color: "white" }}>First Name</span>}
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                hasFeedback
                label={<span style={{ color: "white" }}>Last Name</span>}
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ border: "2px solid black" }}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item
                hasFeedback
                label={<span style={{ color: "white" }}>email</span>}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            hasFeedback
            label={<span style={{ color: "white" }}>Address</span>}
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your Address!",
              },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Address2</span>}
            name="address2"
            rules={[
              {
                required: true,
                message: "Please input your Address2!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            label={<span style={{ color: "white" }}>Country</span>}
            name="country"
            rules={[
              {
                required: true,
                message: "Please input your Country!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            label={<span style={{ color: "white" }}>state</span>}
            name="state"
            rules={[
              {
                required: true,
                message: "Please input your State!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            label={<span style={{ color: "white" }}>zip</span>}
            name="zip"
            rules={[
              {
                required: true,
                message: "Please input your ZIP!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="remember"
            valuePropName={<span style={{ color: "white" }}>checked</span>}
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>
              Shipping address is the same as my billing address
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="imformation"
            valuePropName={<span style={{ color: "white" }}>imformation</span>}
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Save this information for next time</Checkbox>
          </Form.Item>

          <h1>Payment</h1>

          <Form.Item
            name="creditCard"
            valuePropName={<span style={{ color: "white" }}>creditCard</span>}
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Radio>Credit card</Radio>
          </Form.Item>

          <Form.Item
            hasFeedback
            name="debitCard"
            valuePropName="debitCard"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Radio>Debit card</Radio>
          </Form.Item>

          <Form.Item
            hasFeedback
            name="paypol"
            valuePropName="paypol"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Radio>Paypol</Radio>
          </Form.Item>

          <Form.Item
            hasFeedback
            label="Name on card"
            name="nameOnCard"
            rules={[
              {
                required: true,
                message: "Please input your Name on card!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="Credit card number"
            name="creditCardNumber"
            rules={[
              {
                required: true,
                message: "Please input your Credit card number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="Expiration"
            name="expiration"
            rules={[
              {
                required: true,
                message: "Please input your Expiration!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="CVV"
            name="cvv"
            rules={[
              {
                required: true,
                message: "Please input your CVV!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button block type="primary" htmlType="submit">
              Countine To Proceed
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </Row>
  );
};

export default CheckOut;
