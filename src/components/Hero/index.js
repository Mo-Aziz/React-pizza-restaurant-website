import React,{useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElments";

const Hero = () => {

  const [isOpen, setIsOpen]= useState(false); 

  const toggle = () =>{

    setIsOpen(!isOpen);
  }
  
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar  isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1> The greatest Pizza you can Buy</HeroH1>
          <HeroP> Ready in 10 minutes</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
