import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import cn from "~/utils/tailwind-merge";

const floatingVariant = cva("absolute", {
	variants: {
		position: {
			bottomRight: "bottom-5 right-5",
		},
	},
	defaultVariants: {
		position: "bottomRight",
	},
});

interface FloatingProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof floatingVariant> {}

const FloatingWrapper = React.forwardRef<HTMLDivElement, FloatingProps>(
	({ position, className, children }, ref) => {
		return (
			<div className={cn(floatingVariant({ className, position }))} ref={ref}>
				<div className="inline-flex flex-row-reverse gap-3 items-end justify-center relative">
					{children}
				</div>
			</div>
		);
	}
);

FloatingWrapper.displayName;

export default FloatingWrapper;
