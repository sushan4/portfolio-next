"use client";
// components/Projects.js
import React from 'react';
import { Tilt } from 'react-tilt';

const Projects = () => {
  const projectData = [
    {
      id: 'ai-interviewer',
      imageUrl: 'interview.jpg',
      title: 'AI-Interviewer Open-AI',
      description:
        'AI-Interviewer is an innovative interview solution powered by Open AI built on the MERN stack. It generates interview questions on a given topic and evaluates speech answers by the user.',
      url: 'https://ursa-interview-4c36615e7ed7.herokuapp.com/',
    },
    {
      id: 'pocketfund',
      imageUrl: 'pocketfund.jpg',
      title: 'Pocketfund',
      description:
        'PocketFund is a DAPP(Decentralized Application) providing an open platform for innovative projects and startups aimed at providing social good. The platform enables small teams/startups to raise necessary funds via crowdfunding through ledger transactions.',
      url: 'https://devfolio.co/projects/pocketfund-a-decentralized-crowdfunding-platform-f785',
    },
    {
      id: 'laptrends',
      imageUrl: 'laptrends.jpg',
      title: 'Laptrends',
      description:
        'Laptrends is a Price Predictor for Laptops achieving a prediction accuracy of 89% via utilization of Machine Learning Technologies. It utilizes Streamlit for a simplistic yet powerful UI design.',
      url: 'https://github.com/sushan4/LapTrends',
    },
  ];

  return (
    <div className="container my-12 mx-auto md:px-6 sm:mx-auto" id="projects">
      <section className="mb-16 text-center lg:text-left">
        <h2 className="mb-8 text-center text-3xl md:text-5xl font-bold">
          Some of my Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto sm:mx-auto sm:items-center"> {/* Updated here */}
          {projectData.map((project) => (
            <div key={project.id} className="mb-6">
              <Tilt options={{ max: 25, speed: 400, glare: true, 'max-glare': 0.5 }}>
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                    <img src={project.imageUrl} className="w-full rounded-t-lg" alt={project.title} />
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 hover:opacity-100 "></div>
                    </a>
                    <svg className="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-4 md:p-6">
                    <h5 className="mb-2 text-lg font-bold">{project.title}</h5>
                    <p className="mb-4 text-sm md:text-base">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-primary px-4 md:px-6 pb-2 pt-2.5 text-xs md:text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Learn more
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;