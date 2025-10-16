import React from "react";
import { PaymentRow } from "../types";
import { PaymentPlanInputProps } from "../types";



export const PaymentPlanInput: React.FC<PaymentPlanInputProps> = ({
  rows, setRows, totalAmount, setTotalAmount, tcs, setTcs
}) => {
  const updateField = (i: number, key: keyof PaymentRow, value: string) => {
    const copy = [...rows];
    copy[i][key] = value;
    setRows(copy);
  };
  const addRow = () => setRows([...rows, { due: "", amount: "" }]);
  const removeRow = (i: number) => setRows(rows.filter((_, idx) => idx !== i));

  return (
    <div>
      <h3 className="mb-2 font-bold">Payment Plan Input</h3>
      <div className="flex gap-2 mb-2">
        <input
          className="border px-2"
          placeholder="Total Amount"
          value={totalAmount}
          onChange={e => setTotalAmount(e.target.value)}
        />
        <input
          className="border px-2"
          placeholder="TCS"
          value={tcs}
          onChange={e => setTcs(e.target.value)}
        />
      </div>
      {rows.map((row, i) => (
        <div key={i} className="flex gap-2 mb-2 items-center">
          <input
            className="border px-2"
            placeholder={`Installment ${i+1} Amount`}
            value={row.amount}
            onChange={e => updateField(i, "amount", e.target.value)}
          />
          <input
            className="border px-2"
            placeholder={`Due Date/Note`}
            value={row.due}
            onChange={e => updateField(i, "due", e.target.value)}
          />
          <button type="button" onClick={() => removeRow(i)} className="text-red-700">Delete</button>
        </div>
      ))}
      <button
        type="button"
        onClick={addRow}
        className="bg-purple-100 px-2 py-1 rounded"
      >
        + Add Installment
      </button>
    </div>
  );
};
