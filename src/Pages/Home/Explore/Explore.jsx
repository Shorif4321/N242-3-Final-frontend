import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import exploreImage from "../../../assets/images/education.jpg";
const Explore = () => {
  return (
    <div>
      <div className="md:mx-28 mx-3">
        <div className="hero py-5 md:py-20">
          <div className=" md:flex justify-between items-center gap-5 px-5">
            <div className="md:w-1/2 mb-5">
              <h1 className=" text-2xl md:text-4xl font-bold">
                Explore the world with F1 Visa
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <div className="md:w-1/2">
                <PrimaryButton>Get Started</PrimaryButton>
              </div>
            </div>

            <img src={exploreImage} className=" my-3 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
