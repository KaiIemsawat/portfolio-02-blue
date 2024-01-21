import Logo from "../assets/logo1.png";
import ListMenu from "../icons/ListMenu";

const Navbar = () => {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-cblue-700 text-cpink-50">
            {/* Logo */}
            <div>
                <img style={{ width: "50px" }} src={Logo} alt="logo" />
            </div>

            {/* Menu */}
            <ui className="hidden md:flex list-none">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ui>

            {/* Hamburger */}
            <div className="md:hidden z-10">
                <ListMenu />
            </div>

            {/* Mobile */}
            <ui className="list-none absolute top-0 left-0 w-full h-screen bg-cblue-900 flex flex-col justify-center items-center hidden">
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Works</li>
                <li className="py-6 text-4xl">Contact</li>
            </ui>

            {/* Social Media */}
            <div className="hidden"></div>
        </div>
    );
};
export default Navbar;
