// FlightSummaryForm.tsx
import React from "react";
import { FlightSummaryItem } from "../types";

interface Props {
  flights: FlightSummaryItem[];
  setFlights: (flights: FlightSummaryItem[]) => void;
}

export const FlightSummaryForm: React.FC<Props> = ({ flights, setFlights }) => {
  const updateField = (idx: number, key: keyof FlightSummaryItem, value: string) => {
    const newFlights = [...flights];
    newFlights[idx][key] = value;
    setFlights(newFlights);
  };

  const addFlight = () => {
    setFlights([
      ...flights,
      { date: "", airline: "", flightCode: "", from: "", to: "" }
    ]);
  };

  return (
    <div>
      <h3 className="font-bold text-md mb-2">Flight Summary</h3>
      {flights.map((f, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input value={f.date} onChange={e => updateField(i, "date", e.target.value)} placeholder="Date (e.g. Thu 10 Jan'24)" className="border px-2" />
          <input value={f.airline} onChange={e => updateField(i, "airline", e.target.value)} placeholder="Airline (e.g. Fly Air India)" className="border px-2" />
          <input value={f.flightCode} onChange={e => updateField(i, "flightCode", e.target.value)} placeholder="Code (e.g. AX-123)" className="border px-2" />
          <input value={f.from} onChange={e => updateField(i, "from", e.target.value)} placeholder="From (e.g. Delhi DEL)" className="border px-2" />
          <input value={f.to} onChange={e => updateField(i, "to", e.target.value)} placeholder="To (e.g. Singapore SIN)" className="border px-2" />
        </div>
      ))}
      <button type="button" onClick={addFlight} className="bg-purple-100 px-2 py-1 rounded">+ Add Flight</button>
    </div>
  );
};
