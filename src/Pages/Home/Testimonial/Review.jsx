import React from "react";

const Review = ({ data }) => {
  const { name, img, review, location } = data;
  return (
    <div className="p-5 shadow-sm bg-gradient-to-r from-primary to-secondary text-white rounded-2xl">
      <div>
        <p>{review}</p>
      </div>

      <div className="flex items-center mt-4">
        <img
          className="h-20 w-20 border-2 border-secondary p-1 rounded-full "
          src={img}
          alt="Shoes"
        />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
