import React, { useRef, useState } from "react";
import ItineraryForm from "./components/ItineraryForm";
import Preview from "./components/Preview";
import PDFExport from "./components/PDFExport";
import { ItineraryData, VisaDetails } from "./types";
import { TripDetails } from "./components/TripDetailsForm";
import "./styles/tailwind.css";

function App() {
  const [data, setData] = useState<ItineraryData | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Itinerary Builder</h1>
      {!data ? (
        <ItineraryForm
          onSubmit={(data, tripDetails) => {
            setData(data);
            setTripDetails(tripDetails);
          }}
        />
      ) : (
        <>
          <Preview
            ref={previewRef}
            data={data}
            visaDetails={visaDetails}
            tripDetails={tripDetails}
          />
          <PDFExport previewRef={previewRef} />
        </>
      )}
    </div>
  );
}

export default App;
