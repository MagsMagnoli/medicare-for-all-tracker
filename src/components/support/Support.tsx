import React from 'react';
import './styles.css';

export const Support = () => {
  return (
    <section className="section">
      <div className="container-xl">
        <h2 className="text-center">Support My Work</h2>
        <div style={{ display: 'grid', placeContent: 'center' }}>
          <a
            className="donate-link mt-4"
            href="https://buymeacoffee.com/magsmagnoli"
            target="_blank"
            rel="noopener"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
};
