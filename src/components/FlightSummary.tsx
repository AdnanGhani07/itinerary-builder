import React from "react";
import { FlightSummaryItem } from "../types";

interface FlightSummaryProps {
  flights: FlightSummaryItem[];
}

const FlightSummaryRow: React.FC<FlightSummaryItem> = ({
  date,
  airline,
  flightCode,
  from,
  to
}) => (
  <div
    className="flex items-center border rounded-lg mb-2 px-2 py-1"
    style={{
      border: "1.5px solid #dbd1ec",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      marginBottom: "12px"
    }}
  >
    <div
      style={{
        background: "#e6d4fa",
        color: "#6532a2",
        fontWeight: 700,
        padding: "8px 20px",
        borderRadius: "7px",
        marginRight: "20px",
        fontSize: "18px",
        minWidth: "140px",
        textAlign: "center"
      }}
    >
      {date}
    </div>
    <div>
      <span style={{ fontWeight: "bold", fontSize: "17px" }}>
        {airline} ({flightCode})
      </span>
      <span style={{ marginLeft: "6px", fontSize: "16px" }}>
        From {from} To {to}.
      </span>
    </div>
  </div>
);

const FlightSummary: React.FC<FlightSummaryProps> = ({ flights }) => (
  <div>
    <div
      style={{
        fontWeight: "bold",
        fontSize: "22px",
        marginBottom: "6px"
      }}
    >
      Flight <span style={{ color: "#7e38b7" }}>Summary</span>
    </div>
    {flights.map((f, i) => (
      <FlightSummaryRow key={i} {...f} />
    ))}
    <div
      style={{
        marginTop: "12px",
        color: "#444",
        fontSize: "12px"
      }}
    >
      Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25kg Checked Baggage.
    </div>
  </div>
);

export default FlightSummary;
