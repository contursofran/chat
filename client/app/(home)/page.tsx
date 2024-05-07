import { RoomCard } from "@/components/room-card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col h-full ">
      <div className="flex flex-wrap mx-auto flex-1 gap-4 mt-3">
        <RoomCard roomNumber={1} connectionString={"1"} />
        <RoomCard roomNumber={2} connectionString={"2"} />
        <RoomCard roomNumber={3} connectionString={"3"} />
      </div>
    </div>
  );
}
