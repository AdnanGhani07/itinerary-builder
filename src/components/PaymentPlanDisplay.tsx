import React from "react";
import { PaymentRow } from "../types";

export interface PaymentPlanDisplayProps {
  rows: PaymentRow[];
  totalAmount: string;
  tcs: string;
}

export const PaymentPlanDisplay: React.FC<PaymentPlanDisplayProps> = ({
  rows,
  totalAmount,
  tcs,
}) => (
  <div>
    <h2 style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
      Payment <span style={{ color: "#7e38b7" }}>Plan</span>
    </h2>
    <div className="flex gap-2 mb-2">
      <div
        style={{
          background: "#e6d4fa",
          color: "#6532a2",
          fontWeight: 700,
          borderRadius: "7px",
          padding: "8px 20px",
          minWidth: "160px",
        }}
      >
        Total Amount
      </div>
      <div
        style={{
          background: "#fff",
          color: "#222",
          fontWeight: 700,
          border: "1.5px solid #dbd1ec",
          borderRadius: "7px",
          padding: "8px 20px",
          minWidth: "300px",
        }}
      >
        {totalAmount + " For " + rows.length + " PAX (Inclusive of GST)"}
      </div>
    </div>
    <div className="flex gap-2 mb-2">
      <div
        style={{
          background: "#e6d4fa",
          color: "#6532a2",
          fontWeight: 700,
          borderRadius: "7px",
          padding: "8px 20px",
          minWidth: "160px",
        }}
      >
        TCS
      </div>
      <div
        style={{
          background: "#fff",
          color: "#222",
          fontWeight: 700,
          border: "1.5px solid #dbd1ec",
          borderRadius: "7px",
          padding: "8px 20px",
          minWidth: "300px",
        }}
      >
        {tcs || "Not Collected"}
      </div>
    </div>
    <table
      style={{
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 3,
        marginTop: 16,
      }}
    >
      <thead>
        <tr>
          <th style={headerStyle}>Installment</th>
          <th style={headerStyle}>Amount</th>
          <th style={headerStyle}>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          const isLast = idx === rows.length - 1;
          return (
            <tr key={idx} style={{ backgroundColor: "#f6edfa" }}>
              <td
                style={{
                  ...cellStyle,
                  borderBottomLeftRadius: isLast ? "18px" : undefined,
                }}
              >{`Installment ${idx + 1}`}</td>
              <td style={cellStyle}>{row.amount}</td>
              <td
                style={{
                  ...cellStyle,
                  borderBottomLeftRadius: isLast ? "18px" : undefined,
                }}
              >
                {row.due}
              </td>
            </tr>
          );
        })}
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
  fontSize: 17,
};

const cellStyle: React.CSSProperties = {
  padding: "8px 10px",
  fontSize: 16,
};
