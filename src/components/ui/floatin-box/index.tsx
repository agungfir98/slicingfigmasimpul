"use client";
import React from "react";
import FloatingWrapper from "~/components/floating-btn-wrapper";
import { useActionStore } from "~/store/action-btn.store";
import cn from "~/utils/tailwind-merge";
import MessageBox from "./messageBox";
import TaskBox from "./taskBox";

const FloatingMsgBox = () => {
	const { active } = useActionStore();
	return (
		<FloatingWrapper className={cn(active === null && "hidden")}>
			<div className="absolute bottom-16 right-0 h-[500px]">
				<div className="w-screen max-w-md h-full bg-white rounded-md flex flex-col">
					{active === "message" && <MessageBox />}
					{active === "task" && <TaskBox />}
				</div>
			</div>
		</FloatingWrapper>
	);
};

export default FloatingMsgBox;
