import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
    <div className="container">

      <p className="copyright">
        &copy; 2022 <a href="https://highacc.github.io/MD03-Proj03-portfolio/" className="copyright-link"> Olavo de Souto. </a> All Rightss Resseverd
      </p>

      <ul className="footer-lisst">
        <li>
          <a href="https://highacc.github.io/MD03-Proj03-portfolio/" className="footer-link">Termss & Condition</a>
        </li>

        <li>
          <a href="https://highacc.github.io/MD03-Proj03-portfolio/" className="footer-link">Privacy Policy</a>
        </li>
      </ul>

    </div>
  </footer>
  )
}

export default Footer