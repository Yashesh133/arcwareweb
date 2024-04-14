'use client';

import React from 'react'
import styles from "../styles"
import '../styles/globals.css'
import { TitleText, TypingText } from "../components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion"
import Image from 'next/image';

const Technology = () => {
    return (
        <section className="relative my-12 mx-36">
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| World-Class Technology" textStyles="text-center" />
            </motion.div>
            <motion.div className='flex justify-center'>
                <TitleText title={<>
                    Frameworks
                </>} />
            </motion.div>
            <div className='relative'>
                <Image src="/hexagonshape.svg" alt="Icon" width={150} height={100} />
                <h2 className='absolute top-[45%] left-[48px]'>
                    python
                </h2>
            </div>
            <div className="custom-shape-container">
                <div className="custom-shape"></div>
            </div>
        </section>
    )
}

export default Technology