import React from "react";

interface VisaDetailsInputProps {
  values: {
    visaType: string;
    validity: string;
    processingDate: string;
  };
  setValues: (vals: { visaType: string; validity: string; processingDate: string }) => void;
}

export const VisaDetailsInput: React.FC<VisaDetailsInputProps> = ({
  values, setValues
}) => {
  const onChange = (key: keyof typeof values, value: string) => setValues({ ...values, [key]: value });

  // Utility to pick a random date within the last 60 days before trip start date
  const generateRandomDate = () => {
    const end = new Date(values.processingDate);
    const start = new Date(end.getTime() - 60 * 24 * 60 * 60 * 1000);
    const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return random.toISOString().split("T")[0];
  };

  const handleDateBlur = () => {
    if (!values.processingDate) {
      onChange("processingDate", generateRandomDate());
    }
  };

  return (
    <div>
      <h3 className="mb-2 font-bold">Visa Details</h3>
      <div className="flex gap-2 mb-2 items-center">
        <input
          className="border px-2"
          placeholder="Visa Type"
          value={values.visaType}
          onChange={e => onChange("visaType", e.target.value)}
        />
        <input
          className="border px-2"
          placeholder="Validity"
          value={values.validity}
          onChange={e => onChange("validity", e.target.value)}
        />
        <input
          className="border px-2"
          type="string"
          placeholder="Processing Date"
          value={values.processingDate}
          onChange={e => onChange("processingDate", e.target.value)}
          onBlur={handleDateBlur}
        />
      </div>
    </div>
  );
};
