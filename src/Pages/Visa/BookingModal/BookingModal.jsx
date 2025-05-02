import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ time, selectedDate }) => {
  const { name, slots } = time;
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);
  console.log(user, "from visa page");

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

          <form action="" className="fieldset">
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
              className="input w-full"
              placeholder="Name"
            />

            <label className="label">Time</label>

            <select
              defaultValue="Pick a browser"
              className="select input w-full"
            >
              <option disabled={true}>Pick a Browser</option>
              {slots?.map((slot, i) => (
                <option key={i}>{slot}</option>
              ))}
            </select>

            <label className="label">Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Email"
            />

            <label className="label">Phone</label>
            <input
              type="number"
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
