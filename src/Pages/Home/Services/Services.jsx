import React from "react";
import visa from "../../../assets/images/visa.jpg";
import f1visa from "../../../assets/images/education.jpg";
import tourist from "../../../assets/images/tourist.jpeg";
import immigration from "../../../assets/images/immigrant.jpeg";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      _id: 1,
      name: "Visa Process",
      img: visa,
      description:
        "Collect your online visa established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "F1 Visa Details",
      img: f1visa,
      description:
        "F1 Visa It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Tourist Visa process",
      img: tourist,
      description:
        "Tourist It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 4,
      name: "Immigration",
      img: immigration,
      description:
        "Immigration is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <div className="my-5 md:my-20 mx-2 md:mx-5">
      <div className="text-center my-7">
        <h2 className="text-xl text-primary">Our Service</h2>
        <h3 className="text-3xl text-secondary">Service we provide</h3>
      </div>

      {/* map */}
      <div className="grid md:grid-cols-3 gap-5">
        {servicesData.map((service) => (
          <Service key={service._id} data={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
