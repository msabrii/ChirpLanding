import HeroTablet from "../assets/Hero Image (Tablet View).png";
import HeroDesktop from "../assets/Hero Image (Desktop View).png";
import userAvatar01 from "../assets/userAvatar01.svg";
import userAvatar02 from "../assets/userAvatar02.svg";
import userAvatar03 from "../assets/userAvatar03.svg";
import userAvatar04 from "../assets/userAvatar04.svg";
import userAvatar05 from "../assets/userAvatar05.svg";
import userAvatar06 from "../assets/userAvatar06.svg";
import userAvatar07 from "../assets/userAvatar07.svg";
import userAvatar08 from "../assets/userAvatar08.svg";
import userAvatar09 from "../assets/userAvatar09.svg";
import TwitterButton from "./TwitterButton";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:px-10 lg:flex-row-reverse items-center md:justify-between px-4 lg:px-20 lg:gap-12 xl:px-32 2xl:px-64">
        <img
          src={HeroDesktop}
          className="mb-5 w-full md:w-[40%] md:hidden lg:block"
        />
        <img
          src={HeroTablet}
          className="mb-5 w-full lg:w-[40%] hidden md:block lg:hidden"
        />
        <div className="md:mb-12">
          <h2 className="font-extrabold leading-[1.2] mb-2 md:text-6xl md:leading-[1.4] lg:max-w-2xl">
            Twitter analytics taken to a whole new level.
          </h2>
          <p className="text-grey text-base leading-[1.6] mb-5 md:text-xl lg:max-w-2xl md:leading-[1.7]">
            Chirp is a suite of Twitter analytics that will help you better
            understand your audience, which tweets they like, and most
            importantly, when they are the most active on Twitter.
          </p>
          <div className="md:flex md:items-center md:mb-8">
            <TwitterButton rightMargin />
            <p className="cursor-pointer text-secondary font-bold mb-5 md:mb-0 md:text-xl">
              Learn more
            </p>
          </div>
          <PeopleRow />
          <p className="text-grey mb-5 text-xl leading-[1.6] md:max-w-xl">
            Join <span className="text-secondary font-bold">195</span> others
            who have analyzed their followers and scheduled{" "}
            <span className="text-secondary font-bold">1342</span> tweets!
          </p>
        </div>
      </div>
    </div>
  );
};

const PeopleRow = () => {
  return (
    <div className="flex w-full flex-row items-center justify-start mb-5">
      <img src={userAvatar01} className="md:w-12" />
      <img src={userAvatar02} className="-ml-6 md:w-12" />
      <img src={userAvatar03} className="-ml-6 md:w-12" />
      <img src={userAvatar04} className="-ml-6 md:w-12" />
      <img src={userAvatar05} className="-ml-6 md:w-12" />
      <img src={userAvatar06} className="-ml-6 md:w-12" />
      <img src={userAvatar07} className="-ml-6 md:w-12" />
      <img src={userAvatar08} className="-ml-6 md:w-12" />
      <img src={userAvatar09} className="-ml-6 md:w-12" />
    </div>
  );
};

export default Landing;
