import Chat from "@/components/chat";

export default function Page({ params }: { params: { slug: number } }) {
  return (
    <div className="flex-1">
      <div className="flex flex-col justify-between items-center h-full">
        <Chat roomNumber={params.slug} />
      </div>
    </div>
  );
}
