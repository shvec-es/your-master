'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Container from '../Container/Container';
import s from '../Main.module.css';

export default function Reviews() {
  return (
    <section className={`${s.section} ${s.reviewsSection}`} id="reviews">
      <Container>
        <h2 className={s.mainTitle}>Відгуки наших клієнтів</h2>
        <Swiper
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image
              src="/images/reviews/review1.webp"
              width={320}
              height={200}
              alt="review"
              className=""
              style={{ width: '100%' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/reviews/review2.webp"
              width={320}
              height={200}
              alt="review"
              className=""
              style={{ width: '100%' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/reviews/review3.webp"
              width={320}
              height={200}
              alt="review"
              className=""
              style={{ width: '100%' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/reviews/review4.webp"
              width={320}
              height={200}
              alt="review"
              className=""
              style={{ width: '100%' }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
