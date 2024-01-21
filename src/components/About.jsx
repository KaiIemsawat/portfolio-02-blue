const About = () => {
    return (
        <div
            className="w-full h-screen bg-cblue-800 text-cpink-50 px-8"
            name="about"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[980px] lg:max-w-[820px] xl:max-w-[1024px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 sm:pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-cpink-500">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[980px] lg:max-w-[820px] xl:max-w-[1024px] w-full sm:grid sm:grid-cols-2 gap-8">
                    <div>
                        <p className="sm:text-right text-4xl font-bold">
                            Hi,my name is{" "}
                            <span className="text-cpink-200">Kai.</span> Very
                            nice to meet you. Please feel free to look around
                        </p>
                    </div>
                    <div>
                        <p className="text-cpink-50 font-light">
                            I am an enthusiastic individual with a passion for
                            continuous growth and learning. Currently employed
                            as a Data Test Engineer at Pluto TV, I have
                            demonstrated my dedication to the field of
                            technology. My insatiable thirst for knowledge led
                            me to embark on a transformative journey where I
                            attended a coding bootcamp at Coding Dojo, eager to
                            expand my skill set. Through dedication and hard
                            work, I successfully transitioned into a Full Stack
                            Software Developer role. This transition is a
                            testament to my relentless pursuit of excellence and
                            my commitment to mastering every facet of software
                            development. My unique blend of testing expertise
                            and coding proficiency equips me with a well-rounded
                            understanding of the software development lifecycle.
                            I am excited to embrace this next chapter, armed
                            with a diverse skill set that enables me to
                            contribute innovatively and effectively to the world
                            of software development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
