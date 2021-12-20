import React from "react";
import { Container, Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap/";
import "./GatePage.css";

const GatePage = (props) => {
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
    <Container className="gatePageBackground">
      <Row className="center" >
      <Col md={6} xs={12}>
        <img
          className="logo"
          src="/assets/img/logo.png"
          alt="Christmas Stories"
        />
        <p className="text-white">
          Join us for the holidays, enjoy playing games, discussing recipes and
          celebrating holiday traditions
        </p>
      </Col>
      <Col md={6} xs={12}>
        <>
          <Modal.Dialog>
            <Modal.Body className="mt-5">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="password" label="Password" className="mb-3">
                <Form.Control type="string" placeholder="Password" />
              </FloatingLabel>

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Log In
                </Button>
              </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-grid gap-2 mb-5">
                <p>Not a ChristmasStories user? Register</p>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      </Col>
    </Row>

    </Container>
    
  );
};

export default GatePage;