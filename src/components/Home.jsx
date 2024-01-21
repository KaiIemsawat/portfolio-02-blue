import ArrowRight from "../icons/ArrowRight";

const Home = () => {
    return (
        <div className="bg-cblue-800 w-full h-screen" name="home">
            {/* Container */}
            <div className="mx-auto max-w-[980px] lg:max-w-[820px] xl:max-w-[1024px] px-8 flex flex-col justify-center h-full text-cpink-50">
                <p className="text-cpink-500 font-semibold pb-4 text-2xl">
                    Hi,
                </p>
                <h1 className="text-4xl sm:text-6xl font-bold text-cpink-50">
                    Welcome&nbsp;to&nbsp;my&nbsp;portfolio
                </h1>
                <h2 className="text-2xl sm:text-4xl font-light text-cpink-50">
                    I'm a full stack devloper | Software Development Engineer in
                    Test
                </h2>
                <p className="text-cpink-50 py-4 font-light">
                    I am an enthusiastic individual with a passion for
                    continuous growth and learning. Currently employed as a Data
                    Test Engineer at Pluto TV, I have demonstrated my dedication
                    to the field of technology. My insatiable thirst for
                    knowledge led me to embark on a transformative journey where
                    I attended a coding bootcamp at Coding Dojo, eager to expand
                    my skill set. Through dedication and hard work, I
                    successfully transitioned into a Full Stack Software
                    Developer role. This transition is a testament to my
                    relentless pursuit of excellence and my commitment to
                    mastering every facet of software development. My unique
                    blend of testing expertise and coding proficiency equips me
                    with a well-rounded understanding of the software
                    development lifecycle. I am excited to embrace this next
                    chapter, armed with a diverse skill set that enables me to
                    contribute innovatively and effectively to the world of
                    software development.
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
