import Link from 'next/link';
import s from './OrderButton.module.css';

export default function OrderButton() {
  return (
    <Link href="#support" className={s.orderBtn}>
      Замовити послугу
    </Link>
  );
}
