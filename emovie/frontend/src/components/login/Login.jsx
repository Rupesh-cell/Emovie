import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const login = () => {
  return (
    <>
      <div className="full-login">
        <Container>
          <div className="login-nav d-flex">
            <h1>Emovie</h1>
            <Button>Login</Button>
          </div>
          <Row>
            <Col>
              <h1>Unlimited movies, TV shows, and more</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="reg d-flex">
                <Form>
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control className="ls" type="email" placeholder="Email Address" />
                  </Form.Group>
                </Form>
                <Button>Get Started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default login;
