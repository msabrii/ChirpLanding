import checkmark from "../assets/Checkmark.svg";
import TwitterButton from "../components/TwitterButton";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center md:px-10 px-4 lg:px-20 xl:px-32 2xl:px-64 mt-16 mb-16">
      <h2 className="mb-2 font-bold text-center">One simple price plan.</h2>
      <p className="mb-12 text-center text-grey opacity-80 max-w-[30rem]">
        Start growing your Twitter account by analyzing your follower's patterns
      </p>

      <div className="bg-[#FBF8F3] flex flex-col items-start justify-center w-full py-8 px-4 border-2 rounded-md border-[#fad99b] max-w-md">
        <div className="px-5">
          <div>
            <p className="text-grey opacity-80 text-xl mb-2">Monthly</p>
            <span className="flex items-end mb-4">
              <p className="font-extrabold text-5xl mr-1">$9</p>
              <p className="text-grey opacity-80 text-xl">/mo</p>
            </span>
          </div>
          <hr className="border w-full"></hr>
          <div className="flex mt-4 text-grey text-xs items-center justify-start">
            <img src={checkmark} className="mr-4" />
            <p>Unlimited* scheduled tweets and threads.</p>
          </div>
          <div className="flex mt-4 text-grey text-xs items-center justify-start">
            <img src={checkmark} className="mr-4" />
            <p>Schedule up to 3 weeks in advance.</p>
          </div>
          <div className="flex mt-4 text-grey text-xs items-center justify-start">
            <img src={checkmark} className="mr-4" />
            <p className="max-w-[19rem]">Real-time audience analytics tracking up to 5k followers.</p>
          </div>
          <hr className="border w-full mt-4 mb-4"></hr>
        </div>
        <TwitterButton text="Start Trial with Twitter" mb="mb-0" fullWidth />
      </div>
    </div>
  );
};

export default Pricing;
