import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "~/utils/tailwind-merge";
import IconSearch from "../icons/search";
import Button from "../button";

const searchBarVariant = cva(
	"inline-flex w-full outline outline-2 rounded-sm px-10",
	{
		variants: {
			variant: {
				outlined: "outline-primary-gray",
			},
		},
		defaultVariants: {
			variant: "outlined",
		},
	}
);

export interface SearchBarProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof searchBarVariant> {}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
	({ className, variant }, ref) => {
		return (
			<div
				className={cn(
					searchBarVariant({ className, variant }),
					"rounded-sm max-h-10"
				)}
				ref={ref}
			>
				<input
					placeholder="Search"
					className={cn("focus:ring-0 focus-visible:outline-none flex-1")}
				/>
				<Button>
					<IconSearch className="w-4 fill-black" />
				</Button>
			</div>
		);
	}
);

SearchBar.displayName;

export default SearchBar;
