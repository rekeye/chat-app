/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
			colors: {
				brown: {
					50: "#F6F4F3",
          100: "#EDE9E6",
          200: "#D2C8C2",
          300: "#B7A79D",
          400: "#816653",
          500: "#4B2409",
          600: "#442008",
          700: "#2D1605",
          800: "#221004",
          900: "#170B03",
				}
			}
		}
  },
  plugins: []
};
