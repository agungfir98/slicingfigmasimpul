"use client";
import React from "react";
import FloatingWrapper from "~/components/floating-btn-wrapper";
import { useActionStore } from "~/store/action-btn.store";
import cn from "~/utils/tailwind-merge";
import MessageBox from "./mesasageBox";

const FloatingMsgBox = () => {
	const { active } = useActionStore();
	return (
		<FloatingWrapper className={cn(active === null && "hidden")}>
			<div className="absolute bottom-16 right-0">
				<div className="bg-white w-screen max-w-md h-[400px] rounded-md px-8 py-6">
					{active === "message" && <MessageBox />}
					{active === "task" && (
						<div>
							<h1>hehehe</h1>
						</div>
					)}
				</div>
			</div>
		</FloatingWrapper>
	);
};

export default FloatingMsgBox;
