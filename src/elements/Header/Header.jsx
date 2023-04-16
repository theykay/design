import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <a className="nav-section" href="/">
          <img className="logo" src={logo} alt="logo" />
          <h1>theyKay</h1>
        </a>
        <ul className="nav-ul">
          <li className="nav-li">
            {/* <Link className="nav-link" to="#about">about</Link> */}
            <a href="/about" className="nav-link">
              about
            </a>
          </li>
          <li className="nav-li dd-trigger">
            {/* <Link className="nav-link" to="#work">work</Link> */}
            <a href="/work" className="nav-link">
              work
            </a>
            {/* dropdown menu */}
            <ul className="dd-nav">
              <li className="dd-item">
                <Link className="dd-link" to="/ux">ux case studies</Link>
              </li>
              <li className="dd-item">
                <Link className="dd-link" to="/other">other</Link>
              </li>
            </ul>
          </li>
          <li className="nav-li">
            {/* <Link className="nav-link" to="#resume">resumé</Link> */}
            <a href="/resume" className="nav-link">
              resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;