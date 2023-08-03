import React from "react";
import { cva } from "class-variance-authority";

const button = cva(["py-4", "px-6", "rounded-2xl"], {
	variants: {
		intent:{
			primary: ["bg-[#1C1C1C]", "text-white"],
			secondary: ["bg-[#1C1C1C]", "text-white"],
		},

		size: {
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