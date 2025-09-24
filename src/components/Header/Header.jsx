'use client';

import { Orbitron } from 'next/font/google';
import style from '../Main.module.css';
import s from './Header.module.css';
import Container from '../Container/Container';
import Social from '../Social/Social';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import MobileMenu from './MobileMenu';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '700',
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <header className={s.header}>
        <Container className={`${style.flexWrapper} ${s.headerContainer}`}>
          <nav className={`${style.flexWrapper} ${s.navWrapper}`}>
            <a
              className={`${orbitron.className} ${s.logo}`}
              href="#"
              aria-label="Посилання на головну сторінку сайта"
            >
              <span className={style.accentColor}>Y</span>our
              <span className={style.accentColor}>M</span>aster
            </a>
            <button
              className={s.navMenu}
              onClick={toggleMenu}
              aria-label="Відкрити меню навігації"
            >
              Меню
            </button>
            <ul className={`${s.navList} ${isOpen && s.isOpen}`}>
              <li>
                <a
                  className={s.navListItem}
                  href="#servises"
                  onClick={toggleMenu}
                >
                  Наші послуги
                </a>
              </li>
              <li>
                <a className={s.navListItem} href="#work" onClick={toggleMenu}>
                  Приклади робіт
                </a>
              </li>
              <li>
                <a
                  className={s.navListItem}
                  href="#reviews"
                  onClick={toggleMenu}
                >
                  Відгуки
                </a>
              </li>
              <li>
                <a
                  className={s.navListItem}
                  href="#support"
                  onClick={toggleMenu}
                >
                  Залишити заявку
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={s.headerBurgerMenu}
            onClick={toggleMobileMenu}
            aria-label="Відкрити мобільне меню"
          >
            <BiMenuAltRight size={20} />
          </button>
          <div className={s.headerSocWrap}>
            <Social />
          </div>
        </Container>
      </header>
      {isMobileMenuOpen && <MobileMenu toggleMenu={toggleMobileMenu} />}
    </>
  );
}
