import { RoomCard } from "@/components/room-card";

export default function Home() {
  return (
    <main className="flex  flex-col">
      <h1 className="font-bold text-lg mt-4">Available rooms</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <RoomCard roomNumber={1} connectionString={"1"} />
        <RoomCard roomNumber={2} connectionString={"2"} />
        <RoomCard roomNumber={3} connectionString={"3"} />
      </div>
    </main>
  );
}
