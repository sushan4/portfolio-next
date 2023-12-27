const About=()=>{
    return(
        <div className="justify-center flex-1  py-4 mx-auto lg:py-6 md:px-6 mt-5" id="about">

            <div className="flex flex-wrap ">

                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">

                    <img src="about1.jpg" alt=""

                        className="relative z-40 object-cover w-full h-96 rounded-3xl"/>

                </div>

                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">

                    <h2 className="mb-4 text-5xl font-bold text-white dark:text-white">

                        About Me

                    </h2>

                    <p className="mb-10 text-lg leading-7 text-white dark:text-white">

                    I am a proficient upcoming software engineer with extensive experience in full-stack development. Specializing in the<span className="text-slate-500"> MERN stack<span/></span>, PHP, and WordPress, I bring a wealth of expertise to crafting dynamic and user-centric web applications. Additionally, my proficiency in Python allows me to deliver versatile solutions, ranging from data analysis to scripting and automation.

 I am dedicated to staying abreast of industry trends, ensuring that the solutions I deliver are both innovative and in line with current best practices.

My approach is characterized by a focus on clean, maintainable code, and a keen eye for architecture that facilitates scalability. I am passionate about transforming ideas into tangible, high-quality results and thrive in collaborative, cross-functional environments.

                    </p>

                    <a href="#services"

                        className="px-4 py-3 text-white transition-all transform border border-white rounded-3xl hover:bg-slate-500 dark:border-white dark:hover:bg-slate-500 dark:hover:border-white dark:text-white hover:text-gray-100">

                        My Services

                    </a>

                </div>

            </div>

        </div>
    )
}

export default About;