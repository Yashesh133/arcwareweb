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
      <section className="relative my-12 mx-36 ">
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
        <motion.div className='flex justify-center mb-14'>
          <TitleText title={<>
            Testimonial
          </>} />
        </motion.div>
        <div>
          <Swiper
            className='mt-24'
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 2500 }}
            loop
            parallax
          >
            {Testimonials.map((testimonial, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <div className='bg-white p-8 text-center flex justify-center flex-col rounded-3xl'>
                  <div className='absolute top-[-30%] '>
                    <img className='h-[150px] w-[150px] m-auto rounded-full'
                      src={testimonial.image}
                      alt={testimonial.clientName} />
                  </div>
                  <div className='my-6'>
                    <h2 className='font-bold mt-8'>{testimonial.clientName}</h2>
                    <p>{testimonial.paragraph}</p>
                  </div>
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