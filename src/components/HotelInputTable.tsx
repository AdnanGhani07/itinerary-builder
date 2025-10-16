import React from "react";
import { Hotel } from "../types";

interface HotelInputTableProps {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
}

const HotelInputTable: React.FC<HotelInputTableProps> = ({ hotels, setHotels }) => {
  const updateField = (i: number, key: keyof Hotel, value: string) => {
    const copy = [...hotels];
    copy[i][key] = value;
    setHotels(copy);
  };

  const addHotel = () => {
    setHotels([...hotels, { city: "", checkin: "", checkout: "", nights: "", name: "" }]);
  };

  // const removeHotel = (i: number) => {
  //   setHotels(hotels.filter((_, idx) => idx !== i));
  // };

  return (
    <div>
      <h3 className="mb-2 font-bold">Hotel Bookings</h3>
      {hotels.map((hotel, i) => (
        <div className="flex gap-2 mb-2" key={i}>
          <input
            className="border px-2"
            placeholder="City"
            value={hotel.city}
            onChange={e => updateField(i, "city", e.target.value)}
          />
          <input
            className="border px-2"
            placeholder="Check In (24/02/2025)"
            value={hotel.checkin}
            onChange={e => updateField(i, "checkin", e.target.value)}
          />
          <input
            className="border px-2"
            placeholder="Check Out (24/02/2025)"
            value={hotel.checkout}
            onChange={e => updateField(i, "checkout", e.target.value)}
          />
          <input
            className="border px-2"
            type="number"
            placeholder="Nights"
            value={hotel.nights}
            onChange={e => updateField(i, "nights", e.target.value)}
            min={1}
          />
          <input
            className="border px-2"
            placeholder="Hotel Name"
            value={hotel.name}
            onChange={e => updateField(i, "name", e.target.value)}
          />
          {/* <button type="button" onClick={() => removeHotel(i)} className="text-red-500">Delete</button> */}
        </div>
      ))}
      <button type="button" onClick={addHotel} className="bg-purple-100 px-2 py-1 rounded">+ Add Hotel</button>
    </div>
  );
};

export default HotelInputTable;
