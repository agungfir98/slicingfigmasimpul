import { create } from "zustand";

interface TaskStore {
	newTask: boolean;
	toggleNewStack: (arg?: boolean) => void;
}

const taskStore = create<TaskStore>((set) => ({
	newTask: false,
	toggleNewStack(arg) {
		if (arg) {
			set(() => ({ newTask: arg }));
		}
		set(({ newTask }) => ({ newTask: !newTask }));
	},
}));

export default taskStore;
