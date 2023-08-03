import React from "react";
import { cva } from "class-variance-authority";

const button = cva(["py-4", "x-6", "rounded-2xl"], {
	variants: {
		intent:{
			primary: ["bg-[#1C1C1C]", "text-white"],
			secondary: ["bg-[#1C1C1C]", "text-white"],
		},

		size: {
		}
	},

})

const Button = () => {
  return (
    <div>
      <button className="bg-[#1C1C1C] text-white py-4 px-6 rounded-2xl">
        Button
      </button>

			<button className="bg-[#1C1C1C] text-white py-4 px-6 rounded-2xl">

			</button>
    </div>
  );
};

Button.displayName = 'Button';

export { Button };
