export interface Flight {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  depTime: string;
  arrTime: string;
  price: number;
}

export interface SearchedFlight {
  from: string;
  to: string;
  date: string;
}

export interface User {
  name: string;
  email: string;
  bookedFlight: Flight[] | [];
}
