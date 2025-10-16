// src/types.d.ts
export interface DayActivities {
  label: string; // 'Morning', 'Afternoon', 'Evening'
  activities: string[];
}

export interface DayEntry {
  dayLabel: string; // 'Day 1'
  date: string; // '27th November'
  image: string; // URL or base64 or local asset path
  headline: string; // 'Arrival in Singapore & City Exploration'
  times: DayActivities[];
}


export interface Hotel {
  name: string;
  checkin: string;
  checkout: string;
  nights: string | number;
  city: string;
}

export interface ActivityRow {
  city: string;
  activity: string;
  type: string;
  timeRequired: string;
}

export interface Flight {
  depfrom: string;
  dep: string;
  arr: string;
  dest: string;
}

export interface PaymentRow {
  due: string;
  amount: string;
}

export interface PaymentPlanInputProps {
  rows: PaymentRow[];
  setRows: (rows: PaymentRow[]) => void;
  totalAmount: string;
  setTotalAmount: (amt: string) => void;
  tcs: string;
  setTcs: (tcs: string) => void;
}

export interface Overview {
  name: string;
  title: string;
}

export interface ItineraryData {
  overview: Overview;
  days: DayEntry[];
  hotels: Hotel[];
  activities: ActivityRow[];
  flightSummary: FlightSummaryItem[];
  paymentRows: PaymentRow[];
  totalAmount: string;
  tcs: string;
  visaDetails: {
    visaType: string;
    validity: string;
    processingDate: string;
  };
}

export interface FlightSummaryItem {
  date: string;
  airline: string;
  flightCode: string;
  from: string;
  to: string;
}

export interface VisaDetails {
  visaType: string;
  validity: string;
  processingDate: string;
}