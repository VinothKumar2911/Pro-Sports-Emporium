// import React from "react";
import { MenuList, MenuList1,MenuList2, MenuList3 } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Video from "../assets/video1.mp4"; 
import Video2 from "../assets/video2.mp4"; 
import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import { FaSearch, FaShoppingBag } from "react-icons/fa";

import t2 from '../assets/t2.jpg';
import basbanner from '../assets/basbanner.jpg';



function Menu() {

  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   const placeholderText = "Enter your search";
  //   const placeholderLength = placeholderText.length;

  //   let animatedText = "";
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     animatedText += placeholderText[index];
  //     index++;

  //     if (index === placeholderLength) {
  //       index = 0;
  //       animatedText = "";
  //     }

  //     setSearchQuery(animatedText);
  //   }, 200);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
     {
      url:img2,
     },
     {
        
        url:img1,
     },
     {
        url: img3,
     },
     {
        url: img4,
     },
     {
        url: img5,
     },
  ];


  



 
  return (
   <>
    <div className="menu">

<SimpleImageSlider
            width={1900}
            height={800}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {1}
         />
         
      <h1 className="menuTitle">FootBall</h1>
      <p style={{fontSize:'18px'}}>
Football, also known as soccer in some regions, is a globally cherished sport that brings people together across nations and cultures.
 Played with a round ball on a rectangular field, it involves two teams of 11 players each aiming to score goals by maneuvering the ball
  with their feet or heads into the opponent's net. The game demands a combination of physical prowess, technical skills, and strategic thinking. 
  Football's rich history, renowned competitions, and iconic players have elevated it to the status of a global phenomenon, captivating the 
  hearts and minds of millions worldwide. Beyond its entertainment value, football fosters teamwork, discipline, and community spirit, 
  making it a cherished sport that unites people and inspires passion.</p>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              star={menuItem.star}
            />
          );
        })}
      </div>
      <video className="vid" autoPlay loop>
   <source src={Video} type="video/mp4" />
   </video>
   
      <div className="addi1">
      <h1 className="addih1">
      STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
      </h1>
    <p >
      Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. 
      Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring 
      the latest technologies, to up your performance. Beat your PB. adidas offers a home to the runner, the basketball player,
       the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads
        the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you 
        focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators.
         Improve their game. Their lives. And change the world.<br/><br/>adidas is about more than sportswear and workout clothes
         . We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match 
         their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. 
         And we think about the impact we have on our world.
    </p>
      <h1 className="addih11">
      WORKOUT CLOTHES, FOR ANY SPORT

      </h1>
    <p className="addi2">
    adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules 
    and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. 
    We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. 
    From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the 
    tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits.
     Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages.<br/><br/>
     Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic
      clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces,
       that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.
    </p>
    </div>
    
    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/in-ss23-bcci-test-jersey-reveal-hp-mh-image-d_tcm209-1029776.jpg"/>
    
   <h1 className="menuTitle">BasketBall</h1>
   <p style={{fontSize:'18px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>
   Basketball is a dynamic and fast-paced sport that captivates fans worldwide. 
   Played on a rectangular court, it involves two teams of five players each aiming to score points
    by shooting the ball into the opponent's basket while defending their own. Known for its high-flying dunks, 
    intricate dribbling, and strategic plays, basketball requires a blend of athleticism, skill, and teamwork. 
    The sport has a rich history and has produced legendary players such as Michael Jordan, Kobe Bryant,
     and LeBron James, who have become global icons. Basketball's popularity extends beyond the court, 
     influencing fashion, music, and culture. It promotes inclusivity, camaraderie, and perseverance,
      inspiring individuals of all ages to showcase their passion and talent on the hardwood. 
      Whether played professionally or recreationally, basketball continues to be a thrilling 
      and beloved sport that unites communities and fosters a sense of belonging.
   </p>
   <div className="menuList">
        {MenuList1.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              star={menuItem.star}
            />
          );
        })}
      </div>
    {/* <h1 className="menuTitle">Trekking</h1> */}
    <p></p>
    </div>
    <img src={basbanner}/>
    <p></p>
    <img src="https://contents.mediadecathlon.com/s995200/k$fa700ecfeb2b949c86ed24c13438c669/second%20life%20landing%20page%20web%2011.jpg?format=auto&quality=70&f=1920x0"/>
    <div className="menu">
    <video className="vid" autoPlay loop>
   <source src={Video2} type="video/mp4" />
   </video> 
    </div>
    <img src="https://contents.mediadecathlon.com/s1003799/k$d0d5d11445a4b696131ff94aecbcba09/second%20life%20landing%20page%20web%2018.jpg?format=auto&quality=70&f=1680x0"/>

    <div className="menu">
    
    <div className="menuList">
        {MenuList2.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              star={menuItem.star}
            />
          );
        })}
      </div>
    </div>

      <p></p>
      <div className="trekking">
        <h3 className="trekk">
        Trekking is an exhilarating outdoor activity that involves hiking through rugged terrains, 
        often in scenic and remote locations. It offers a unique opportunity to connect with nature,  
        challenge oneself physically and mentally, and explore breathtaking landscapes. Trekking allows 
         adventurers to embark on journeys that range from a few hours to several days, immersing 
          themselves in the beauty of mountains, forests, and valleys. Whether it's conquering a 
           challenging summit or meandering through serene trails, trekking provides a sense of adventure,  
           self-discovery, and a chance to experience the wonders of the natural world. It is a perfect way 
            to break away from the hustle and bustle of everyday life and find solace in the simplicity and  
            grandeur of the great outdoors.
        </h3>
      </div>
     

      <div className="menu">
    
    <div className="menuList">
        {MenuList3.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              star={menuItem.star}
            />
          );
        })}
      </div>
      

      </div>


    </>
  );
}

export default Menu;
