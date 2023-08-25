import React from "react";
import TwitterLogo from "../assets/Twitter.svg";

interface Props {
  rightMargin?: boolean;
  text?: string;
  mb?: string;
  fullWidth?: boolean;
}

const TwitterButton: React.FC<Props> = ({
  rightMargin = false,
  text = "Sign in with Twitter",
  mb = "mb-2",
  fullWidth = false,
}) => {
  return (
    <button
      className={`bg-twitter text-white flex p-3 md:px-6 md:py-4 ${mb} w-full ${
        !fullWidth && "md:w-fit"
      } md:mb-0 items-center text-base justify-center rounded-md font-semibold ${
        rightMargin && "md:mr-8"
      }`}
    >
      <img src={TwitterLogo} className="mr-2 md:mr-4" />
      <p className="md:text-xl whitespace-nowrap">{text}</p>
    </button>
  );
};

export default TwitterButton;
