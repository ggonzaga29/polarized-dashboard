/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		// container: {
		//   center: true,
		//   padding: "2rem",
		//   screens: {
		//     "2xl": "1400px",
		//   },
		// },
		extend: {
			colors: {

				// --black-100: hsl(0, 0%, 11%);
				// --black-80: hsl(0%, 11%, 80%);

				// --white-100: hsl(0, 0%, 100%);
				// --white-80: hsl(0, 0%, 80%);
				// --white-40: hsl(0, 0%, 40%);
				// --white-20: hsl(0, 0%, 20%);
				// --white-10: hsl(0, 0%, 10%);
				// --white-5: hsl(0, 0%, 5%);


				shade: {
					100: "var(--shade-100)",
					80: "var(--shade-80)",
					40: "var(--shade-40)",
					20: "var(--shade-20)",
					10: "var(--shade-10)",
					5: "var(--shade-5)",
				},

				tint: {
					100: "var(--tint-100)",
					80: "var(--tint-80)",
					40: "var(--tint-40)",
					20: "var(--tint-20)",
					10: "var(--tint-10)",
					5: "var(--tint-5)",
				},

				primary: {
					brand: "var(--primary-brand)",
				}


				// border: "hsl(var(--border))",
				// input: "hsl(var(--input))",
				// ring: "hsl(var(--ring))",
				// background: "hsl(var(--background))",
				// foreground: "hsl(var(--foreground))",
				// primary: {
				//   DEFAULT: "hsl(var(--primary))",
				//   foreground: "hsl(var(--primary-foreground))",
				// },
				// secondary: {
				//   DEFAULT: "hsl(var(--secondary))",
				//   foreground: "hsl(var(--secondary-foreground))",
				// },
				// destructive: {
				//   DEFAULT: "hsl(var(--destructive))",
				//   foreground: "hsl(var(--destructive-foreground))",
				// },
				// muted: {
				//   DEFAULT: "hsl(var(--muted))",
				//   foreground: "hsl(var(--muted-foreground))",
				// },
				// accent: {
				//   DEFAULT: "hsl(var(--accent))",
				//   foreground: "hsl(var(--accent-foreground))",
				// },
				// popover: {
				//   DEFAULT: "hsl(var(--popover))",
				//   foreground: "hsl(var(--popover-foreground))",
				// },
				// card: {
				//   DEFAULT: "hsl(var(--card))",
				//   foreground: "hsl(var(--card-foreground))",
				// },
			},
			borderRadius: {
				// lg: "var(--radius)",
				// md: "calc(var(--radius) - 2px)",
				// sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				// "accordion-down": {
				//   from: { height: 0 },
				//   to: { height: "var(--radix-accordion-content-height)" },
				// },
				// "accordion-up": {
				//   from: { height: "var(--radix-accordion-content-height)" },
				//   to: { height: 0 },
				// },
			},
			animation: {
				// "accordion-down": "accordion-down 0.2s ease-out",
				// "accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}