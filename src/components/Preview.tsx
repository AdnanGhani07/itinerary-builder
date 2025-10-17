import React, { forwardRef } from "react";
import { ItineraryData } from "../types";
import { TripDetails } from "./TripDetailsForm";
import FlightSummary from "./FlightSummary";
import HotelTable from "./HotelTable";
import { ImportantNotes } from "./ImportantNotes";
import { ScopeOfService } from "./ScopeOfService";
import InclusionSummary from "./InclusionSummary";
import { ActivityTableDisplay } from "./ActivityTableDisplay";
import { PaymentPlanDisplay } from "./PaymentPlanDisplay";
import { VisaDetailsDisplay } from "./VisaDetailsDisplay";
import {VisaDetails} from "./VisaDetailsInput";

interface PreviewProps {
  data: ItineraryData;
  visaDetails: VisaDetails;
  tripDetails: TripDetails;
}

const Preview = forwardRef<HTMLDivElement, PreviewProps>(function Preview(
  { data, visaDetails, tripDetails },
  ref
) {
  const {
    overview,
    days,
    hotels,
    flightSummary,
    paymentRows,
    totalAmount,
    tcs,
    activities,
  } = data;
  const startDate = new Date(tripDetails.departure);
  const endDate = new Date(tripDetails.arrival);

  // Calculate ms difference, then convert to days (accounting for all months/years)
  const msPerDay = 24 * 60 * 60 * 1000;
  const rawDays =
    Math.round((endDate.getTime() - startDate.getTime()) / msPerDay) + 1;
  const daysCount = rawDays > 0 ? rawDays : 1; // fallback to at least 1
  const nightsCount = daysCount - 1;
  return (
    <div ref={ref} className="bg-white text-purple-900 max-w-3xl mx-auto p-6">
      <div className="text-center text-white bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 p-2 rounded-xl mb-4">
        <h1 className="text-3xl font-semibold mb-2">Hi, {overview.name}!</h1>
        <h1 className="text-2xl font-semibold mb-2">
          {overview.title} Itinerary
        </h1>
        <h2 className="text-sm font-semibold mb-5">
          {daysCount} Days, {nightsCount} Nights
        </h2>
      </div>
      <br />
      <div className="border border-black rounded-xl p-2 text-start">
        <table className="w-full">
          <thead>
            <tr className="text-black">
              <th>Departure From:</th>
              <th>Departure:</th>
              <th>Arrival:</th>
              <th>Destination:</th>
              <th>No. Of Travellers:</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-black text-center">
              <td>{tripDetails.from}</td>
              <td>{tripDetails.departure}</td>
              <td>{tripDetails.arrival}</td>
              <td>{tripDetails.destination}</td>
              <td>{tripDetails.travellers}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div>
        {days.map((day, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              borderBottom: "1px solid #e5e7eb",
              padding: 24,
              alignItems: "flex-start",
            }}
          >
            {/* Day label */}
            <div
              style={{
                width: 50,
                minWidth: 50,
                textAlign: "center",
                color: "#fff",
                fontWeight: 700,
                background: "#432b7c",
                borderRadius: 20,
                padding: "35px 0 35px 0",
                fontSize: 17,
                marginRight: 20,
                writingMode: "initial",
                transform: "none",
              }}
            >
              {day.dayLabel}
            </div>
            {/* Image and meta */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 110,
              }}
            >
              <img
                src={day.image}
                className="w-24 h-24 object-cover rounded-full"
                alt=""
              />
              <div style={{ fontWeight: "700", fontSize: 18, marginTop: 5 }}>
                {day.date}
              </div>
              <div style={{ fontSize: 13, color: "#444" }}>{day.headline}</div>
            </div>
            {/* Timeline and activities */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 24,
                flex: 1,
              }}
            >
              {day.times.map((tb, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      marginRight: 10,
                      width: 20,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Timeline ovals and line */}
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#432b7c",
                        marginBottom: idx < 2 ? 8 : 0,
                      }}
                    />
                    {idx < 2 && (
                      <div
                        style={{
                          width: 2,
                          height: 32,
                          background: "#432b7c",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{tb.label}</div>
                    <ul style={{ margin: 0, paddingLeft: 16 }}>
                      {tb.activities.filter(Boolean).map((act, ai) => (
                        <li
                          key={ai}
                          style={{
                            fontSize: 13,
                            color: "#3e3a3a",
                            margin: "2px 0",
                          }}
                        >
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <FlightSummary flights={flightSummary} />
      <br />
      <HotelTable hotels={hotels} />
      <br />
      <ImportantNotes />
      <br />
      <ScopeOfService />
      <br />
      <InclusionSummary hotels={hotels} flightSummary={flightSummary} />
      <br />
      <ActivityTableDisplay activities={activities} />
      <br />
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">
          Terms and Conditions
        </h2>
        <a href="" style={{ color: "#432b7c", textDecoration: "underline" }}>
          <h3>View all terms and conditions</h3>
        </a>
      </div>
      <br />
      <PaymentPlanDisplay
        rows={paymentRows}
        totalAmount={totalAmount}
        tcs={tcs}
      />
      <br />
      <VisaDetailsDisplay
        visaType={visaDetails.visaType}
        validity={visaDetails.validity}
        processingDate={visaDetails.processingDate}
      />
    </div>
  );
});

export default Preview;
