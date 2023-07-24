import React from "react";
import  { useState } from "react";

import pro from "../assets/pro.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import img11 from '../assets/img11.jpg';

import "../styles/About.css";
function About() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
     {
      url:("https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/3d7f5d02-bf49-403a-a77f-04fc8680c54b/nike-just-do-it.jpg"),
     },
     {
        
        url:img11,
     },
   
  ];
  return (
    <>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${pro})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
    <p style={{fontSize:"20px"}}>
        Sports play a significant role in human society, providing a platform for physical activity, competition, and entertainment. Sports encompass a wide range of activities, including team sports like football, basketball, and soccer, as well as individual sports like tennis, swimming, and athletics. They have been an integral part of human culture for centuries and continue to be a source of inspiration and excitement for people of all ages.

Engaging in sports offers numerous benefits to individuals. Firstly, sports promote physical fitness and overall well-being. Regular participation in sports activities helps maintain a healthy weight, improve cardiovascular health, enhance muscular strength and endurance, and increase flexibility. Moreover, sports contribute to mental and emotional well-being by reducing stress, improving mood, and boosting self-confidence.<br/><br/>

Beyond individual benefits, sports foster teamwork, discipline, and sportsmanship. Team sports, in particular, promote cooperation, communication, and mutual respect among teammates. Athletes learn the value of setting goals, working together towards a common objective, and handling both victories and defeats gracefully. These qualities extend beyond the sports arena and positively impact various aspects of life, such as education, career, and relationships.

Sports also serve as a means of cultural exchange and unity.<br/><br/> International sporting events like the Olympics and the FIFA World Cup bring nations together, transcending cultural and political differences. They promote mutual understanding, respect, and friendship among diverse populations. Sports have the power to bridge gaps, break down barriers, and promote peace and harmony.

In conclusion, sports are not just games; they are a powerful force that influences physical, mental, and social aspects of human life. Whether as a participant or a spectator, engaging in sports provides countless benefits and enriches our lives in numerous ways. The universal appeal of sports demonstrates their enduring importance and their ability to bring people together, creating a shared passion and sense of belonging
        </p>
      </div>

    </div>
    <h1  style={{fontSize:"65px",marginTop:"220px",marginLeft:"860px"}}> </h1>
    <div className="rem">
            <h1 className="rem1">JOIN THE PUMA  AND GET 40% OFF</h1>
     </div>
      <img  src="https://cdn.sanity.io/images/qa41whrn/prod/b13aeb63c9cc268a3c3dc56f37199979364287e9-2880x1040.jpg?w=2160&q=80&auto=format" />
      <SimpleImageSlider
            width={2000}
            height={500}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {1}
         />
    <h1  style={{fontSize:"65px",marginTop:"120px",marginLeft:"600px",fontWeight:"80%"}}>NIKE LIVER POOL FC</h1>
    <h1  style={{fontSize:"55px",marginTop:"0px",marginLeft:"720px"}}> 2023/2024 AWAY</h1>
    <p  style={{fontSize:"20px",marginTop:"0px",marginLeft:"790px"}}> Go green for the return of classic</p>
    
      <img  src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/6b58413e-41f2-4b99-bca2-d355ffec431e/nike-just-do-it.jpg" />
      <p></p>
    
     <p></p>
     <div className="youtube">
     <iframe width="1536" height="657" src="https://www.youtube.com/embed/XYiLxZTq1pY" 
     title="Let There Be Sport ft. Virat Kohli, Mary Kom, Sunil Chhetri | PUMA" 
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
     encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowfullscreen></iframe>
      </div>
    </>
  );
}

export default About;
