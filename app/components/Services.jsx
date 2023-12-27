const Services = () => {
    return (
      <div className="bg-black p-4 min-h-screen mt-20"id="services">
        <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100 mx-auto text-center">
            <h2 className="mt-8 text-3xl font-bold text-white md:text-5xl">My Services</h2>
            <p className="text-gray-300 mt-2 font-semibold text-lg">Domains in which I have expertise and hands-on experience.</p>
          </div>
  
          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-slate-200 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200" className="w-16 h-16 rounded-full" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">Web Development</h5>
                  <p className="text-lg text-black">Crafting seamless and responsive web applications with expertise in MERN stack technologies—MongoDB, Express.js, React.js, and Node.js. Elevating user experiences through dynamic front-end development using Next.js and sleek styling with Tailwind CSS.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200" className="w-16 h-16 rounded-full" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Python</h5>
                  <p className="text-lg text-gray-300">Unlocking the power of Python for versatile solutions. From data analysis and machine learning to backend development, leveraging Python to build robust and efficient applications tailored to your specific needs.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-slate-200 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200" className="w-16 h-16 rounded-full" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-black transition group-hover:text-secondary">Full Stack Development</h5>
                  <p className="text-lg text-black">Seamlessly bridging the gap between front-end and back-end with full stack development. Delivering comprehensive solutions by combining the artistry of user interface design with the robust functionality of server-side logic.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200" className="w-16 h-16 rounded-full" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">WordPress</h5>
                  <p className="text-lg text-gray-300">Transforming your online presence with customized WordPress solutions. Harnessing the flexibility of WordPress for a tailored online experience that aligns perfectly with your brand and goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  