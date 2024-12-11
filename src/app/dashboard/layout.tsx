import Navbar from "@/ui/dashboard/navbar";
import cn from "@/utils/cn";
import { lato } from "@/app/fonts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(lato.className, "flex h-svh gap-4")}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
