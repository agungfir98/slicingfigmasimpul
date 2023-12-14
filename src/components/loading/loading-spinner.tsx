import React from "react";
import { IconSpinner } from "~/components/icons";

const LoadingSpinner: React.FC<{ text?: string }> = ({ text }) => {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<IconSpinner className="w-20" />
			<h1 className="font-semibold">{text}</h1>
		</div>
	);
};

export default LoadingSpinner;
