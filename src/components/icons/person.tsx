import React from "react";
import iconVariant, { IconProps } from "~/lib/icon-variance";
import cn from "~/utils/tailwind-merge";

const IconPerson: React.FC<IconProps> = ({ className }) => {
	return (
		<svg
			className={cn(iconVariant({ className }))}
			width="31"
			height="31"
			viewBox="0 0 31 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.1755 5.02924C12.3969 5.02924 10.1463 7.27982 10.1463 10.0585C10.1463 12.8371 12.3969 15.0877 15.1755 15.0877C17.9542 15.0877 20.2048 12.8371 20.2048 10.0585C20.2048 7.27982 17.9542 5.02924 15.1755 5.02924ZM17.6901 10.0585C17.6901 8.67546 16.5585 7.54388 15.1755 7.54388C13.7924 7.54388 12.6609 8.67546 12.6609 10.0585C12.6609 11.4415 13.7924 12.5731 15.1755 12.5731C16.5585 12.5731 17.6901 11.4415 17.6901 10.0585ZM22.7193 22.6316C22.4678 21.7389 18.5702 20.117 15.1754 20.117C11.7933 20.117 7.92076 21.7263 7.63158 22.6316H22.7193ZM5.117 22.6316C5.117 19.2871 11.8185 17.6023 15.1755 17.6023C18.5325 17.6023 25.234 19.2871 25.234 22.6316V25.1462H5.117V22.6316Z"
			/>
		</svg>
	);
};

export default IconPerson;
