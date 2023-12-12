import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "~/utils/tailwind-merge";

const buttonVariant = cva(
	"inline-flex justify-center items-center focus-visible:outline-none disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default: "fill-primary-dark-grey px-2",
				secondaryOrangeWhite: "bg-white fill-secondary-orange",
				secondaryBlueWhite: "bg-white fill-secondary-blue",
				secondaryOrangeFill: "bg-secondary-orange fill-white",
				secondaryBlueFill: "bg-secondary-blue fill-white",
			},
			rounded: {
				full: "rounded-full",
			},
			height: {
				"12": "h-12",
			},
			weight: {
				"12": "w-12",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariant> {
	active?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, rounded, height, weight, children, ...props },
		ref
	) => {
		return (
			<button
				className={cn(
					buttonVariant({ className, variant, rounded, height, weight })
				)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	}
);
Button.displayName;

export default Button;
