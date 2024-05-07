import Link from "next/link";

interface RoomCard {
  roomNumber: number;
  connectionString?: string;
}

export function RoomCard({ connectionString, roomNumber }: RoomCard) {
  return (
    <Link href={`room/${connectionString}`}>
      <div className="hover:border hover:cursor-pointer bg-black border  h-20 w-40 rounded-lg items-center justify-center flex">
        Room {roomNumber}
      </div>
    </Link>
  );
}
