import s from './About.module.css';
import Container from '../Container/Container';
import { HiDotsHorizontal } from 'react-icons/hi';
import Image from 'next/image';

export default function About() {
  return (
    <section className={s.about}>
      <Container className={s.aboutContainer}>
        <div className={s.aboutImgContainer}>
          <Image
            src="/images/about.webp"
            width={340}
            height={420}
            alt="about-image"
            className={s.aboutImg}
          />
        </div>
        <div className={s.aboutTextContainer}>
          <p className={s.firstTextAbout}>// ОСНОВНЕ ПРО НАС</p>
          <h2 className={s.aboutTitle}>
            Надійні майстри для вашого дому та саду
          </h2>
          <HiDotsHorizontal size={38} color="#e74c3c" />
          <p className={s.descrAbout}>
            Ласкаво просимо до команди майстрів <strong>YourMaster</strong> —
            вашого надійного помічника з побутових ремонтів, монтажу, а також
            дрібних робіт у будинку та на подвір’ї з міста Самар (Дніпро). Ми
            працюємо для тих, хто цінує якість, надійність, пунктуальність і
            турботу про деталі.
          </p>
          <p className={s.descrAbout}>
            Наша команда — це досвідчені фахівці, які допоможуть вам з будь-яким
            завданням: від встановлення полички чи монтажу побутової техніки до
            ремонтих робіт на подвірʼї чи вдома. Ми не просто виконуємо роботи —
            ми пропонуємо зручність, чесність і гарантію результату. Всі задачі
            розв’язуємо під ключ, дотримуємось термінів, працюємо акуратно та з
            повагою до вашого простору. Виїжджаємо в межах Самарського району та
            міста Дніпро.
          </p>
          <p className={s.descrAbout}>
            Не відкладайте домашні справи на потім — замовляйте послуги{' '}
            <strong>YourMaster</strong> вже сьогодні та переконайтесь, як просто
            може бути життя з майстрами, яким можна довіряти!
          </p>
        </div>
      </Container>
    </section>
  );
}
