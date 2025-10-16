import React, { useEffect } from 'react';
import { DayEntry } from '../types';

interface DayFormProps {
  days: DayEntry[];
  setDays: React.Dispatch<React.SetStateAction<DayEntry[]>>;
}

const DEFAULT_TIMES = [
  { label: 'Morning', activities: [''] },
  { label: 'Afternoon', activities: [''] },
  { label: 'Evening', activities: [''] },
];

export const DayForm: React.FC<DayFormProps> = ({ days, setDays }) => {
  // Ensure every day always has a full timeline
  useEffect(() => {
    setDays(prevDays =>
      prevDays.map(day =>
        !day.times || day.times.length !== DEFAULT_TIMES.length
          ? { ...day, times: JSON.parse(JSON.stringify(DEFAULT_TIMES)) }
          : day
      )
    );
  }, []);

  const addDay = () =>
    setDays([
      ...days,
      {
        dayLabel: `Day ${days.length + 1}`,
        date: '',
        image: '',
        headline: '',
        times: JSON.parse(JSON.stringify(DEFAULT_TIMES)),
      },
    ]);

  const updateDay = (i: number, key: keyof DayEntry, value: any) => {
    const newDays = [...days];
    if (key !== 'times') {
      newDays[i][key] = value;
    } else {
      newDays[i].times = value;
    }
    setDays(newDays);
  };

  const updateTimeBlock = (
    dayIdx: number,
    blockIdx: number,
    actIdx: number,
    value: string
  ) => {
    const updated = [...days];
    updated[dayIdx].times[blockIdx].activities[actIdx] = value;
    setDays(updated);
  };

  const addActivity = (dayIdx: number, blockIdx: number) => {
    const updated = [...days];
    updated[dayIdx].times[blockIdx].activities.push('');
    setDays(updated);
  };

  // Handle image upload
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (!e.target?.files?.[0]) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string | undefined;
      if (result) {
        updateDay(idx, 'image', result);
        localStorage.setItem(`dayform_image_${idx}`, result);
      }
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    // Hydrate images from localStorage if present
    setDays(prev =>
      prev.map((day, idx) => {
        if (!day.image) {
          const stored = localStorage.getItem(`dayform_image_${idx}`);
          if (stored) return { ...day, image: stored };
        }
        return day;
      })
    );
  }, []);

  return (
    <div>
      <h2>Itinerary Days</h2>
      {days.map((day, i) => (
        <div key={i} className="border p-2 mb-4">
          <input
            className="border p-2"
            value={day.dayLabel}
            onChange={(e) => updateDay(i, 'dayLabel', e.target.value)}
            placeholder="Day Label"
          />
          <input
            className="border p-2"
            value={day.date}
            onChange={(e) => updateDay(i, 'date', e.target.value)}
            placeholder="Date (e.g. 27th November)"
          />
          <br />
          <input
            type="file"
            className="border p-2 mr-2 mb-3"
            accept="image/*"
            onChange={(e) => handleImageChange(e, i)}
          />
          <span className='text-gray-500'>Upload Image {`<`}5MB</span>
          {/* {day.image && (
            <img
              src={day.image}
              alt={`Preview for ${day.dayLabel}`}
              className="w-32 h-32 object-cover my-2"
            />
          )} */}
          <br/>
          <input
            className="border p-2 mb-3"
            value={day.headline}
            onChange={(e) => updateDay(i, 'headline', e.target.value)}
            placeholder="Headline/Description"
          />
          {/* Timeline Block */}
          {day.times.map((time, j) => (
            <div
              key={j}
              className="flex items-start mb-6"
              style={{ position: 'relative' }}
            >
              {/* Timeline marker & line */}
              <div
                style={{
                  width: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#fff',
                    border: '3px solid #5533aa',
                    marginBottom: '2px',
                    zIndex: 1,
                  }}
                />
                {/* Timeline line */}
                {j < day.times.length - 1 && (
                  <span
                    style={{
                      width: '2px',
                      height: '40px',
                      background: '#5533aa',
                      position: 'absolute',
                      top: '14px',
                      left: '19px',
                      zIndex: 0,
                    }}
                  />
                )}
              </div>
              {/* Time label and activities */}
              <div>
                <div className="font-bold text-purple-900 text-lg mb-2">
                  {time.label}
                </div>
                <ul className="mb-2">
                  {time.activities.map((act, a) => (
                    <li key={a} className="mb-1 list-disc ml-6">
                      <input
                        value={act}
                        onChange={(e) => updateTimeBlock(i, j, a, e.target.value)}
                        placeholder="Activity"
                        className="border-b border-purple-200 outline-none p-1 text-gray-800 w-[80%] bg-transparent"
                      />
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => addActivity(i, j)}
                  className="text-sm bg-purple-100 px-2 py-1 rounded"
                >
                  + Add activity
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={addDay}
        className="text-sm bg-purple-100 px-2 py-1 rounded"
      >
        Add Another Day
      </button>
    </div>
  );
};
