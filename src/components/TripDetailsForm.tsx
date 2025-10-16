import React from 'react';

export interface TripDetails {
  from: string;
  departure: string;
  arrival: string;
  destination: string;
  travellers: string;
}

interface TripDetailsFormProps {
  value: TripDetails;
  onChange: (newDetails: TripDetails) => void;
}

export const TripDetailsForm: React.FC<TripDetailsFormProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-between gap-5 my-6 p-3 border-solid border-2 border-black rounded-lg">
      <div>
        <label className="font-bold block">Departure From</label>
        <input
          type="text"
          name="from"
          value={value.from}
          onChange={handleChange}
          className="border-b"
        />
      </div>
      <div>
        <label className="font-bold block">Departure</label>
        <input
          type="date"
          name="departure"
          value={value.departure}
          onChange={handleChange}
          className="border-b"
        />
      </div>
      <div>
        <label className="font-bold block">Arrival</label>
        <input
          type="date"
          name="arrival"
          value={value.arrival}
          onChange={handleChange}
          className="border-b"
        />
      </div>
      <div>
        <label className="font-bold block">Destination</label>
        <input
          type="text"
          name="destination"
          value={value.destination}
          onChange={handleChange}
          className="border-b"
        />
      </div>
      <div>
        <label className="font-bold block">No. Of Travellers</label>
        <input
          type="number"
          name="travellers"
          min={1}
          value={value.travellers}
          onChange={handleChange}
          className="border-b w-14"
        />
      </div>
    </div>
  );
};
