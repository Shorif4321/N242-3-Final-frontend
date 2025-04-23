import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import InfoCards from "./InfoCards/InfoCards";
import Explore from "./Explore/Explore";
import WordKey from "./WordKey/WordKey";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Explore></Explore>
      <WordKey></WordKey>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
