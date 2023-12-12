"use client";
import React from "react";
import Button from "~/components/button";
import FloatingWrapper from "~/components/floating-btn-wrapper";
import { IconBook, IconMessage, IconThunder } from "~/components/icons";
import { useActionStore } from "~/store/action-btn.store";
import cn from "~/utils/tailwind-merge";

const FloatingActionButton = () => {
	const { expand, toggleExpand, setExpand, active, setActive } =
		useActionStore();

	const handleClickActionBtn = (arg: typeof active) => {
		if (active === arg) {
			return;
		}
		setActive(arg);
		setExpand(false);
	};
	return (
		<FloatingWrapper>
			<Button
				rounded="full"
				onClick={() => {
					toggleExpand();
					setActive(null);
				}}
				className={cn(
					!expand && active !== null ? "z-0 scale-75" : "z-50",
					"w-14 h-14 bg-primary-blue"
				)}
			>
				<IconThunder className="w-5 fill-primary-blue" />
			</Button>
			<div
				className={cn(
					"flex relative items-center align-middle flex-row-reverse text-white text-center transition-all",
					active === "task" && "flex-row",
					!expand && "translate-x-[60px] -translate-y-1 ",
					active !== null ? "gap-5" : "gap-3"
				)}
			>
				<div>
					{active === "message" && (
						<Button
							height="12"
							weight="12"
							rounded="full"
							className="absolute -z-10 right-3 w-12 h-12 bg-neutral-700"
							onClick={() => setActive(null)}
						/>
					)}
					<Button
						rounded="full"
						height="12"
						weight="12"
						className="z-50"
						variant={
							active === "message" ? "secondaryBlueFill" : "secondaryBlueWhite"
						}
						onClick={() => handleClickActionBtn("message")}
						disabled={active === "message"}
					>
						<IconMessage className="w-6" />
					</Button>
				</div>
				<div className={cn(!expand && !active && "translate-x-16")}>
					<div>
						{active === "task" && (
							<Button
								rounded="full"
								height="12"
								weight="12"
								className="absolute -z-10 right-3 w-12 h-12 bg-neutral-700"
								onClick={() => setActive(null)}
							/>
						)}

						<Button
							rounded="full"
							height="12"
							weight="12"
							variant={
								active === "task"
									? "secondaryOrangeFill"
									: "secondaryOrangeWhite"
							}
							onClick={() => handleClickActionBtn("task")}
							disabled={active === "task"}
						>
							<IconBook className="w-7" />
						</Button>
					</div>
				</div>
			</div>
		</FloatingWrapper>
	);
};

export default FloatingActionButton;
