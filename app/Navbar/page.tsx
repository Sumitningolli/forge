import { FaStarOfLife } from "react-icons/fa";
import { GiGolfFlag } from "react-icons/gi";

const Navbar = () => {
  return (
<nav className="fixed top-0 left-0 w-full z-50 p-5 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="flex items-center text-sm font-bold gap-1">
        <FaStarOfLife aria-hidden="true" />
        <span>Forge</span>
      </div>

      {/* Location */}
      <div className="hidden md:flex items-center text-sm font-semibold gap-1">
        <GiGolfFlag aria-hidden="true" />
        <span>Canada, Montreal</span>
      </div>

      {/* Navigation Links */}
      <div className="flex text-sm gap-4 underline">
        <a href="#manufacture">Manufacture</a>
        <a href="#">Tool library</a>
        <a href="#getintouch">Get in touch</a>
      </div>

      {/* Language Toggle */}
      <div className="hidden text-sm md:block">
        <a href="#">Eng/Fr</a>
      </div>
    </nav>
  );
};

export default Navbar;
