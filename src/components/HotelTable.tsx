import React from "react";
import { Hotel } from "../types";

interface HotelTableProps {
  hotels: Hotel[];
}

const hotelNotes = [
  "All Hotels Are Tentative And Can Be Replaced With Similar.",
  "Breakfast Included For All Hotel Stays.",
  "All Hotels Will Be 4* And Above Category",
  "A maximum occupancy of 2 people/room is allowed in most hotels."
];

const HotelTable: React.FC<HotelTableProps> = ({ hotels }) => (
  <div>
    <div
      style={{
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 6,
      }}
    >
      Hotel <span style={{ color: "#7e38b7" }}>Bookings</span>
    </div>
    <table
      style={{
        borderCollapse: "separate",
        borderSpacing: 0,
        width: "100%",
        marginBottom: 10
      }}
    >
      <thead>
        <tr>
          <th style={{
            background: "#45287c",
            color: "#fff",
            borderTopLeftRadius: "18px",
            borderBottom: 0,
            padding: "10px 16px",
            fontWeight: 600,
            fontSize: 17
          }}>City</th>
          <th style={{
            background: "#45287c",
            color: "#fff",
            borderBottom: 0,
            padding: "10px 16px",
            fontWeight: 600,
            fontSize: 17
          }}>Check In</th>
          <th style={{
            background: "#45287c",
            color: "#fff",
            borderBottom: 0,
            padding: "10px 16px",
            fontWeight: 600,
            fontSize: 17
          }}>Check Out</th>
          <th style={{
            background: "#45287c",
            color: "#fff",
            borderBottom: 0,
            padding: "10px 16px",
            fontWeight: 600,
            fontSize: 17
          }}>Nights</th>
          <th style={{
            background: "#45287c",
            color: "#fff",
            borderTopRightRadius: "18px",
            borderBottom: 0,
            padding: "10px 16px",
            fontWeight: 600,
            fontSize: 17
          }}>Hotel Name</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map((hotel, idx) => (
          <tr
            key={idx}
            style={{
              background: "#f6edfa",
              borderBottom: "3px solid #fff"
            }}
          >
            <td style={{ padding: "10px 12px", fontSize: 16 }}>{hotel.city}</td>
            <td style={{ padding: "10px 12px", fontSize: 16 }}>{hotel.checkin}</td>
            <td style={{ padding: "10px 12px", fontSize: 16 }}>{hotel.checkout}</td>
            <td style={{ padding: "10px 12px", fontSize: 16 }}>{hotel.nights}</td>
            <td style={{ padding: "10px 12px", fontSize: 16, minWidth: 220 }}>
              {hotel.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <ul style={{fontSize: 14, color: "#444", marginTop: 8, marginLeft: 20, padding: 0, listStyle: 'decimal'}}>
      {hotelNotes.map((note, idx) => (
        <li key={idx} style={{marginBottom: 4}}>{note}</li>
      ))}
    </ul>
  </div>
);

export default HotelTable;
