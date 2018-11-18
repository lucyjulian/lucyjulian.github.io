import React from "react";
import { Card , Container, CardText, CardTitle } from 'reactstrap';
import pic from '../../fotos/bluelayersjulians.jpeg';

const Home = () => (
  <div>
    <p className="pagetitle">About Me</p>
    
    <Container>
      <Card body inverse style={{ backgroundColor: '#212d2c', borderColor: '#818cb5' }}>
        <CardTitle></CardTitle>
        <CardText>
          <img width="25%" src={pic} alt="Card image cap" />
          <div className="boutmeblurb">
            <p className="boutmeparagraph">
              I am a full-stack developer. This year, I completed a six-month coding bootcamp at the University of North Carolina during which time I learned HTML, CSS, Node, Javascript, JQuery, AJAX & API’s, Yarn, Mocha, Chai, and my personal favorite, React.js.
            </p>
            <p className="boutmeparagraph">
              Recently, I worked alongside an installation artist to create unique multimedia experiences throughout New York City and assisted an experiential marketing agency with outreach and social media management projects. I also have years of experience supporting my family’s fashion business both on the design/wholesale side and in buying/retail.
            </p>
            <p className="boutmeparagraph">
              As an undergraduate at UNC Chapel Hill, I explored the humanities/language through Spanish Literature and kept up with my science/math through my studies in Environment & Ecology. While abroad in Thailand, I took graduate level coursework and completed a capstone project using Life Cycle Analysis (LCA). While this thinking is typically applied to the environmental sciences field to study the whole environmental impact of a product or process, it has parables in many fields as a thought process for assessing a project, process, or product in its entirety, as opposed to measuring it based on the immediate effects.
            </p>
            <p className="boutmeparagraph">
              I love running through the woods, taking pictures of trees, hiking mountains whenever I get the chance, exploring the world and its many flavors, riding horses, admiring farm animals, and watching people’s faces light up with joy when they see my unbelievably adorable tiny dog.
            </p>
          </div>
        </CardText>
      </Card>
    </Container>
    <br></br>

  </div>
);

export default Home;
