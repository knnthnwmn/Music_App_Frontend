import React from "react";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  Modal,
} from "react-bootstrap/";
import "./LoginPage.css";

const LoginPage = (props) => {
  const user = props.user;
  const handleSubmit = (event) => {
    const userData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    props.login(userData);
    event.preventDefault();
  };

  return (
    
      <Container className="bg">
        <Row className="center">
          <Col md={6} xs={12}>
            <p className="text-white">
              Have creative content? join us to make your sound come to life
              with Music Maker App
            </p>
          </Col>
          <Col md={6} xs={12}>
            <>
              <Modal.Dialog>
                <Modal.Body className="mt-5">
                  <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId="email"
                      label="Email"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="password"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control type="string" placeholder="Password" />
                    </FloatingLabel>

                    <div className="d-grid gap-2">
                      <Button variant="primary" size="lg" type="submit">
                        Log In
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="footer">
                  <p>Not a Music Maker user? Register</p>
                </Modal.Footer>
              </Modal.Dialog>
            </>
          </Col>
        </Row>
      </Container>

  );
};

export default LoginPage;
