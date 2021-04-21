import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import IconButton from '../icon-button/IconButton';
import './styles.css';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div
        className="container-xl"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <small>&copy; Copyright {year}</small>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <IconButton
              icon={<FaTwitter />}
              color="#1DA1F2"
              href="https://twitter.com/MagsMagnoli"
            />
          </div>
          <div className="ml-8">
            <a href="https://www.buymeacoffee.com/magsmagnoli" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{ height: 40, width: 150 }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
