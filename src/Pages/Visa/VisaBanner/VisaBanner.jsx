import React, { useState } from "react";
import banner from "../../../assets/images/education.jpg";
import { DayPicker } from "react-day-picker";

const VisaBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="hero py-5 md:py-20">
        <div className=" md:flex justify-between items-center gap-5 px-5">
          <div className="md:w-1/2 mb-5 shadow-2xl rounded-xl p-10">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          <img src={banner} className="" />
        </div>
      </div>
    </div>
  );
};

export default VisaBanner;
