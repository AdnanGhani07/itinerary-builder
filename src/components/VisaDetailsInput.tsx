import React from "react";

export interface VisaDetails {
    visaType: string;
    validity: string;
    processingDate: string; 
}

export interface VisaDetailsInputProps {
  value: VisaDetails;
  onChange: (newDetails: VisaDetails) => void;
}

export const VisaDetailsInput: React.FC<VisaDetailsInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="mb-2 font-bold">Visa Details</h3>
      <div className="flex gap-2 mb-2 items-center">
        <input
          name="visaType"
          className="border px-2"
          placeholder="Visa Type"
          value={value.visaType}
          onChange={e => handleChange(e)}
        />
        <input
          name="validity"
          className="border px-2"
          placeholder="Validity"
          value={value.validity}
          onChange={e => handleChange(e)}
        />
        <input
          name="processingDate"
          className="border px-2"
          type="string"
          placeholder="Processing Date"
          value={value.processingDate}
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  );
};
