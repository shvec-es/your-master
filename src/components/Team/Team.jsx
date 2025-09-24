import Image from 'next/image';
import Container from '../Container/Container';
import s from './Team.module.css';
import st from '../Main.module.css';

export default function Team() {
  return (
    <section className={`${st.section} ${s.teamSection}`}>
      <Container>
        <h2 className={`${st.mainTitle} ${s.teamTitle}`}>Команда YourMaster</h2>
        <ul className={s.teamList}>
          <li className={s.teamItem}>
            <Image
              src="/images/team/team_avatar.webp"
              width={264}
              height={240}
              alt="тут буде фото майстра Олександра"
              className={s.teamPhoto}
              style={{ height: 'auto' }}
            />
            <div className={s.teamItemDescr}>
              <h3 className={s.teamName}>Олександр Швець</h3>
            </div>
          </li>
          <li className={s.teamItem}>
            <Image
              src="/images/team/team_avatar.webp"
              width={264}
              height={240}
              alt="тут буде фото майстра Едуарда"
              className={s.teamPhoto}
              style={{ height: 'auto' }}
            />
            <div className={s.teamItemDescr}>
              <h3 className={s.teamName}>Едуард Швець</h3>
            </div>
          </li>
          <li className={s.teamItem}>
            <Image
              src="/images/team/team_avatar.webp"
              width={264}
              height={240}
              alt="тут буде фото майстра Сергія"
              className={s.teamPhoto}
              style={{ height: 'auto' }}
            />
            <div className={s.teamItemDescr}>
              <h3 className={s.teamName}>Сергій Котов</h3>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
