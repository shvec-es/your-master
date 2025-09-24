import Link from 'next/link';
import s from './OrderButton.module.css';

export default function OrderButton() {
  return (
    <Link
      href="#support"
      className={s.orderBtn}
      aria-label="Натисніть для замовлення послуг"
    >
      Замовити послугу
    </Link>
  );
}
