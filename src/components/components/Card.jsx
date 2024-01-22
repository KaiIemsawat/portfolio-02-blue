const Card = ({
    image,
    alt,
    projectName,
    sumary,
    tools,
    link,
    linkName,
    gitLink,
}) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition lg:w-[340px] xl:w-[440px] duration-200 w-full overflow-hidden ">
                <img
                    className="h-[240px] sm:h-[320px] md:h-[240px] xl:h-[280px] w-full object-cover rounded-t-lg  duration-200"
                    src={image}
                    alt={alt}
                />
                <div className="bg-cblue-700 flex flex-col p-3 pb-4">
                    <p className="text-cyell-500 text-lg font-light overflow-hidden truncate py-2">
                        Project Name :{" "}
                        <span className="text-md text-cpink-300 font-semibold">
                            {projectName}
                        </span>
                    </p>
                    <p className="text-cyell-500 text-md font-light overflow-hidden pb-2">
                        Sumary : <span className="text-cpink-50">{sumary}</span>
                    </p>
                    <p className="text-cyell-500 text-md font-light overflow-hidden pb-2">
                        Tools : <span className="text-cpink-50">{tools}</span>
                    </p>
                    <p className="text-cyell-500 text-md font-light overflow-hidden pb-2">
                        Link :{" "}
                        <a
                            className="text-cpink-500 hover:underline"
                            href={link}
                        >
                            {linkName}
                        </a>{" "}
                        <a
                            className="text-cpink-500 hover:underline"
                            href={gitLink}
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};
export default Card;
