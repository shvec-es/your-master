import { Orbitron } from 'next/font/google';
import Container from '../Container/Container';
import Social from '../Social/Social';
import st from '../Main.module.css';
import s from './Footer.module.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '700',
});
export default function Footer() {
  return (
    <footer className={`${st.section} ${s.footerSection}`}>
      <Container>
        <div className={s.footerFirst}>
          <a className={`${orbitron.className} ${s.footerLogo}`} href="#">
            <span className={st.accentColor}>Y</span>our
            <span className={st.accentColor}>M</span>aster
          </a>
          <ul className={s.footerNavList}>
            <li>
              <a className={s.footerNavLink} href="#servises">
                Наші послуги
              </a>
            </li>
            <li>
              <a className={s.footerNavLink} href="#work">
                Приклади робіт
              </a>
            </li>
            <li>
              <a className={s.footerNavLink} href="">
                Відгуки
              </a>
            </li>
            <li>
              <a className={s.footerNavLink} href="">
                Залишити заявку
              </a>
            </li>
          </ul>
          <div>
            <p className={s.footerFindUs}>Шукайте нас в соцмережах</p>
            <Social />
          </div>
        </div>
        <p className={s.footerCopywrite}>© Copyright 2025. Made in Samar</p>
      </Container>
    </footer>
  );
}
