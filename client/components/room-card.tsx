import Link from "next/link";

interface RoomCard {
  roomNumber: number;
  connectionString?: string;
}

export function RoomCard({ connectionString, roomNumber }: RoomCard) {
  return (
    <Link href={`room/${connectionString}`}>
      <div className="hover:border hover:border-white hover:cursor-pointer bg-black border  h-24 w-48 rounded-lg items-center justify-center flex">
        Room {roomNumber}
      </div>
    </Link>
  );
}
