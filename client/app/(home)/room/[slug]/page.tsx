import { BackButton } from "@/components/back-button";
import Chat from "@/components/chat";
import { cookies } from "next/headers";

export default function Page({ params }: { params: { slug: string } }) {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="flex-1">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="justify-left w-full flex items-center">
          {/* <h1 className="text-lg font-medium ">Room {params.slug}</h1> */}
        </div>
        <Chat />
      </div>
    </div>
  );
}
