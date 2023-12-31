import TwitterBlack from "../assets/Twitter (Black).svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between md:px-10 px-4 lg:px-20 xl:px-32 2xl:px-64 mt-4 mb-4 flex-wrap md:flex-nowrap">
      <p className="text-primary italic font-bold text-xl md:text-2xl mb-2 md:mb-0 sm:w-fit w-full">
        Chirp.
      </p>
      <div className="flex items-center sm:w-fit w-full justify-between sm:justify-center text-black gap-5 font-semibold whitespace-nowrap">
        <img src={TwitterBlack} />
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
    </div>
  );
};

export default Footer;
