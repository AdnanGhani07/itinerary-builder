import React, { useState, FormEvent } from "react";
import { DayForm } from "./DayForm";
import HotelInputTable from "./HotelInputTable";
import { TripDetailsForm, TripDetails } from "./TripDetailsForm";
import {
  DayEntry,
  Hotel,
  PaymentRow,
  Overview,
  ItineraryData,
  FlightSummaryItem,
  ActivityRow,
} from "../types";
import { FlightSummaryForm } from "./FlightSummaryForm";
import { ActivityTableInput } from "./ActivityTableInput";
import { PaymentPlanInput } from "./PaymentPlanInput";
import { VisaDetailsInput } from "./VisaDetailsInput";

interface ItineraryFormProps {
  onSubmit: (data: ItineraryData, tripDetails: TripDetails) => void;
}

const defaultOverview: Overview = {
  name: "",
  title: "",
};

function ItineraryForm({ onSubmit }: ItineraryFormProps) {
  const [days, setDays] = useState<DayEntry[]>([
    {
      dayLabel: "",
      date: "",
      image: "",
      headline: "",
      times: [{ label: "", activities: [""] }],
    },
  ]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [paymentRows, setPaymentRows] = useState<PaymentRow[]>([]);
  const [totalAmount, setTotalAmount] = useState<string>("");
  const [tcs, setTcs] = useState<string>("");
  const [overview, setOverview] = useState<Overview>(defaultOverview);
  const [activities, setActivities] = useState<ActivityRow[]>([]);
  const [flightSummary, setFlightSummary] = useState<FlightSummaryItem[]>([]);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    from: "",
    departure: "",
    arrival: "",
    destination: "",
    travellers: "",
  });

  const [visaDetails, setVisaDetails] = useState({
  visaType: "",
  validity: "",
  processingDate: "",
});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(
      { days, hotels, paymentRows, totalAmount, tcs, overview, flightSummary, activities, visaDetails },
      tripDetails
    );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        <input
          className="border p-2"
          placeholder="Name"
          value={overview.name}
          onChange={(e) => setOverview({ ...overview, name: e.target.value })}
          required
        />
        <input
          className="border p-2"
          placeholder="Trip Title"
          value={overview.title}
          onChange={(e) => setOverview({ ...overview, title: e.target.value })}
          required
        />
      </div>

      <TripDetailsForm value={tripDetails} onChange={setTripDetails} />
      <DayForm days={days} setDays={setDays} />
      <FlightSummaryForm
        flights={flightSummary}
        setFlights={setFlightSummary}
      />
      <HotelInputTable hotels={hotels} setHotels={setHotels} />
      <ActivityTableInput
        activities={activities}
        setActivities={setActivities}
      />
      <PaymentPlanInput
        rows={paymentRows}
        setRows={setPaymentRows}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        tcs={tcs}
        setTcs={setTcs}
      />
      <VisaDetailsInput
        value={visaDetails}
        onChange={setVisaDetails}
      />

      <button
        type="submit"
        className="bg-purple-700 text-white px-3 py-2 rounded w-full font-bold"
      >
        Preview & Export PDF
      </button>
    </form>
  );
}

export default ItineraryForm;
