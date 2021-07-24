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
          <span>
            Site by{' '}
            <a
              style={{ color: 'white' }}
              href="https://twitter.com/MagsMagnoli"
            >
              @MagsMagnoli
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
