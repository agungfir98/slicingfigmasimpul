"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FloatingMsgBox from "~/components/ui/floatin-box";
import FloatingActionButton from "~/components/ui/floating-action-btn";

const queryClient = new QueryClient();
const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<FloatingMsgBox />
			<FloatingActionButton />
			{children}
		</QueryClientProvider>
	);
};

export default RootLayout;
