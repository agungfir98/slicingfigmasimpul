import React, { useCallback } from "react";
import GroupAvatar from "~/components/grouped-avatar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MessageList = () => {
	const pathName = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);
			return params.toString();
		},
		[searchParams]
	);

	const handleClickChat = (chatId: string) => {
		router.push(pathName + "?" + createQueryString("chatId", chatId));
	};

	const data = Array(5).fill(0);
	const unread = true;

	return (
		<>
			{data.map((_, i) => (
				<div
					key={i}
					className="border-b border-1 last:border-none border-primary-gray flex items-center py-6 gap-2"
				>
					<div id="left" className="">
						<GroupAvatar />
					</div>
					<div id="mid" className="text-primary-background">
						<div className="flex gap-2 w-full justify-between">
							<p
								className="font-bold text-primary-blue leading-4 hover:cursor-pointer"
								onClick={() => handleClickChat("someRandomUUId")}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
								perferendis!
							</p>
							<p className="px-1 whitespace-nowrap">date place</p>
						</div>
						<p className="font-bold text-sm">sender name</p>
						<p className="text-sm leading-3">truncated message</p>
					</div>
					{unread && (
						<div className="bg-red-400 px-1 w-2 h-2 rounded-full"></div>
					)}
				</div>
			))}
		</>
	);
};

export default MessageList;
