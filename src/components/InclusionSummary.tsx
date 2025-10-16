import React from "react";
import { Hotel, FlightSummaryItem } from "../types";

interface InclusionSummaryProps {
  hotels: Hotel[];
  flightSummary: FlightSummaryItem[];
  override?: Partial<{
    flightStatus: string;
    touristTax: { count: number; details: string; status: string };
    hotelStatus: string;
  }>;
}

const InclusionSummary: React.FC<InclusionSummaryProps> = ({
  hotels,
  flightSummary,
  override,
}) => {
  const inclusionRows = [
    {
      category: "Flight",
      count: flightSummary.length,
      details: flightSummary.length > 0 ? "All Flights Mentioned" : "—",
      status: override?.flightStatus || "Awaiting Confirmation",
    },
    {
      category: "Tourist Tax",
      count: override?.touristTax?.count ?? hotels.length,
      details:
        override?.touristTax?.details ??
        hotels.map((h) => h.name + ` (${h.city})`).join(", "),
      status: override?.touristTax?.status ?? "Awaiting Confirmation",
    },
    {
      category: "Hotel",
      count: hotels.length,
      details: "Airport To Hotel · Hotel To Attractions · Day Trips If Any",
      status: override?.hotelStatus || "Included",
    },
  ];

  return (
    <div>
      <h2 style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
        Inclusion <span style={{ color: "#7e38b7" }}>Summary</span>
      </h2>
      <table
        style={{ width: "100%", borderCollapse: "separate", borderSpacing: 2 }}
      >
        <thead>
          <tr>
            <th style={headerStyle}>Category</th>
            <th style={headerStyle}>Count</th>
            <th style={headerStyle}>Details</th>
            <th style={headerStyle}>Status / Comments</th>
          </tr>
        </thead>
        <tbody>
          {inclusionRows.map((inc, idx) => {
            const isLast = idx === inclusionRows.length - 1;
            return (
              <tr key={idx} style={{ backgroundColor: "#f6edfa" }}>
                <td
                  style={{
                    ...cellStyle,
                    borderBottomLeftRadius: isLast ? "18px" : undefined,
                  }}
                >
                  {inc.category}
                </td>
                <td style={cellStyle}>{inc.count}</td>
                <td style={cellStyle}>{inc.details}</td>
                <td
                  style={{
                    ...cellStyle,
                    borderBottomLeftRadius: isLast ? "18px" : undefined,
                  }}
                >
                  {inc.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ fontSize: 13, marginTop: 10, color: "#333" }}>
        <b>Transfer Policy(Refundable Upon Claim)</b> If Any Transfer Is Delayed
        Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And
        Claim A Refund For That Specific Leg.
      </div>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#45287c",
  color: "#fff",
  padding: "10px",
  borderTopLeftRadius: "18px",
  borderTopRightRadius: "18px",
  fontWeight: 600,
  fontSize: 17,
};

const cellStyle: React.CSSProperties = {
  padding: "10px",
  fontSize: 15,
};

export default InclusionSummary;
