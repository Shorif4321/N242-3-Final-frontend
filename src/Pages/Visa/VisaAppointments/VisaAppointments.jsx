import React, { useEffect, useState } from "react";
import VisaAppointmentOption from "./VisaAppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { format } from "date-fns";

const VisaAppointments = ({ selectedDate }) => {
  const [appointments, setAppointments] = useState([]);
  const [time, setTime] = useState({});

  useEffect(() => {
    fetch("http://localhost:7000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  // console.log(appointments);

  return (
    <div className="mx-5">
      <div className="text-center">
        <h4 className="text-primary font-semibold ">Visa Appointments</h4>
        <h3 className="text-3xl font-semibold">
          Visa Appointment On {format(selectedDate, "PP")}
        </h3>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-5 mb-5">
        {appointments.map((appointment, i) => (
          <VisaAppointmentOption
            key={i}
            appointmentOption={appointment}
            setTime={setTime}
          ></VisaAppointmentOption>
        ))}
      </div>
      {time && (
        <BookingModal time={time} selectedDate={selectedDate}></BookingModal>
      )}
    </div>
  );
};

export default VisaAppointments;
