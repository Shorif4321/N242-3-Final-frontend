import React from "react";
import people1 from "../../../assets/images/people1.jpg";
import people2 from "../../../assets/images/people2.jpg";
import people3 from "../../../assets/images/people3.jpg";
import qoute from "../../../assets/images/qoute.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Henry Chark",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 2,
      name: "Jakar Herry",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "London",
    },
    {
      _id: 3,
      name: "lliam Herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Ghana",
    },
  ];

  return (
    <div className="mx-4 my-20">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl text-primary">Testimonial</h1>
          <p>Public Say about us</p>
        </div>
        <img className="w-20 h-20" src={qoute} alt="" />
      </div>

      {/* map */}
      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} data={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
