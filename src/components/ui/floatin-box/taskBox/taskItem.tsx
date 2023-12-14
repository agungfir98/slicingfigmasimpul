import {
	Checkbox,
	DatePicker,
	DatePickerProps,
	Dropdown,
	MenuProps,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
	IconAngle,
	IconClock,
	IconPencil,
	IconThreeDot,
} from "~/components/icons";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import cn from "~/utils/tailwind-merge";
import useTextAreaAutoResize from "~/lib/useAutoresize";
import Button from "~/components/button";

dayjs.extend(relativeTime);

interface TaskItemProps {
	isFinished: boolean;
	title?: string;
	desc?: string;
	date: Dayjs | null;
}

const items: MenuProps["items"] = [
	{
		key: "1",
		label: <p className="text-secondary-red">Delete</p>,
	},
];

const TaskItem: React.FC<TaskItemProps> = ({
	date,
	desc,
	isFinished = false,
	title = "placeholder title",
}) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [itemdate, setItemDate] = useState<Dayjs | null>(date);
	const [itemDesc, setDesc] = useState<string | undefined>(desc);
	const [itemFinished, setItemFinished] = useState<boolean>(isFinished);
	const [collapse, setColapse] = useState<boolean>(isFinished);

	const [resize] = useTextAreaAutoResize(textAreaRef);

	const handleChangeDate: DatePickerProps["onChange"] = (value) => {
		setItemDate(value);
	};

	useEffect(() => {
		resize();
	}, [desc, resize]);

	return (
		<div className="py-5 px-8 border-b border-primary-gray last:border-b-0 flex flex-col gap-2">
			<div className="flex gap-2 text-sm items-center">
				<Checkbox
					checked={itemFinished}
					value={itemFinished}
					onChange={(e) => setItemFinished(e.target.checked)}
				/>
				<h1
					className={cn(
						itemFinished && "line-through text-primary-gray",
						"flex-1"
					)}
				>
					{title}
				</h1>
				<p className="text-secondary-red">{itemdate?.fromNow(true)} left</p>
				<p className="text-xs">{date?.format("DD/MM/YYYY")}</p>
				<Button className="w-fit" onClick={() => setColapse((prev) => !prev)}>
					<IconAngle
						className={cn(
							collapse ? "rotate-180" : "rotate-0 ",
							"transition-transform fill-primary-gray w-3"
						)}
					/>
				</Button>
				<Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight">
					<div className="py-2 px-1 hover:cursor-pointer">
						<IconThreeDot className="fill-primary-gray w-3" />
					</div>
				</Dropdown>
			</div>
			<div className={cn(collapse ? "hidden" : "flex", "flex-col gap-2 px-6")}>
				<div className="flex gap-3">
					<IconClock
						className={cn(
							date === null ? "fill-primary-gray" : "fill-primary-blue",
							"w-4"
						)}
					/>
					<DatePicker
						format={"DD/MM/YYYY"}
						value={itemdate}
						onChange={handleChangeDate}
					/>
				</div>
				<div className={"flex gap-3 items-start"}>
					<div onClick={() => textAreaRef.current?.focus()}>
						<IconPencil
							className={cn(
								itemDesc ? "fill-primary-blue" : "fill-primary-gray",
								"w-4"
							)}
						/>
					</div>
					<textarea
						ref={textAreaRef}
						className={cn(
							"resize-none w-full px-1",
							"border-none",
							"focus-visible:outline-primary-gray"
						)}
						rows={1}
						value={itemDesc}
						placeholder="no description"
						onChange={(e) => setDesc(e.currentTarget.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default TaskItem;
