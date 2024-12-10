import cn from "@/utils/cn";

type ContainerProps = {
	className?: string;
	children: React.ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
	return (
		<div className={cn("w-11/12 max-w-screen-xl mx-auto", className ?? "")}>
			{children}
		</div>
	);
};

export default Container;
