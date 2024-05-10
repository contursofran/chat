import { RoomCard } from "@/components/room-card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col h-full ">
      <h1 className="text-xl font-bold text-start my-4 mx-8">Rooms</h1>
      <div className="flex flex-wrap mx-auto flex-1 gap-12 mt-3">
        <RoomCard roomNumber={1} connectionString={"1"} />
        <RoomCard roomNumber={2} connectionString={"2"} />
        <RoomCard roomNumber={3} connectionString={"3"} />
      </div>
    </div>
  );
}
