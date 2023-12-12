import React from "react";
import IconPerson from "../icons/person";
import { VariantProps, cva } from "class-variance-authority";
import cn from "~/utils/tailwind-merge";

const avatarVariance = cva("w-8 h-8 flex items-center justify-center", {
	variants: {
		variant: {
			default: "bg-primary-blue",
			secondary: "bg-primary-light-grey fill-black",
		},
		rouded: {
			default: "rounded-none",
			full: "rounded-full",
		},
	},
	defaultVariants: {
		variant: "default",
		rouded: "default",
	},
});

interface AvatarProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarVariance> {}

const Avatar: React.FC<AvatarProps> = ({ className, variant, rouded }) => {
	return (
		<div className={cn(avatarVariance({ className, variant, rouded }))}>
			<IconPerson
				className={cn(
					"w-6",
					variant === "secondary" ? "fill-primary-gray" : "fill-white"
				)}
			/>
		</div>
	);
};

export default Avatar;
