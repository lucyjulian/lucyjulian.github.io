import React from "react";
import { Container, Row, Col } from 'reactstrap';

const ContactLinks = () => (
  <div>
    <Row>
        <Col></Col>
        <Col>
            <p className="connectwithme">Find</p>
        </Col>
        <Col>
            <p className="connectwithme">me</p>
        </Col>
        <Col>
            <p className="connectwithme">on</p>
        </Col>
        <Col></Col>
    </Row>
    <Row>
        <Col></Col>
        <Col>
            <a href="https://stackoverflow.com/users/9323979/lucy?tab=profile">
                <i class="fab fa-stack-overflow fa-3x"></i>
            </a>
        </Col>
        <Col>
            <a href="https://www.linkedin.com/in/lucy-julian/">
                <i class="fab fa-linkedin fa-3x"></i>
            </a>
        </Col>
        <Col>
            <a href="https://github.com/lucyjulian">
                <i class="fab fa-github fa-3x"></i>
            </a>
        </Col>
        <Col></Col>
    </Row>
    
    
  </div>
);

export default ContactLinks;
