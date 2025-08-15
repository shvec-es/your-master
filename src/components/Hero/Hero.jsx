import s from './Hero.module.css';
import Container from '../Container/Container';
import OrderButton from '../OrderButton/OrderButton';

export default function Hero() {
  return (
    <section className={s.hero}>
      <Container>
        <h1 className={s.title}>
          ВашМайстер — помічник, на якого можна покластися
        </h1>
        <p className={s.descr}>
          Ремонт, монтаж, дрібні справи — вирішимо будь-яку проблему по дому чи
          саду швидко і якісно. Майстри на всі руки — коли потрібно зробити
          добре.
        </p>
        <OrderButton />
      </Container>
    </section>
  );
}
