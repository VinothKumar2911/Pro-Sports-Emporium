import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/back.jpg";
import "../styles/Home.css";
import Imagecarousel from '../slider/Imagecarousel';
import poster from '../assets/poster.jpg';

function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${back})` }}>
      <div className="headerContainer">
        <h1 style={{ color: 'black', fontWeight:'10px' }}> ProSports Emporium </h1>
        <p style={{ color: 'black', fontWeight:'10px' }}> "Embrace the Journey, Celebrate the Victory" </p>
        <Link to="/menu">
          <button> Shop Now </button>
        </Link>
      </div>
    </div>
    <Imagecarousel />
    <div className="text">
      <img className="img1" src={poster}/>
      <h1 className="text1"></h1>
    </div>
    <div className="item">
      <img  src="https://media.giphy.com/media/3o7TKQVvClrMdt7mSs/giphy.gif" />
      <img className="gif" src="https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif" />
      <img  src="https://media.giphy.com/media/3o7TKxJRKk8uPOOdgY/giphy.gif" />

    </div>
    
    <h2 style={{ fontSize:'50px',marginLeft: '50px'}}>Our Products:</h2>
    <p style={{ marginLeft: '50px'}}>
    Badminton : Badminton Racket | Shuttle cock | Badminton shoes | Non Marking shoes | Badminton Tshirts | Badminton shorts | Racket cover | Badminton grip | Badminton net | Racket string |<br/>
Tennis : Tennis Clothing | Socks | Tennis Rackets | Tennis Balls | Tennis Shoes | Tennis bag | Tennis Accessories | Beach tennis | Men Tennis apparels | Women Tennis Apparels |<br/>
Table Tennis : Table Tennis Tables | TT Rackets | TT Balls | TT Nets | TT Racket covers | Table Tennis accessories | Table Tennis clothing | Table Tennis shoes | Table Tennis socks | TT collections |<br/>
Squash : Squash Rackets | Squash Balls | Squash Kit bags | Squash Accessories | Squash clothing | Squash shoes | Squash collections |<br/>
Hiking : Fleece | Sweaters | Rain Jacket | Hiking shoes | Sandals | Socks | Backpack | Hiking Backpack | Sunglasses | Bottles |<br/>
Trekking : Trekking Boots | Trekking Backpack | Travel backpack | Winter Jackets | Down Jackets | Trekking Poles | Travel Shirts | Shorts | Trousers | Headlamps |<br/>
Cardio : Fitness Equipment | Treadmills | Cross Trainers | Elliptical | Exercise bikes | Spin Bikes | Rowing Machine | Steppers | Trampoline | Cardio Apparel |<br/>
Gym Track pants : Gym Shorts | Gym Track pants | Gym Shorts | Men Tracksuits | Women Gym suits | Sports Bra | Gym Tops | Women fitness jacket |<br/>
Camping : Tents | Chairs | Tables | Furnitures | Sleeping Bags | Mattresses | Camping Accessories | Cooksets |<br/>
Skiing : Men Thermals | Women Thermals | Beanies | Gloves | Winter Accessories | Warmers | Junior Jackets | Junior Beanies | Ski jackets |<br/>
Wildlife : Camo Tshirts | Camo Trousers | Camo Bermudas | Camo Caps | Gum Boots | Binoculars | Knifes | Shelter | Umbrellas | Pouches |<br/>
Cycle : Bike Racks | Cycles | Mountain Bikes | Hybrid Cycles | Road Bikes | Kids Cycle | Cycle Accessories |<br/>
Road Cycle : Bike Racks | Cycles | Mountain Bikes | Hybrid Cycles | Road Bikes | Kids Cycle | Cycle Accessories |<br/>
MTB Cycle : Bike Racks | Cycles | Mountain Bikes | Hybrid Cycles | Road Bikes | Kids Cycle | Cycle Accessories |<br/>
Fishing : Fishing Rods | Fishing Reels | Hooks | Lures | Fishing lines | Fishing Accessories | Fishing Camp Furnitures | Fishing ponchos | Fishing GIlet |<br/>
Horse Riding : Horse riding helmets | Breeches | Horse riding boots | Horse riding gloves | Leather saddle | Cloth saddle |<br/>
Swimming : Swimming costumes | Swimming cap | Swimming goggles | Towels | Bathrobes | Flipflops | Swimming equipments | Aqua learning | Buoyancy aids |<br/>
Football : Football | Football shoes | Football bag | Football Jersey | Football shorts | Football Socks | Goal Posts | Training accessories | Goalkeeper Kit | Football Equipment |<br/>
Cricket : Tennis Cricket bat | English Willow Bat | Kids cricket bat | Cricket ball | Cricket accessories | Adult cricket shoes | Kids cricket shoes | Cricket track pants | Cricket jersey |<br/>
Surfing : Board shorts | Frisbee | Surfboards | Wetsuits | Bodyboards | Kites | Snorkelling | Scuba diving | Kayaks | Standup paddle |<br/>
Running : Running shoes | Jogging shoes | Trail Running shoes | Running Tshirts | Running shorts | Running Tights | Running Accessories | Sports watch | Weighing scale | Earphones |<br/>
Golf : Golf clubs | Golf trolleys | Golf balls | Golf accessories | Polo Tshirts | Golf Trouser | Golf shoes | Golf caps | Golf shorts |<br/>
Cardio : Fitness Equipment | Treadmills | Cross Trainers | Elliptical | Exercise bikes | Spin Bikes | Rowing Machine | Steppers | Trampoline | Cardio Apparel |<br/>
Skateboard : Skateboard | Long boards | Waveboard | Skateboard shoes | Skateboard accessories | Kids scooters | Adult scooters | Spares | Scooter helmets |<br/>
Roller skating : Quad Roller skates | Inline skates | Kids Inline skates | Adult Inline skates | Skating Helmets | Skating guards | Skating bags | Skating spares accessories |<br/>
About us : Now enjoy and experience the entire offering of Decathlon India’s 70+ sports and over 5,000 products by using the Decathlon mobile application! |<br/>
Choose from an array of gear and equipment that's designed to get you play-ready. :  |<br/>
Winter Collection : We provide a wide range of Winter Jackets, Winter shoes, Sweaters, Fleece, Pullover, Down jacket, Beanies, Gloves, Snow jacket, Arctic winter jacket, Woolen socks and with more winter categories. |<br/>
The Range : Whatever your choice of sport, the popular ones like football, running, cycling or you're looking for something niche like fishing, archery or horse riding, we've got you covered head to toe with the right gear that fits just fine and every piece of equipment that you may need to practice. |<br/>
Innovation : Innovation is at the heart of what we do. We “Innovate smart” because we want to make sports easier for people who use our products. The 2-second pop-up tent that makes camping easier, the roll-on net that encourages playing table tennis on any flat surface or even the Kipsta Cage which can turn any ground into a football field are some of our innovative examples. Discover many such products on the app. |<br/>
Scan and Go available in selective stores : For a smooth, quick and easy checkout process with no assistance at our Decathlon Stores, you can now use the App. Simply scan a product you want to buy, order or both, pay for it using UPI, NetBanking, EMI, debit/credit card, and leave the store without any waiting at the checkout counter. |<br/>
    </p>
 
 
 
  
  


    </>
  );
}

export default Home;
