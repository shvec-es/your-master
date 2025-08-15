// app/not-found.tsx

'use client';
import Link from 'next/link';
import Container from '@/components/Container/Container';
import s from '@/components/Main.module.css';

const NotFound = () => {
  return (
    <section className={s.notFoundSection}>
      <Container>
        <h1>404 - Сторінку не знайдено😢</h1>
        <Link href="/">
          Повернутись <span className={s.accentColor}>на головну</span> 👈
        </Link>
      </Container>
    </section>
  );
};

export default NotFound;
