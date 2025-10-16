import React from "react";
import { ActivityRow } from "../types";

interface ActivityTableInputProps {
  activities: ActivityRow[];
  setActivities: (rows: ActivityRow[]) => void;
}

export const ActivityTableInput: React.FC<ActivityTableInputProps> = ({ activities, setActivities }) => {
  const updateField = (i: number, key: keyof ActivityRow, value: string) => {
    const copy = [...activities];
    copy[i][key] = value;
    setActivities(copy);
  };

  const addRow = () => setActivities([...activities, { city: '', activity: '', type: '', timeRequired: '' }]);
//   const removeRow = (i: number) => setActivities(activities.filter((_, idx) => idx !== i));

  return (
    <div>
      <h3 className="mb-2 font-bold">Activity Table</h3>
      {activities.map((row, i) => (
        <div key={i} className="flex gap-2 mb-2 items-center">
          <input className="border px-2" placeholder="City" value={row.city} onChange={e => updateField(i, "city", e.target.value)} />
          <input className="border px-2" placeholder="Activity" value={row.activity} onChange={e => updateField(i, "activity", e.target.value)} />
          <input className="border px-2" placeholder="Type" value={row.type} onChange={e => updateField(i, "type", e.target.value)} />
          <input className="border px-2" placeholder="Time Required" value={row.timeRequired} onChange={e => updateField(i, "timeRequired", e.target.value)} />
          {/* <button type="button" onClick={() => removeRow(i)} className="text-red-700">Delete</button> */}
        </div>
      ))}
      <button type="button" onClick={addRow} className="bg-purple-100 px-2 py-1 rounded">+ Add Activity</button>
    </div>
  );
};
