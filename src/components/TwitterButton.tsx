import React from "react";
import TwitterLogo from "../assets/Twitter.svg";

interface Props {
  rightMargin?: boolean;
}

const TwitterButton: React.FC<Props> = ({ rightMargin = false }) => {
  return (
    <button
      className={`bg-twitter text-white flex p-3 md:px-6 md:py-4 mb-2 w-full md:w-fit md:mb-0 items-center text-base justify-center rounded-md font-semibold ${
        rightMargin && "md:mr-8"
      }`}
    >
      <img src={TwitterLogo} className="mr-2 md:mr-4" />
      <p className="md:text-xl">Sign in with Twitter</p>
    </button>
  );
};

export default TwitterButton;
