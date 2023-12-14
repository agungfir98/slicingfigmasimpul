"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "~/components/searchBar";
import MessageList from "./messageList";
import LoadingSpinner from "~/components/loading/loading-spinner";
import { useSearchParams } from "next/navigation";
import ChatRoom from "./chatRoom";

const MessageBox = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const searchParam = useSearchParams();
	const chatId = searchParam.get("chatId");

	useEffect(() => {
		setLoading(true);
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="flex-flex-col h-full">
			{!chatId ? (
				<div className="flex flex-col h-full px-2 py-6 ">
					<div className="px-6">
						<SearchBar />
					</div>
					{loading && <LoadingSpinner text="loading chats..." />}
					<div className="flex-1 overflow-y-auto px-6 pb-4">
						<MessageList />
					</div>
				</div>
			) : (
				<ChatRoom />
			)}
		</div>
	);
};

export default MessageBox;
