import { RoomCard } from "@/components/room-card";
import { User } from "@/components/user";

export default function Home() {
  return (
    <main className="flex min-h-screen font-medium flex-col">
      <div className="flex justify-end">
        <User />
      </div>
      <h1 className="font-bold text-lg mt-4">Available rooms</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <RoomCard roomNumber={1} connectionString={"1"} />
        <RoomCard roomNumber={2} connectionString={"2"} />
        <RoomCard roomNumber={3} connectionString={"3"} />
      </div>
    </main>
  );
}
