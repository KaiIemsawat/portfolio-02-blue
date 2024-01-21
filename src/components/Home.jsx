import ArrowRight from "../icons/ArrowRight";

const Home = () => {
    return (
        <div className="bg-cblue-800 w-full h-screen" name="home">
            {/* Container */}
            <div className="mx-auto max-w-[980px] lg:max-w-[820px] xl:max-w-[1024px] px-8  sm:pt-16 flex flex-col justify-center h-full text-cpink-50">
                <p className="text-cpink-500 font-semibold pb-4 text-2xl">
                    Hi,
                </p>
                <h1 className="text-4xl sm:text-6xl font-bold text-cpink-50">
                    Welcome&nbsp;to&nbsp;my portfolio
                </h1>
                <h2 className="text-2xl sm:text-4xl font-light text-cpink-50">
                    I'm a full stack devloper | Software Development Engineer in
                    Test
                </h2>
                <p className="text-cpink-50 py-4 font-light">
                    some text sometext and more text and a word or more words.
                    some text sometext and more text and a word or more
                    words.some text sometext and more text and a word or more
                    words.some text sometext and more text and a word or more
                    words.
                </p>
                <div>
                    <button className="flex items-center font-light text-lg gap-4 text-cpink-500 group hover:text-cyell-500 duration-1000">
                        <p>View Work</p>
                        <span className=" group-hover:ml-[100px]  group-hover:text-cyell-500 duration-1000">
                            <ArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Home;
