import s from './Header.module.css';
import { IoIosClose } from 'react-icons/io';
import Social from '../Social/Social';

export default function MobileMenu({ toggleMenu }) {
  return (
    <div className={s.mobileMenuWrapper}>
      <button
        className={s.mobileMenuCloseBtn}
        onClick={toggleMenu}
        aria-label="Закрити мобільне меню"
      >
        <IoIosClose size={30} color="#ffffff" />
      </button>
      <ul className={s.mobileMenuNavList}>
        <li>
          <a className={s.navListItem} href="#servises" onClick={toggleMenu}>
            Наші послуги
          </a>
        </li>
        <li>
          <a className={s.navListItem} href="#work" onClick={toggleMenu}>
            Приклади робіт
          </a>
        </li>
        <li>
          <a className={s.navListItem} href="#reviews" onClick={toggleMenu}>
            Відгуки
          </a>
        </li>
        <li>
          <a className={s.navListItem} href="#support" onClick={toggleMenu}>
            Залишити заявку
          </a>
        </li>
      </ul>
      <Social />
    </div>
  );
}
