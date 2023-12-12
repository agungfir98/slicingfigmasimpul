"use client";
import React, { useEffect, useState } from "react";
import GroupAvatar from "~/components/grouped-avatar";
import SearchBar from "~/components/searchBar";

const MessageBox = () => {
	const [name, setName] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		setLoading(true);
		const timeout = setTimeout(() => {
			setName("agoeng");
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	if (loading) return <p>loading...</p>;

	return (
		<div>
			<SearchBar />
			<div className="">
				<div>
					<div id="left">
						<GroupAvatar />
					</div>
					<div id="mid"></div>
					<div id="right"></div>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
