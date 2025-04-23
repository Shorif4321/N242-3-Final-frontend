import React, { useState } from "react";
import VisaBanner from "./VisaBanner/VisaBanner";
import VisaAppointments from "./VisaAppointments/VisaAppointments";

const Visa = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <VisaBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></VisaBanner>
      <VisaAppointments selectedDate={selectedDate}></VisaAppointments>
    </div>
  );
};

export default Visa;
