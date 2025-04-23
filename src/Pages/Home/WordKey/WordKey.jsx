import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import wordkey from "../../../assets/images/men.png";
import world from "../../../assets/images/visa.jpg";
import { Link } from "react-router-dom";

const WordKey = () => {
  return (
    <div className="mt-32">
      <div
        style={{
          background: `url(${world})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundColor: "#00000080",
        }}
        className=""
      >
        <div className="hero text-white">
          <div className=" md:flex justify-between items-center gap-5 px-5">
            <img src={wordkey} className="-mt-20 rounded-lg" />

            <div className="md:w-1/2 mb-5">
              <h1 className=" text-2xl md:text-4xl font-bold">
                World key accros some with F1 Visa
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <div className="md:w-1/2">
                <Link to="/visa">
                  <PrimaryButton>Get Visa Appointment</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordKey;
