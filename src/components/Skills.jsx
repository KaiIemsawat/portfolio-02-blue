import BootstrapIcon from "../icons/BootstrapIcon";
import GitIcon from "../icons/GitIcon";
import JavaIcon from "../icons/JavaIcon";
import JsIcon from "../icons/JsIcon";
import MongoDbIcon from "../icons/MongoDbIcon";
import MySqlIcon from "../icons/MySqlIcon";
import ReactIcon from "../icons/ReactIcon";
import SpringIcon from "../icons/SpringIcon";
import TailwndIcon from "../icons/TailwndIcon";

const Skills = () => {
    return (
        <div className="bg-cblue-800 w-full h-screen" name="skills">
            {/* Container */}
            <div className="flex flex-col w-full h-full justify-center mx-auto max-w-[980px] lg:max-w-[820px] xl:max-w-[1024px] px-8 text-cpink-50">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cpink-500">
                        Skills
                    </p>
                    <p className="pt-6">
                        // These are part of the tools I have been using
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-6">
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto text-lg">
                            <JavaIcon />
                        </span>
                        <p className="my-4 ">Java</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <MySqlIcon />
                        </span>
                        <p className="my-4 ">MySQL</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <SpringIcon />
                        </span>
                        <p className="my-4 ">Spring</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <JsIcon />
                        </span>
                        <p className="my-4 ">JavaScript</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <ReactIcon />
                        </span>
                        <p className="my-4 ">React</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <MongoDbIcon />
                        </span>
                        <p className="my-4 ">NongoDB</p>
                    </div>

                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <TailwndIcon />
                        </span>
                        <p className="my-4 ">TailwindCSS</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <BootstrapIcon />
                        </span>
                        <p className="my-4 ">Bootstrap</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <span className="mx-auto">
                            <GitIcon />
                        </span>
                        <p className="my-4 ">Git</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;
