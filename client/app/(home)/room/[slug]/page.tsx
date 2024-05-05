import { BackButton } from "@/components/back-button";
import Chat from "@/components/chat";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <BackButton />
      <div className="justify-center w-full flex items-center">
        <h1 className="text-lg font-medium ">Room {params.slug}</h1>
      </div>
      <Chat />
    </div>
  );
}
