import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nikita. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/mwlite/in/nikita-sawakare"  >LinkedIn</a>
          <a href="https://github.com/nikitasawkare26" >GitHub</a>
          <a href="nikitasawkare00@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;