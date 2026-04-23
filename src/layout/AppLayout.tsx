import { ReactNode } from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
