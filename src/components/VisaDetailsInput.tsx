import React from "react";

export interface VisaDetails {
    visaType: string;
    validity: string;
    processingDate: string; 
}

interface VisaDetailsInputProps {
  value: VisaDetails;
  onChange: (newDetails: VisaDetails) => void;
}

export const VisaDetailsInput: React.FC<VisaDetailsInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, [e.target.name]: e.target.value });
  };

  // Utility to pick a random date within the last 60 days before trip start date
  const generateRandomDate = () => {
    const end = new Date(value.processingDate);
    const start = new Date(end.getTime() - 60 * 24 * 60 * 60 * 1000);
    const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return random.toISOString().split("T")[0];
  };

  const handleDateBlur = () => {
    if (!value.processingDate) {
      onChange({ ...value, processingDate: generateRandomDate() });
    }
  };

  return (
    <div>
      <h3 className="mb-2 font-bold">Visa Details</h3>
      <div className="flex gap-2 mb-2 items-center">
        <input
          className="border px-2"
          placeholder="Visa Type"
          value={value.visaType}
          onChange={e => handleChange(e)}
        />
        <input
          className="border px-2"
          placeholder="Validity"
          value={value.validity}
          onChange={e => handleChange(e)}
        />
        <input
          className="border px-2"
          type="string"
          placeholder="Processing Date"
          value={value.processingDate}
          onChange={e => handleChange(e)}
          onBlur={handleDateBlur}
        />
      </div>
    </div>
  );
};
