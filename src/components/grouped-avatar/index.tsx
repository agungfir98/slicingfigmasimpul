import React from "react";
import Avatar from "../avatar";
import cn from "~/utils/tailwind-merge";

const GroupAvatar = () => {
	const people = Array(2).fill(0);

	return (
		<div className="flex flex-row -space-x-4">
			{people.map((_, i) => (
				<Avatar
					key={i}
					rouded="full"
					variant={i === people.length - 1 ? "default" : "secondary"}
					className={cn("")}
				/>
			))}
		</div>
	);
};

export default GroupAvatar;
