import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="mb-4 text-xl font-semibold">Follow Us</div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
            <FontAwesomeIcon icon={faPinterestP} className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <p>&copy; 2024 MyLuxuryJewelry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
