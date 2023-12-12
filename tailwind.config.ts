import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					blue: "var(--main)",
					background: "var(--background-color)",
					gray: "var(--bg-second)",
					"light-grey": "var(--bg-third)",
				},
				secondary: {
					orange: "var(--tint-orange)",
					blue: "var(--tint-blue)",
					red: "var(--tint-red)",
					yellow: "var(--tint-yellow)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
