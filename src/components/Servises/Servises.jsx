import Link from 'next/link';
import Container from '../Container/Container';
import s from './Servises.module.css';
import st from '../Main.module.css';
import { Inter } from 'next/font/google';
import { FaStarOfLife } from 'react-icons/fa';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});

export default function Servises() {
  return (
    <section className={s.servises} id="servises">
      <Container>
        <h2 className={st.mainTitle}>Наші послуги</h2>
        <p className={s.servisesDescr}>
          <FaStarOfLife color="#e74c3c" size={14} /> Допомагаємо у всьому — від
          побутових дрібниць до будівельних робіт
        </p>
        <ul className={s.servisesList}>
          <li className={`${s.servisesItem} ${s.firstServise}`}>
            <h3 className={`${inter.className} ${s.servisesSubtitle}`}>
              Будівельні роботи
            </h3>
            <p className={s.servisesSubdescr}>
              Проводимо бетонні, підготовчі та земельні роботи для облаштування
              вашої ділянки
            </p>
            <div className={s.servisesOverlay}>
              <ul className={s.servisesListOverlay}>
                <li>заливка вимощення, доріжок і майданчиків;</li>
                <li>
                  підготовка території під зону барбекю, дитячий майданчик чи
                  терасу;
                </li>
                <li>будівництво дрібних конструкцій;</li>
                <li>облаштування двору від воріт до входу в будинок.</li>
              </ul>
              <Link href="#support" className={s.forDetails}>
                Щоб дізнатись більше
              </Link>
            </div>
          </li>
          <li className={`${s.servisesItem} ${s.secondServise}`}>
            <h3 className={`${inter.className} ${s.servisesSubtitle}`}>
              Оздоблювальні роботи
            </h3>
            <p className={s.servisesSubdescr}>
              Приводимо до ладу приміщення як зовні, так і всередині
            </p>
            <div className={s.servisesOverlay}>
              <ul className={s.servisesListOverlay}>
                <li>утеплення фасаду;</li>
                <li>малярні та штукатурні роботи;</li>
                <li>поклейка шпалер, укладання плитки;</li>
                <li>монтаж гіпсокартону;</li>
                <li>стельові та підлогові роботи;</li>
                <li>демонтажні роботи;</li>
                <li>зовнішнє оздоблення та фасадні роботи.</li>
              </ul>
              <Link href="#support" className={s.forDetails}>
                Щоб дізнатись більше
              </Link>
            </div>
          </li>
          <li className={`${s.servisesItem} ${s.thirdServise}`}>
            <h3 className={`${inter.className} ${s.servisesSubtitle}`}>
              Домашній майстер
            </h3>
            <p className={s.servisesSubdescr}>
              Допомагаємо з усім, що вимагає рук майстра
            </p>
            <div className={s.servisesOverlay}>
              <ul className={s.servisesListOverlay}>
                <li>сантехнічні роботи (заміна, ремонт, монтаж);</li>
                <li>електрика (розетки, освітлення, щитки);</li>
                <li>встановлення побутової техніки;</li>
                <li>слюсарні, столярні роботи;</li>
                <li>"Чоловік на годину".</li>
              </ul>
              <Link href="#support" className={s.forDetails}>
                Щоб дізнатись більше
              </Link>
            </div>
          </li>
          <li className={`${s.servisesItem} ${s.fourthServise}`}>
            <h3 className={`${inter.className} ${s.servisesSubtitle}`}>
              Сад і город
            </h3>
            <p className={s.servisesSubdescr}>
              Піклуємось про вашу ділянку, як про власну
            </p>
            <div className={s.servisesOverlay}>
              <ul className={s.servisesListOverlay}>
                <li>ландшафтні роботи;</li>
                <li>обрізка дерев та кущів;</li>
                <li>дрібні садові конструкції (клумби, огорожі, теплиці).</li>
              </ul>
              <Link href="#support" className={s.forDetails}>
                Щоб дізнатись більше
              </Link>
            </div>
          </li>
          {/* <li className={`${s.servisesItem} ${s.fifthServise}`}>
            <h3 className={`${inter.className} ${s.servisesSubtitle}`}>
              Побутові послуги
            </h3>
            <p className={s.servisesSubdescr}>
              Підтримуємо ваш простір у порядку
            </p>
            <ul className={s.servisesListOverlay}>
              <li>прибирання приміщень після ремонту;</li>
              <li>вивезення сміття та старих речей;</li>
              <li>допомога при переїзді.</li>
            </ul>
          </li>
          <li className={`${s.servisesItem} ${s.sixthServise}`}>
            <h3 className={`${inter.className} ${s.servisesSubtitle}`}>
              "Чоловік на годину"
            </h3>
            <p className={s.servisesSubdescr}>
              Допомога у дрібних домашніх справах
            </p>
            <ul className={s.servisesListOverlay}>
              <li>заміна розеток, вимикачів, лампочок, люстр;</li>
              <li>встановлення змішувача, прочищення зливів;</li>
              <li>дрібні столярні роботи.</li>
            </ul>
          </li> */}
        </ul>
      </Container>
    </section>
  );
}
