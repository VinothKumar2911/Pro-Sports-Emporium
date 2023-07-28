

import React, { useEffect, useRef } from 'react';
import Mycard from './Mycard.js';
import './Imagecarousel.css';

const Imagecarousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const btnpressprev = () => {
    let box = carouselRef.current;
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  
  const btnpressnext = () => {
    let box = carouselRef.current;
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      let box = carouselRef.current;
      let width = box.clientWidth;
      const scrollLeft = box.scrollLeft + width;
      const maxScrollLeft = box.scrollWidth - box.clientWidth;

      if (scrollLeft >= maxScrollLeft) {
        box.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        box.scrollLeft = scrollLeft;
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}><p>▪️</p></button>
      <button className="next-btn" onClick={btnpressnext}><p>▪️</p></button>

      <div className="product-container" ref={carouselRef}>
      <Mycard {...{cardno:1, src:"https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />
                <Mycard {...{cardno:2,src:"https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg"}} />
                <Mycard {...{cardno:3,src:"https://images.pexels.com/photos/1443527/pexels-photo-1443527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />               
                <Mycard {...{cardno:4,src:"https://images.pexels.com/photos/9559761/pexels-photo-9559761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />               
                <Mycard {...{cardno:5,src:"https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />               
                <Mycard {...{cardno:6,src:"https://images.pexels.com/photos/159548/football-american-football-ball-carrier-runner-159548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} />               
                <Mycard {...{cardno:7,src:"https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&w=1600"}} />               
                <Mycard {...{cardno:8,src:"https://images.pexels.com/photos/3541810/pexels-photo-3541810.jpeg?auto=compress&cs=tinysrgb&w=1600"}} />               
                <Mycard {...{cardno:9,src:"https://images.pexels.com/photos/261060/pexels-photo-261060.jpeg?auto=compress&cs=tinysrgb&w=1600"}} />               
                <Mycard {...{cardno:10,src:"https://images.pexels.com/photos/14846793/pexels-photo-14846793.jpeg?auto=compress&cs=tinysrgb&w=1600"}} />               
                <Mycard {...{cardno:11,src:"https://images.pexels.com/photos/8038021/pexels-photo-8038021.jpeg?auto=compress&cs=tinysrgb&w=1600"}} />                 
                <Mycard {...{cardno:12,src:"https://images.pexels.com/photos/6620743/pexels-photo-6620743.jpeg?auto=compress&cs=tinysrgb&w=1600"}} /> 
      </div>
    </div>
  );
};

export default Imagecarousel;
