import React from "react";

const useTextAreaAutoResize = (ref: React.RefObject<HTMLTextAreaElement>) => {
	const setSize = () => {
		if (!ref.current) return;

		ref.current.style.height = `auto`;
		const scrollHeight = ref.current.scrollHeight;
		const lineHeight = parseInt(
			window.getComputedStyle(ref.current).lineHeight
		);

		const line = Math.ceil(scrollHeight / lineHeight);
		const newHeight = Math.min(line * lineHeight, 100);

		ref.current.style.height = `${newHeight}px`;
	};

	return [setSize];
};
export default useTextAreaAutoResize;
