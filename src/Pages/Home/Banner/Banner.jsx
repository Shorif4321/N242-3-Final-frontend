import React from "react";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero py-5 md:py-20">
        <div className=" md:flex justify-between items-center gap-5 px-5">
          <div className="md:w-1/2 mb-5">
            <h1 className="text-2xl md:text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img
            src={banner}
            className=" my-3 md:my-0 h-[200px] w-full object-cover md:h-full md:w-2/6 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
