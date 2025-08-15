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
              alt="avatar"
              className={s.teamPhoto}
            />
            <div className={s.teamItemDescr}>
              <h3 className={s.teamName}>Олександр Швець</h3>
              {/* <p className={s.teamPosition}>Посада</p> */}
            </div>
          </li>
          <li className={s.teamItem}>
            <Image
              src="/images/team/team_avatar.webp"
              width={264}
              height={240}
              alt="avatar"
              className={s.teamPhoto}
            />
            <div className={s.teamItemDescr}>
              <h3 className={s.teamName}>Едуард Швець</h3>
              {/* <p className={s.teamPosition}>Посада</p> */}
            </div>
          </li>
          <li className={s.teamItem}>
            <Image
              src="/images/team/team_avatar.webp"
              width={264}
              height={240}
              alt="avatar"
              className={s.teamPhoto}
            />
            <div className={s.teamItemDescr}>
              <h3 className={s.teamName}>Іван Клепцов</h3>
              {/* <p className={s.teamPosition}>Посада</p> */}
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
