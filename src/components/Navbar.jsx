import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import Logo from "../assets/logo.png";
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
            className={`fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-cblue-800 text-cpink-50 ${
                scrollTop === 0 && !isNav
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
                <li className="hover:text-cpink-500 hover:underline">
                    <Link to="home" smooth>
                        Home
                    </Link>
                </li>
                <li className="hover:text-cpink-500 hover:underline">
                    <Link to="about" smooth>
                        About
                    </Link>
                </li>
                <li className="hover:text-cpink-500 hover:underline">
                    <Link to="skills" smooth>
                        Skills
                    </Link>
                </li>
                <li className="hover:text-cpink-500 hover:underline">
                    <Link to="works" smooth>
                        Works
                    </Link>
                </li>
                <li className="hover:text-cpink-500 hover:underline">
                    <Link to="contact" smooth>
                        Contact
                    </Link>
                </li>
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
                        : "list-none absolute top-0 left-0 w-full h-screen bg-cblue-900 flex flex-col justify-center items-center "
                }
            >
                <li className="py-6 text-4xl hover:text-cpink-500 hover:underline">
                    <Link to="home" smooth onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-cpink-500 hover:underline">
                    <Link to="about" smooth onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-cpink-500 hover:underline">
                    <Link to="skills" smooth onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-cpink-500 hover:underline">
                    <Link to="works" smooth onClick={handleClick}>
                        Works
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:text-cpink-500 hover:underline">
                    <Link to="contact" smooth onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Media */}
            <div className="lg:flex fixed flex-col top-[35%] left-0 hidden">
                <ul>
                    <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700">
                        <a
                            className=" flex justify-between items-center w-full text-cpink-20"
                            href="https://www.linkedin.com/in/kaiiemsawat/"
                            target="_blank"
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
                            href="https://github.com/KaiIemsawat"
                            target="_blank"
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
                            href="mailto:kaiiemsawat@gmail.com"
                        >
                            <p className="text-cpink-600 font-semibold">Mail</p>
                            <Mail />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-700">
                        <Link
                            className=" flex justify-between items-center w-full text-cpink-20"
                            to="about"
                            smooth
                        >
                            <p className="text-cpink-600 font-semibold">
                                About
                            </p>
                            <Person />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
