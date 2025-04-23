import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { name, img, description } = data;
  return (
    <div className="p-5 shadow-sm bg-gradient-to-r from-primary to-secondary text-white">
      <img className="h-64 rounded-2xl" src={img} alt="Shoes" />

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>

      <div className="flex justify-center my-3">
        <Link className="" to="/visa">
          {" "}
          <PrimaryButton className="">Get your Service</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Service;
