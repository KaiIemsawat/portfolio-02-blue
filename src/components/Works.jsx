import calculator from "../assets/projects/calculator.png";
import estate from "../assets/projects/estate-01.png";
import marketing from "../assets/projects/marketplace.png";
import notes from "../assets/projects/notes.png";
import recipe from "../assets/projects/recipeRoom.png";
import portfolio from "../assets/projects/portfolio.png";
import trailss from "../assets/projects/trailss.png";
import Card from "./components/Card";

const Works = () => {
    return (
        <div className="bg-cblue-800 w-full  mt-32 sm:mt-16" name="works">
            <div className="flex flex-col w-full h-full justify-center mx-auto max-w-[980px] lg:max-w-[820px] xl:max-w-[1024px] px-8 text-cpink-50">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cpink-500">
                        Works
                    </p>
                    <p className="pt-6">
                        <span className="text-cyell-500">// </span>
                        Check out some of my recent works
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap gap-8 justify-between">
                    {/* each works */}
                    <Card
                        image={estate}
                        alt="Estate"
                        projectName="ZukkiiEstate"
                        sumary="A practicce project. This project is to focus on apply Redux into MERN stack and integrating OAth login feature"
                        tools="MERN, Redux, OAuth, TailwindCSS, Firebase"
                        link="https://mern-estate-069k.onrender.com/"
                        linkName="Estate"
                        gitLink="https://github.com/KaiIemsawat/estate-deploy-01"
                    />
                    <Card
                        image={marketing}
                        alt="e-comerce"
                        projectName="AmaZukk"
                        sumary="This application allows user to browse and seearch for the items they would like to see. Was deployed on Vercel"
                        tools="Typescript, NextJS, MongoDB, TailwindCSS"
                        link="https://nextjs-ts-ecommerce-kaiiemsawat.vercel.app/"
                        linkName="E-Comerce"
                        gitLink="https://github.com/KaiIemsawat/Nextjs-TS-ecomerce"
                    />
                    <Card
                        image={notes}
                        alt="notes"
                        projectName="Notes"
                        sumary="This is an individual project using TS with Mern and styled with Bootstrap. This application was deployed on AWS EC2"
                        tools="Typescript, MongoDB, Bootstrap, Authentication"
                        gitLink="https://github.com/KaiIemsawat/ts-notes-app"
                    />
                    <Card
                        image={trailss}
                        alt="Trailss"
                        projectName="Trailss"
                        sumary="The final project for class using full stack MERN. Styled with TailwindCSS. This application was deployed on AWS EC2"
                        tools="Javascript, React, Express, Node, MongoDB, TailwindCSS, AWS(EC2)"
                        gitLink="https://github.com/KaiIemsawat/trailss"
                    />
                    <Card
                        image={recipe}
                        alt="recipe blog app"
                        projectName="RecipeRoom"
                        sumary="This is a full stack MERN. It is styled with plain CSS. This application was deployed on AWS EC2"
                        tools="Typescript, NextJS, MongoDB, TailwindCSS"
                        gitLink="https://github.com/KaiIemsawat/recipe-blog"
                    />
                    <Card
                        image={calculator}
                        alt="calculator"
                        projectName="calculator"
                        sumary="Created with React and TailwindCSS. The main purpose was to practice implement login to an application."
                        tools="Javascript, React, TailwindCSS"
                        gitLink="https://github.com/KaiIemsawat/reactCalculator"
                    />
                </div>
            </div>
        </div>
    );
};
export default Works;
