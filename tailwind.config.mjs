/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: "#d3d3d3",
					200: "#a6a6a6",
					300: "#7a7a7a",
					400: "#4d4d4d",
					500: "#212121",
					600: "#1a1a1a",
					700: "#141414",
					800: "#0d0d0d",
					900: "#070707"
				},
				'secondary': {
					100: "#d3d3d3",
					200: "#a6a6a6",
					300: "#7a7a7a",
					400: "#4d4d4d",
					500: "#212121",
					600: "#1a1a1a",
					700: "#141414",
					800: "#0d0d0d",
					900: "#070707"
				},
			}
		},
	},
	plugins: [],
}
