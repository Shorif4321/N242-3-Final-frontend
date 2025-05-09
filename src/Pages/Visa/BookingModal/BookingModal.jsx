import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ time,setTime, selectedDate }) => {
  const { name, slots } = time;
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleAppointment =(event)=>{
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    
    const booking = {
      serviceName:name,
      appointmentDate:date,
      slot,
      name:userName,
      email,phone,
    }
    // console.log(booking);
    
    fetch('http://localhost:7000/bookings',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      
      if(data.acknowledged){
        form.reset()
        toast.success('Booking Successful 👏!');
        setTime("")
      }
      else{
         toast.error(data.message)
      }
    } )
    


  }
 


  return (
    <div>
      <input type="checkbox" id="book_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box text-black">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{name}</h3>
            <label
              htmlFor="book_modal"
              className="btn rounded-full bg-primary text-white font-semibold"
            >
              ✕
            </label>
          </div>

          <form onSubmit={handleAppointment} className="fieldset">
            <label className="label">Date</label>
            <input
              value={date}
              readOnly
              type="text"
              className="input w-full"
              placeholder="Date"
            />

            <label className="label">Name</label>
            <input
              type="Name"
              defaultValue={user?.displayName}
              readOnly
              className="input w-full"
              placeholder="Name"
              name="name"
            />

            <label className="label">Time</label>
            <select
              defaultValue="Pick a browser"
              className="select input w-full"
              name="slot"
            >
              <option disabled={true}>Pick a Browser</option>
              {slots?.map((slot, i) => (
                <option key={i}>{slot}</option>
              ))}
            </select>

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Email"
            />

            <label className="label">Phone</label>
            <input
              type="number"
              name="phone"
              required
              min={0}
              className="input w-full"
              placeholder="Phone"
            />

            <input
              type="submit"
              value="Pick a Time"
              className="btn  btn-primary mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
