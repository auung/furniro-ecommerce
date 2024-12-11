import Image from "next/image";
import cn from "@/utils/cn";
import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { NAV_LINKS } from "@/_constants/dashboard/nav-links";

const Navbar = () => {
  return (
    <nav className="sticky flex h-full flex-col gap-4 bg-secondary p-6">
      <h1 className={cn("text-4xl font-bold", montserrat.className)}>
        <Link href={"./dashboard"} className="flex gap-1">
          <Image
            src={"/icons/logo.png"}
            alt={"furniro-icon"}
            width={50}
            height={32}
          />
          <span>Furniro</span>
        </Link>
      </h1>
      <ul className="">
        {NAV_LINKS.map((link, idx) => {
          return (
            <li key={idx}>
              <Link
                href={link.href}
                className="text-neutral flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-primary hover:text-accent"
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
