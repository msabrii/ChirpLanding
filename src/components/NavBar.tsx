import HamburgerMenu from "../assets/Hamburger Menu.svg";
import TwitterButton from "../pages/TwitterButton";

const NavBar = () => {
  return (
    <div className="mt-4 md:mt-6 flex px-4 md:px-10 lg:px-20 xl:px-32 flex-row w-full justify-between items-center mb-6 md:mb-8 2xl:px-64">
      <p className="text-primary italic font-bold text-xl md:text-2xl">
        Chirp.
      </p>
      <img src={HamburgerMenu} className="sm:block md:hidden" />

      <div className="flex-row font-normal text-grey items-center justify-end gap-6 md:gap-8 md:text-xl hidden md:flex">
        <p>Home</p>
        <p>Pricing</p>
        <p>FAQ</p>
        <TwitterButton />
      </div>
    </div>
  );
};

export default NavBar;
