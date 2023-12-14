import React, {
	TextareaHTMLAttributes,
	useEffect,
	useRef,
	useState,
} from "react";
import Button from "~/components/button";
import useTextAreaAutoResize from "~/lib/useAutoresize";

const ChatInput = () => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [value, setValue] = useState("");
	const [setSize] = useTextAreaAutoResize(textAreaRef);

	useEffect(() => {
		setSize();
	}, [setSize, value]);

	const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value);
	};

	return (
		<>
			<textarea
				ref={textAreaRef}
				placeholder="Type a new message"
				onChange={handleChange}
				rows={1}
				className="flex flex-1 max-w-full px-2 border-1 border border-primary-gray rounded-md resize-none py-1 h-full"
			/>
			<Button className="bg-primary-blue text-white h-full max-h-8 items-center flex border-0 rounded-md">
				send
			</Button>
		</>
	);
};

export default ChatInput;
