import { create } from "zustand";

interface MessageProps {
	chatRoomId: string | null;
	chatOpen: boolean;
	setOpenChat: (arg: boolean) => void;
}

const messageStore = create<MessageProps>((set) => ({
	chatRoomId: null,
	chatOpen: false,
	setOpenChat(chatOpen) {
		set(() => ({ chatOpen }));
	},
}));

export default messageStore;
