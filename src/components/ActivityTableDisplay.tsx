import React from "react";
import { ActivityRow } from "../types";

interface ActivityTableDisplayProps {
  activities: ActivityRow[];
}

export const ActivityTableDisplay: React.FC<ActivityTableDisplayProps> = ({ activities }) => (
  <div>
    <h2 style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
      Activity <span style={{ color: "#7e38b7" }}>Table</span>
    </h2>
    <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 3 }}>
      <thead>
        <tr>
          <th style={headerStyle}>City</th>
          <th style={headerStyle}>Activity</th>
          <th style={headerStyle}>Type</th>
          <th style={headerStyle}>Time Required</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((row, idx) => (
          <tr key={idx} style={{ backgroundColor: "#f6edfa" }}>
            <td style={cellStyle}>{row.city}</td>
            <td style={cellStyle}>{row.activity}</td>
            <td style={cellStyle}>{row.type}</td>
            <td style={cellStyle}>{row.timeRequired}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const headerStyle: React.CSSProperties = {
  backgroundColor: "#45287c",
  color: "#fff",
  padding: "10px",
  borderTopLeftRadius: "18px",
  borderTopRightRadius: "18px",
  fontWeight: 600,
  fontSize: 17
};

const cellStyle: React.CSSProperties = {
  padding: "8px 10px",
  fontSize: 16,
};
