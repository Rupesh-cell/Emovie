import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../../Scss/login.scss";

const login = () => {
  return (
    <>
      <div className="full-login">
        <Container>
          <div className="login-nav d-flex">
            <h1>Emovie</h1>
            <Button className="button" variant="primary" size="sm">
              Sign In
            </Button>
          </div>

          <div className="coll">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p className="b">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="reg d-flex">
              <Form>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    className="ls"
                    type="email"
                    placeholder="Email Address"
                  />
                </Form.Group>
              </Form>
              <Button className="btt">Get Started</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default login;
