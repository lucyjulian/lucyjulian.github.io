import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Portfolio = () => (
  <div>
    <p className="pagetitle">Past Projects</p>
    <Container className="portfolioprojectscontainer">
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">Buzz'd Barbershop Booking</CardTitle>
          <CardText className="projectText">A group project using Sequelize and a MySQL database to store booking times and client info.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://fathomless-depths-99227.herokuapp.com/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/jmyager/Buzz-d" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">Tropical Hangman</CardTitle>
          <CardText className="projectText">A fruit themed version of the classic game we all know and love.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://lucyjulian.github.io/Hangman-Game/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/lucyjulian/Hangman-Game" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">Frog Facts</CardTitle>
          <CardText className="projectText">Test your knowledge and learn a few new facts in this timed trivia game.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://lucyjulian.github.io/TriviaGame/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/lucyjulian/TriviaGame" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">Papaya Clicks</CardTitle>
          <CardText className="projectText">My first React App! This is a papaya themed game built to test your memory.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://warm-refuge-46378.herokuapp.com/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/lucyjulian/clicky" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">Reset Your Residence</CardTitle>
          <CardText className="projectText">A group project using API's to allow users to search and explore a new city.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://lucyjulian.github.io/Reset-My-Residence/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/lucyjulian/Reset-My-Residence" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">GIF Generator</CardTitle>
          <CardText className="projectText">Load, pause, and play GIFs at the click of a button.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://lucyjulian.github.io/giphy_ajax/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/lucyjulian/giphy_ajax" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
      <Row>
        <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
          <CardTitle className="projectTitle">Crystals Collector</CardTitle>
          <CardText className="projectText">Test your working memory with this game.</CardText>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button href="https://lucyjulian.github.io/week-4-game/" target="_blank" className="Button">Demo</Button>
            </Col>
            <Col>
              <Button href="https://github.com/lucyjulian/week-4-game" target="_blank" className="Button">Github</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
      <br></br>
    </Container>
  </div>
);

export default Portfolio;
