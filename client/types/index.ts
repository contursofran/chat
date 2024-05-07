export interface UserData {
  name: string;
  avatar: string;
}

export interface Message {
  user: UserData;
  content: string;
  timestamp: string;
}
