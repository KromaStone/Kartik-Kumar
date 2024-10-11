import resume from "../assets/Kartik-Kumar-Resume.pdf"

function Footer() {
    return (
        <div className="flex xl:flex-row flex-col-reverse overflow-hidden  items-center justify-around text-sm relative top-[-40px]">

            <div className="flex space-x-2">
                <a target="_blank" href="https://wa.link/31ndpv" className="flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a target="_blank" href="https://www.behance.net/kartikkumar134" className="hidden md:flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="fab fa-behance"></i>
                </a>
                <a target="_blank" href="https://github.com/KromaStone" className="flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="fab fa-github"></i>
                </a>
                <a target="_blank" href={resume} className="flex items-center justify-center h-10 text-xl font-bold px-3 text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white ">
                    <button className=""> Download Resume</button>
                </a>
                <a target="_blank" href="https://x.com/_G_root?t=GuRZFJgSx9h2RnFKpgVxGQ&s=09" className="flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="fab fa-twitter"></i>
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/kartik-kumar-24b30b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="fab fa-linkedin"></i>
                </a>

                {/* <a target="_blank" href="mailto: kartikkumar0325@gmail.com" className="flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="far fa-envelope"></i>
                </a> */}
                <a target="_blank" href="mailto:kartikkumar0325@gmail.com" className="hidden md:flex items-center justify-center w-10 h-10 text-3xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                    <i className="far fa-envelope"></i>
                </a>

            </div>
        </div>
    )
}

export default Footer