import React, { useState, useEffect } from 'react';

import Link from '../Link/Link';


 export const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);

  return (

    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <span>Lucas Pechebelok</span>
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav '>
            <li className='nav-item'>
              <Link to={'/'} offset={-120} classes='nav-link'>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/sobre'} classes='nav-link'>
                Sobre
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/projetos'} classes='nav-link'>
                Currículo
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/contato'} classes='nav-link'>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Nav;
