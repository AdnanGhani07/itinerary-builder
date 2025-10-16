import React from 'react';
import { TripDetails } from './TripDetailsForm';

interface TripDetailsPreviewProps {
  details: TripDetails;
}

export const TripDetailsPreview: React.FC<TripDetailsPreviewProps> = ({ details }) => (
  <div className="flex justify-between gap-4 my-4 text-sm items-baseline">
    <div>
      <div className="font-bold text-xs">Departure From :</div>
      {details.from}
    </div>
    <div>
      <div className="font-bold text-xs">Departure :</div>
      {details.departure}
    </div>
    <div>
      <div className="font-bold text-xs">Arrival :</div>
      {details.arrival}
    </div>
    <div>
      <div className="font-bold text-xs">Destination :</div>
      {details.destination}
    </div>
    <div>
      <div className="font-bold text-xs">No. Of Travellers :</div>
      {details.travellers}
    </div>
  </div>
);
