import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "~/utils/tailwind-merge";

const bubleVariant = cva("", {
	variants: {
		variant: {
			me: "items-end",
		},
	},
});

interface ChatBubbleProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof bubleVariant> {}

const ChatBubble: React.FC<ChatBubbleProps> = ({ variant, className }) => {
	return (
		<div
			className={cn(
				bubleVariant({ className, variant }),
				"my-3 self-right flex flex-col"
			)}
		>
			<h1
				className={cn(
					"font-semibold",
					variant === "me" ? "text-chat-purple" : "text-chat-orange"
				)}
			>
				name here
			</h1>
			<div
				className={cn(
					"rounded-md h-fit max-w-xs px-3 py-2 text-sm leading-4 text-primary-background flex flex-col gap-2",
					variant === "me" ? "bg-chat-purpletint" : "bg-chat-orangetint"
				)}
			>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et
					voluptas iusto molestias expedita, magnam pariatur assumenda sunt!
					Laborum, alias?
				</p>
				<p>19:24</p>
			</div>
		</div>
	);
};

ChatBubble.displayName;

export default ChatBubble;
