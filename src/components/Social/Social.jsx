import Link from 'next/link';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaViber } from 'react-icons/fa6';
import { RiTelegramLine } from 'react-icons/ri';
import { MdLocalPhone } from 'react-icons/md';
import s from './Social.module.css';

export default function Social() {
  return (
    <ul className={s.socList}>
      <li className={s.socListItem}>
        <Link
          className={s.socListLink}
          href="https://www.instagram.com/santyago_fireman"
          target="_blank"
        >
          <IoLogoInstagram
            size={30}
            style={{
              backgroundColor: '#e74c3c',
              padding: '5px',
              borderRadius: '50%',
              color: '#ffffff',
            }}
          />
        </Link>
      </li>
      <li className={s.socListItem}>
        <Link
          className={s.socListLink}
          href="http://t.me/Cantiyago"
          target="_blank"
        >
          <RiTelegramLine
            size={30}
            style={{
              backgroundColor: '#e74c3c',
              padding: '5px',
              borderRadius: '50%',
              color: '#ffffff',
            }}
          />
        </Link>
      </li>
      <li className={s.socListItem}>
        <Link
          className={s.socListLink}
          href="viber://chat?number=%2B380689585480"
          target="_blank"
        >
          <FaViber
            size={30}
            style={{
              backgroundColor: '#e74c3c',
              padding: '5px',
              borderRadius: '50%',
              color: '#ffffff',
            }}
          />
        </Link>
      </li>
      <li className={s.socListItem}>
        <Link className={s.socListLink} href="tel:0689585480" target="_blank">
          <MdLocalPhone
            size={30}
            style={{
              backgroundColor: '#e74c3c',
              padding: '5px',
              borderRadius: '50%',
              color: '#ffffff',
            }}
          />
        </Link>
      </li>
    </ul>
  );
}
