import React from "react";
import picone from '../../fotos/81818one.jpg';
import pictwo from '../../fotos/81818two.jpg';
import picthree from '../../fotos/unspoken1.jpeg';
import picfour from '../../fotos/unspoken2.jpeg';
import picfive from '../../fotos/unspoken3.jpeg';
const About = () => (
  <div>
    <p className="pagetitle">Experience</p>
    
    <p className="jakelink">
      Some of the projects I worked on alongside <a className="jakeslink" href="https://jacobmfisher.studio/" target="_blank">Jacob M Fisher</a>
    </p>

    

    <img width="640" src={picone} alt="Card image cap" />
    <img width="640" src={pictwo} alt="Card image cap" />
    <img width="640" src={picthree} alt="Card image cap" />
    <img width="640" src={picfour} alt="Card image cap" />
    <img width="640" src={picfive} alt="Card image cap" />

    <iframe src="https://player.vimeo.com/video/265263161" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    {/* <p><a href="https://vimeo.com/265263161">When We Met</a> from <a href="https://vimeo.com/user22882392">jacobmfisher.studio</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}

  </div>
);

export default About;
