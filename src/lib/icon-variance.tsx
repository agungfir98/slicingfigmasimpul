import { cva, VariantProps } from "class-variance-authority";

const iconVariant = cva("w-4");

export default iconVariant;

export interface IconProps
	extends React.SVGProps<SVGSVGElement>,
		VariantProps<typeof iconVariant> {}
