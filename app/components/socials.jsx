// components/SocialMediaIcons.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-500 hover:text-blue-700 cursor-pointer" size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/sushanuchil" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-800 hover:text-blue-900 cursor-pointer" size="2x" />
      </a>
      <a href="https://github.com/sushan4" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-700 cursor-pointer" size="2x" />
      </a>
      <a href="https://www.instagram.com/_sushhan" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-600 cursor-pointer" size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
