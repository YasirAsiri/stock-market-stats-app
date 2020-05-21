import React from "react";
// Footer component to display initials and current year
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>YA ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
