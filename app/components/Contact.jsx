import React from 'react';
import SocialMediaIcons from './socials';

const Contact = () => {
  return (
    <section className="bg-black dark:bg-black" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4 text-center sm:text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-5xl">
            Get in Touch
          </h2>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Whether you want to get in touch, share an idea, or simply have a conversation, I'm all ears! Feel free to shoot me an email, or take a moment to fill out the form on the right. I look forward to hearing from you!
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">LinkedIn: <a href="https://linkedin.com/in/sushanuchil" className="text-blue-500">linkedin.com/in/sushanuchil</a></p>
                    <p className="text-gray-600 dark:text-slate-400">Mail: <a href="mailto:uchilsushan36@gmail.com" className="text-blue-500">uchilsushan36@gmail.com</a></p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working hours</h3>
                    <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Your Name</label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300" name="name"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Your Email</label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300" name="email"/>
                  </div>
                  <div>
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider">Your Message</label>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
