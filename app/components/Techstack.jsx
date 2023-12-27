import React from 'react';

const TechStack = () => {
  return (
    <div className="container mx-auto my-36">
      <section className="text-center">
        {/* <h2 className="text-5xl font-bold mb-8">Technologies </h2> */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Python */}
          <TechCard
            bgColor="bg-blue-500"
            iconUrl="python.svg"
            title="Python"
          />

          {/* JavaScript */}
          <TechCard
            bgColor="bg-yellow-500"
            iconUrl="https://svgshare.com/i/MiM.svg"
            title="JavaScript"
          />

          {/* Next.js */}
          <TechCard
            bgColor="bg-gray-800"
            iconUrl="nextjs.svg"
            title="Next.js"
          />

          {/* React */}
          <TechCard
            bgColor="bg-indigo-500"
            iconUrl="react.svg"
            title="React"
          />

          {/* Node.js */}
          <TechCard
            bgColor="bg-green-500"
            iconUrl="nodejs.svg"
            title="Node.js"
          />

          {/* Express.js */}
          <TechCard
            bgColor="bg-yellow-500"
            iconUrl="express.svg"
            title="Express.js"
          />

          {/* MongoDB */}
          <TechCard
            bgColor="bg-green-700"
            iconUrl="mongodb.svg"
            title="MongoDB"
          />

          {/* Tailwind CSS */}
          <TechCard
            bgColor="bg-teal-500"
            iconUrl="tailwind.svg"
            title="Tailwind CSS"
          />

          {/* PHP */}
          <TechCard
            bgColor="bg-indigo-500"
            iconUrl="php.svg"
            title="PHP"
          />

          {/* WordPress */}
          <TechCard
            bgColor="bg-blue-300"
            iconUrl="wordpress.svg"
            title="WordPress"
          />

          {/* GitHub */}
          <TechCard
            bgColor="bg-gray-700"
            iconUrl="https://svgshare.com/i/MiX.svg"
            title="GitHub"
          />
        </div>
      </section>
    </div>
  );
};

const TechCard = ({ bgColor, iconUrl, title }) => {
  return (
    <div
      className={`group ${bgColor} p-4 rounded-md text-white transition-transform transform hover:scale-110 cursor-pointer`}
    >
      <img src={iconUrl} alt={title} className="w-12 h-12 mb-2 mx-auto" />
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default TechStack;
