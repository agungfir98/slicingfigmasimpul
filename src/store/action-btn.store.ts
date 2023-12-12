import { create } from "zustand";

type ActionProps = {
	expand: boolean;
	toggleExpand: () => void;
	setExpand: (arg: boolean) => void;
	active: "message" | "task" | null;
	setActive: (arg: ActionProps["active"]) => void;
};

export const useActionStore = create<ActionProps>((set) => ({
	expand: false,
	toggleExpand() {
		set(({ expand }) => ({ expand: !expand }));
	},
	setExpand(expand) {
		set(() => ({ expand }));
	},
	active: null,
	setActive(active) {
		set(() => ({ active }));
	},
}));
