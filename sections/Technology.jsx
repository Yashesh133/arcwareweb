'use client';

import React from 'react'
import styles from "../styles"
import { TypingText, SubText, TitleText, FrameworkCard } from '../Components';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion"
import { MobileFrameworks, WebFrameworks } from '../constants';

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
            <motion.div className='flex justify-center'>
                <SubText title={<>
                    Web Frameworks
                </>} />
            </motion.div>
            <motion.div className='grid grid-cols-6 text-center gap-5'>
                {WebFrameworks.map((framework, index) => (
                    <FrameworkCard
                        key={`framework-${index}`}
                        image={framework.image}
                        name={framework.name}
                        index={index + 1}
                    />
                ))}
            </motion.div>
            {/* mobile framework */}
            <motion.div className='flex justify-center'>
                <SubText title={<>
                    Mobile Frameworks
                </>} />
            </motion.div>
            <motion.div className='grid grid-cols-5 text-center gap-5'>
                {MobileFrameworks.map((framework, index) => (
                    <FrameworkCard
                        key={`framework-${index}`}
                        image={framework.image}
                        name={framework.name}
                        index={index + 1}
                    />
                ))}
            </motion.div>
        </section>
    )
}

export default Technology