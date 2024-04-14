'use client';

import React from 'react'
import styles from "../styles"
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion"
import { TitleText, TypingText } from '../Components';


const Hero = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-10 ${styles.flexCenter} flex lg:flex-row flex-col gap-8`}
            >

                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="flex-1"
                >
                    <div>
                        <h2 className="my-8 font-bold md:text-6xl text-4xl text-black mb-8">
                            Future Proof, <br></br> <span className="text-blue-600 py-3"> Digital Solutions </span>
                        </h2>
                    </div>

                    <div className='my-3'>
                        <p className='text-[22px]'>
                            Today's innovation is tomorrow's old news. Because of this, brands need to invest in software development as a service that can produce novel, creative ways to engage customers.
                        </p>
                    </div>
                    <div className='my-3'>
                        <p className='text-[22px]'>
                            The team of UI/UX experts, full-stack developers, and technical analysts at Arcware are dedicated to helping you keep your brand’s digital presence fresh, engaging, and dynamic.
                        </p>
                    </div>
                    <div className='my-5'>
                        <button className='border border-blue-500 h-[50px] w-[200px] rounded-3xl bg-blue-800 text-lg font-bold text-white transition-colors duration-300 hover:bg-transparent hover:border-blue-500 hover:text-black'>
                            Let's talk Business!
                        </button>

                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src="hero.png"
                        alt="hero image"
                        style={{ width: '70%' }}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero