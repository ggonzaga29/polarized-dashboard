import React from "react";
import { cva } from "class-variance-authority";

const button = cva(["font-semibold"], {
	variants: {
		intent:{
			primary: ["bg-[#1C1C1C]", "text-white"],
			secondary: ["bg-[#1C1C1C]", "text-white"],
		},

		size: {
			md: ["px-4", "py-2"],
		}
	},

})

const Button = ({ intent, size }) => {

	if (!intent) intent = "primary";
	if (!size) size = "md";

  return (
		<button className={button({ intent, size })}>
			Button
		</button>
  );
};

Button.displayName = 'Button';

export { Button };
