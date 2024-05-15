export interface Message {
  sender: string;
  content: string;
  date: string;
}

export interface Subscription {
  room: "1" | "2" | "3";
  subscribers: number;
}
