import React from "react";
import iconVariant, { IconProps } from "~/lib/icon-variance";
import cn from "~/utils/tailwind-merge";

const IconAngle: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			className={cn(iconVariant({ className }))}
			viewBox="0 0 11 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M9.59807 0.912508L5.77307 4.72917L1.94807 0.912506L0.773071 2.08751L5.77307 7.08751L10.7731 2.08751L9.59807 0.912508Z" />
		</svg>
	);
};

export default IconAngle;
