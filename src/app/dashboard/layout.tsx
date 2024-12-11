"use client";

import Navbar from "@/ui/dashboard/navbar";
import cn from "@/utils/cn";
import { lato, montserrat } from "@/app/fonts";
import { usePathname } from "next/navigation";
import { getPageHeading } from "@/_constants/dashboard/nav-links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const pageHeading = getPageHeading(pathName);

  return (
    <div className={cn(lato.className, "flex h-svh")}>
      <Navbar />
      <div className="p-6">
        <h3 className={cn("text-3xl font-light")}>{pageHeading}</h3>
        {children}
      </div>
    </div>
  );
};

export default Layout;
