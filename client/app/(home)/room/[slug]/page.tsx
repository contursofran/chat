import Chat from "@/components/chat";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex-1">
      <div className="flex flex-col justify-between items-center h-full">
        <Chat />
      </div>
    </div>
  );
}
