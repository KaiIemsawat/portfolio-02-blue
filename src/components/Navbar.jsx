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
            <div>
                <ui className="flex list-none">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ui>
            </div>

            {/* Hamburger */}
            <div className="hidden">
                <ListMenu />
            </div>

            {/* Mobile */}
            <div className="hidden">
                <ui>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ui>
            </div>

            {/* Social Media */}
            <div></div>
        </div>
    );
};
export default Navbar;
