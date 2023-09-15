import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Buttom = () => {
  return (
    <>
      <div className="main-cont">
        <Container>
          <Row>
            <Col>
              <h1>Watch everywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </Col>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1613280194169-6bb2f32a6bfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHR2JTIwd2F0Y2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="jpt"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Buttom;
