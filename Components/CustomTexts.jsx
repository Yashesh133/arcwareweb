'use client'

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`m-5 font-semibold text-[18px] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span  variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[45px] text-[45px] text-black ${textStyles} mb-8`}
  >
    {title}
  </motion.h2>
);

export const SubText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`my-[3px] font-bold md:text-[25px] text-[25px] text-black ${textStyles} `}
  >
    {title}
  </motion.h2>
);
