import Link from 'next/link';
import OrderForm from '../OrderForm/OrderForm';
import Container from '../Container/Container';
import s from './Support.module.css';
import st from '../Main.module.css';
import { MdOutlinePhone, MdMailOutline } from 'react-icons/md';

export default function Support() {
  return (
    <section className={`${st.section} ${s.supSection}`} id="support">
      <Container className={s.supContainer}>
        <div className={s.supFirst}>
          <p className={s.supDescr}>
            Ми знаходимось у місті Самар Дніпропетровської області. Але також
            готові приїхати до вас в Дніпро чи в межах Самарського району.
          </p>
          <p className={s.supDescr}>
            Якщо у вас є питання стосовно наших послуг, звʼяжіться з нами або
            залиште заявку, і ми вам зателефонуємо в найближчій час!
          </p>
          <ul className={s.supContactsList}>
            <li>
              <Link
                href="tel:0689585480"
                target="_blank"
                className={s.supContacts}
                aria-label="Натисніть щоб зателефонувати по номеру"
              >
                <MdOutlinePhone
                  color="#e74c3c"
                  size={20}
                  style={{ marginRight: '12px' }}
                />
                +38(068)-958-54-80
              </Link>
            </li>
            <li>
              <Link
                href="mailto:cantiyagos@gmail.com"
                target="_blank"
                className={s.supContacts}
                aria-label="Натисніть щоб написати на пошту"
              >
                <MdMailOutline
                  color="#e74c3c"
                  size={20}
                  style={{ marginRight: '12px' }}
                />
                cantiyagos@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={s.supTitle}>Залиште заявку і ми вам зателефонуємо</h2>
          <OrderForm />
        </div>
      </Container>
    </section>
  );
}
