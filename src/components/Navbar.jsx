import { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";
import ListMenu from "../icons/ListMenu";
import XMark from "../icons/XMark";
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import Mail from "../icons/Mail";
import Person from "../icons/Person";

const Navbar = () => {
    const [isNav, setIsNav] = useState(false);
    const handleClick = () => {
        setIsNav(!isNav);
    };

    // Get Screen Position
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div
            className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-cblue-800 text-cpink-50 ${
                scrollTop === 0
                    ? ""
                    : "opacity-60 shadow-2xl shadow-cblue-800/50"
            }`}
        >
            {/* Logo */}
            <div>
                <img style={{ width: "50px" }} src={Logo} alt="logo" />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex list-none">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div className="md:hidden z-10" onClick={handleClick}>
                {!isNav ? <ListMenu /> : <XMark />}
            </div>

            {/* Mobile */}
            <ul
                className={
                    !isNav
                        ? "hidden"
                        : "list-none absolute top-0 left-0 w-full h-screen bg-cblue-900 flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Works</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social Media */}
            <div className="lg:flex fixed flex-col top-[35%] left-0 hidden">
                <ul>
                    <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700">
                        <a
                            className=" flex justify-between items-center w-full text-cpink-20"
                            href=""
                        >
                            <p className="text-cpink-600 font-semibold">
                                LinkedIn
                            </p>
                            <LinkedIn />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700">
                        <a
                            className=" flex justify-between items-center w-full text-cpink-20"
                            href=""
                        >
                            <p className="text-cpink-600 font-semibold">
                                GitHub
                            </p>
                            <GitHub />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700">
                        <a
                            className=" flex justify-between items-center w-full text-cpink-20"
                            href=""
                        >
                            <p className="text-cpink-600 font-semibold">Mail</p>
                            <Mail />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700">
                        <a
                            className=" flex justify-between items-center w-full text-cpink-20"
                            href=""
                        >
                            <p className="text-cpink-600 font-semibold">
                                About
                            </p>
                            <Person />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
