'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

import Container from '../Container/Container';
import s from './OurWorks.module.css';
import st from '../Main.module.css';
import OrderButton from '../OrderButton/OrderButton';
import ResponsiveImage from '../ResponsiveImage';

export default function OurWorks() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios('/data/works.json').then((data) => setWorks(data.data));
  }, []);

  return (
    <section className={`${st.section} ${s.workSection}`} id="work">
      <Container>
        <h2 className={st.mainTitle}>Наші роботи</h2>
        <Swiper
          slidesPerView={1}
          loop
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {works.map(({ id, small_img, big_img, alt, title, tags }) => (
            <SwiperSlide key={id}>
              <div className={s.workItem}>
                <div className={s.workImgWrapper}>
                  <ResponsiveImage small={small_img} big={big_img} alt={alt} />
                </div>
                <div className={s.workDescriptionWrapper}>
                  <h3 className={s.workItemTitle}>{title}</h3>
                  <OrderButton />
                  <ul className={s.workTagsList}>
                    {tags.map((tag, idx) => (
                      <li key={idx} className={s.workTagsItem}>
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
