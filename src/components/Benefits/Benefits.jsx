import Container from '../Container/Container';
import s from './Benefits.module.css';
import { IoMdDoneAll } from 'react-icons/io';
import { FaHandshake } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaPersonRays } from 'react-icons/fa6';
import { BsPersonVcard } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';

export default function Benefits() {
  return (
    <section className={s.benefits}>
      <Container>
        <h2 className="hidden">Переваги роботи з майстрами YourMaster</h2>
        <ul className={s.benefitsList}>
          <li className={s.benefitsItem}>
            <IoMdDoneAll
              color="#e74c3c"
              size={40}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <h3 className={s.benefitsSubtitle}>Універсальність</h3>
            <p className={s.benefitsDescr}>
              Виконуємо як дрібні побутові справи, так і складні монтажні чи
              будівельні роботи.
            </p>
          </li>
          <li className={s.benefitsItem}>
            <FaHandshake
              color="#e74c3c"
              size={32}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <h3 className={s.benefitsSubtitle}>Надійність</h3>
            <p className={s.benefitsDescr}>
              Приїжджаємо вчасно, працюємо акуратно, завжди дотримуємось
              домовленостей.
            </p>
          </li>
          <li className={s.benefitsItem}>
            <GiTakeMyMoney
              color="#e74c3c"
              size={36}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <h3 className={s.benefitsSubtitle}>Прозоре ціноутворення</h3>
            <p className={s.benefitsDescr}>
              Без прихованих платежів — узгоджуємо вартість до початку робіт.
            </p>
          </li>
          <li className={s.benefitsItem}>
            <FaPersonRays
              color="#e74c3c"
              size={32}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <h3 className={s.benefitsSubtitle}>Індивідуальний підхід</h3>
            <p className={s.benefitsDescr}>
              Працюємо з кожним замовленням так, ніби це наш власний дім.
            </p>
          </li>
          <li className={s.benefitsItem}>
            <BsPersonVcard
              color="#e74c3c"
              size={32}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <h3 className={s.benefitsSubtitle}>Досвід і професіоналізм</h3>
            <p className={s.benefitsDescr}>
              Наші майстри мають досвід у різних сферах — від сантехніки до
              бетонування.
            </p>
          </li>
          <li className={s.benefitsItem}>
            <AiOutlineLike
              color="#e74c3c"
              size={36}
              style={{ width: '100%', marginBottom: '8px' }}
            />
            <h3 className={s.benefitsSubtitle}>Зручне замовлення</h3>
            <p className={s.benefitsDescr}>
              Достатньо одного дзвінка або повідомлення — ми все організуємо.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
