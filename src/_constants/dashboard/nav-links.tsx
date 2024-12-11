import { ReactNode } from "react";
import { IoCart, IoArchive, IoPerson } from "react-icons/io5";

export type navLinkItem = {
	label: string;
	href: string;
	icon: ReactNode;
};

const navLinks: navLinkItem[] = [
	{ label: "Dashboard", href: "/dashboard", icon: <IoCart /> },
	{ label: "Products", href: "/dashboard/products", icon: <IoArchive /> },
	{ label: "Customers", href: "/dashboard/customers", icon: <IoPerson /> },
];

export default navLinks;
