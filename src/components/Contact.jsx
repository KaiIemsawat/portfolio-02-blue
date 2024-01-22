const Contact = () => {
    return (
        <div
            className="w-full h-screen bg-cblue-800 flex flex-col justify-center items-center px-8"
            name="contct"
        >
            <div className="text-right pb-8 sm:pl-4 max-w-[600px] w-full">
                <p className="text-4xl font-bold inline border-b-4 border-cpink-500 text-cpink-50">
                    Contact
                </p>
                <p className="pt-6 text-cpink-50">
                    <span className="text-cyell-500">// </span>
                    Please feel free to leave a comment below.
                </p>
                <p className=" text-cpink-50">
                    <span className="text-cyell-500">// </span>
                    Or send me an email at{" "}
                    <a
                        className="text-cpink-500 underline hover:text-cyell-500 duration-700"
                        href="mailto:kaiiemsawat@gmail.com"
                    >
                        kaiiemsawat@gmail.com
                    </a>
                    .
                </p>
            </div>
            <form
                className="flex flex-col max-w-[600px] w-full text-cpink-50"
                action="https://getform.io/f/e442a93d-82d6-447e-8961-21b72e5d0b8c"
                method="post"
            >
                <input
                    className="bg-cblue-800 border border-cpink-500 rounded-md p-2 mb-2"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                />
                <input
                    className="bg-cblue-800 border border-cpink-500 rounded-md p-2 mb-2"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                />

                <textarea
                    className="bg-cblue-800 border border-cpink-500 rounded-md p-2 mb-2"
                    name="message"
                    rows="10"
                    placeholder="Message"
                    required
                ></textarea>
                <button className="bg-cpink-500 rounded-md p-3 hover:bg-cyell-500 hover:text-cpink-500 duration-700">
                    Send
                </button>
            </form>
        </div>
    );
};
export default Contact;
