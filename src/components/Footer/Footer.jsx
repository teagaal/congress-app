import React from 'react';

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <p>
        Data provided by <a href="https://projects.propublica.org/api-docs/congress-api/">ProPublica's Congress API</a>.
      </p>
    </footer>
  )
};

export default Footer;