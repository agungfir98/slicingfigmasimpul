import React from "react";
import Button from "~/components/button";
import { Dropdown, MenuProps } from "antd";
import { IconAngle } from "~/components/icons";
import TaskItem from "./taskItem";
import { useQuery } from "react-query";
import { api } from "~/lib/axios/api";
import taskStore from "~/store/task-box.store";
import dayjs from "dayjs";
import LoadingSpinner from "~/components/loading/loading-spinner";

const menuItem: MenuProps["items"] = [
	{
		key: "1",
		label: "item satu",
	},
	{
		key: "2",
		label: "item dua",
	},
];

interface ApiTodoType {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}

const TaskBox = () => {
	const { newTask, toggleNewStack } = taskStore();

	const { data, isLoading } = useQuery({
		queryFn: (): Promise<ApiTodoType[]> => {
			return api
				.get<ApiTodoType[]>("/", { params: { _limit: 10 } })
				.then((res) => {
					console.log(res.data);
					return res.data;
				});
		},
		queryKey: ["todos"],
		refetchOnWindowFocus: false,
	});

	return (
		<div className="h-full flex flex-col">
			<div className="px-3 py-2 flex justify-between">
				<div className="flex items-center">
					<Dropdown menu={{ items: menuItem }} trigger={["click"]}>
						<div className="flex gap-1 items-center text-xs border border-primary-gray px-1 py-2 bg-white rounded-md hover:cursor-pointer select-none ml-[70px]">
							<p className="text-primary-grey">My Task</p>
							<IconAngle className="w-3 fill-primary-gray self-end" />
						</div>
					</Dropdown>
				</div>
				<Button
					className="bg-primary-blue rounded-md text-white px-3 py-2 text-sm"
					onClick={() => toggleNewStack()}
				>
					New Task
				</Button>
			</div>
			<div className="h-full overflow-y-scroll mr-1 mb-3">
				{isLoading && <LoadingSpinner text="loading tasks..." />}
				{data?.map((v, i) => (
					<TaskItem
						key={i}
						date={dayjs("31/12/2023", "DD/MM/YYYY")}
						isFinished={v.completed}
						title={v.title}
					/>
				))}
				{newTask && <TaskItem date={dayjs()} isFinished={false} />}
			</div>
		</div>
	);
};

export default TaskBox;
