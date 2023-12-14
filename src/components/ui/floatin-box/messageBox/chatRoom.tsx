import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Button from "~/components/button";
import { IconCross, IconArrowLeft } from "~/components/icons";
import ChatBubble from "./chatBubble";
import { useActionStore } from "~/store/action-btn.store";
import SearchBar from "~/components/searchBar";
import ChatInput from "./chatInput";

const ChatRoom = () => {
	const router = useRouter();
	const pathName = usePathname();
	const { setActive, setExpand } = useActionStore();

	const handleCloseChatBox = () => {
		router.push(pathName);
		setActive(null);
		setExpand(false);
	};

	return (
		<div className="flex h-full flex-col pb-4">
			<div className="flex border-b-2 border-primary-light-grey items-center py-3">
				<div id="left" className="flex items-center w-fit px-2">
					<Button onClick={() => router.push(pathName)}>
						<IconArrowLeft className="fill-primary-gray w-6" />
					</Button>
				</div>
				<div id="mid" className="flex-1">
					<h1 className="text-primary-blue font-semibold">
						Name of the participant here
					</h1>
					<p className="text-xs">3 participants</p>
				</div>
				<div id="right">
					<Button className="mx-2" onClick={handleCloseChatBox}>
						<IconCross className="fill-primary-gray w-4" />
					</Button>
				</div>
			</div>
			<div className="overflow-y-auto mx-1 px-2">
				<ChatBubble variant="me" />
				<ChatBubble />
				<ChatBubble />
				<ChatBubble />
				<ChatBubble variant="me" />
			</div>
			<div className="flex px-3 gap-2 mt-2 mr-2 ">
				<ChatInput />
			</div>
		</div>
	);
};

export default ChatRoom;
