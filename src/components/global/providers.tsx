import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="bottom-center" duration={6000} />
      {children}
    </>
  );
}

export default Providers;
