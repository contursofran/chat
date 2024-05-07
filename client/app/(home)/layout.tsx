import { BackButton } from "@/components/back-button";
import { User } from "@/components/user";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-medium p-8 flex flex-1 max-h-[calc(100vh-3.5rem)] bg-neutral-950">
      {children}
    </main>
  );
}
