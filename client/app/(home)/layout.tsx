import { BackButton } from "@/components/back-button";
import { User } from "@/components/user";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-medium min-h-screen">
      <div className="flex justify-end">
        <User />
      </div>
      {children}
    </div>
  );
}
