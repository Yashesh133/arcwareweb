'use client';

import React from 'react'
import styles from "../styles"
import { SubText, TitleText, TypingText } from "../Components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Testimonials } from '../constants';

const Client = () => {
  return (
    <>
      <section className="relative my-12 mx-36">
        <div className="gradient-02 z-0" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| Happy Client" textStyles="text-center" />
        </motion.div>
        <motion.div className='flex justify-center'>
          <TitleText title={<>
            Testimonial
          </>} />
        </motion.div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 2500 }}
            loop
          >
            {/* take it okk important kem lage ? ama na lage talage ala  take it  a bey baju dekhay e kem remove karvu te je slider use karu ceh ana doc ma hase proper a apelu che ???? 1 min position thi nay thay kem responsive ma problem avse */}
            {Testimonials.map((testimonial, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <div className='bg-white p-3 text-center flex justify-center flex-col rounded-3x'>
                  <div className='absolute top-[-50%] left-[40%]'>
                    <img className='h-[100px] w-[100px] m-auto rounded-full relative z-[1111]'
                      src={testimonial.image}
                      alt={testimonial.clientName} />
                  </div>
                  <h2 className='font-bold my-4'>{testimonial.clientName}</h2>
                  <p>{testimonial.paragraph}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Client