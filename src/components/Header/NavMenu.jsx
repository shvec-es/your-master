import s from './Header.module.css';

export default function NavMenu({ isOpen, toggleMenu }) {
  return (
    <ul className={`${s.navList} ${isOpen && s.isOpen}`}>
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
  );
}
