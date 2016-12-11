import React from 'react';
import {Link, IndexLink} from 'react-router';

var Navigation = () => {
  return (
    <nav className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to='/' activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to='/' activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/harstvic" target="_blank">ViC THoR</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

module.exports = Navigation;
