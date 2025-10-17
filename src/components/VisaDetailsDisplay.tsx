import React from "react";
import { VisaDetails } from "./VisaDetailsInput";

interface VisaDetailsDisplayProps {
  value: VisaDetails;
}

export const VisaDetailsDisplay: React.FC<VisaDetailsDisplayProps> = ({
  value,
}) => (
  <div style={{ margin: "30px 0" }}>
    <h2 style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>
      Visa <span style={{ color: "#7e38b7" }}>Details</span>
    </h2>
    <div
      style={{
        display: "flex",
        border: "1.5px solid #b095d6",
        borderRadius: "18px",
        padding: "18px 0",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#fff",
        maxWidth: 600
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>Visa Type :</span>
        <div>{value.visaType}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>Validity:</span>
        <div>{value.validity}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>Processing Date :</span>
        <div>{value.processingDate}</div>
      </div>
    </div>
  </div>
);
