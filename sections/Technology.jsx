'use client';

import React from 'react'
import styles from "../styles"
import { SubTitleText, TitleText, TypingText } from "../components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion"
import { Frameworks, MobileFrameworks, WebFrameworks } from '../constants';

import FrameworkCard from '../Components/FrameworkCard';

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
                <SubTitleText title={<>
                    Web Frameworks
                </>} />
            </motion.div>
            <motion.div className='flex justify-center items-center text-center'>
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
                <SubTitleText title={<>
                    Mobile Frameworks
                </>} />
            </motion.div>
            <motion.div className='flex justify-center items-center text-center'>
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