'use client';

import styles from "../styles";
import { TypingText } from '../Components';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion"
import Image from "next/image";

const About = () => (
    <section className="relative my-12 mx-36">
        <div className="gradient-02" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="| About Arcware" textStyles="text-center" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
            >
                <span>
                    We are a Global Pioneer in digital transformation that delivers leading-edge solutions to emerging technology startups, SMEs and large corporations. We have been helping companies and established brands reinventing their business through digitalisation.
                </span>
            </motion.p>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex mx-48 justify-center text-center">
                <div className=" border-white hover:scale-110 duration-500 rounded-2xl bg-blue-200/30 flex-1 p-11 justify-center m-3 backdrop-blur-xl">
                    <div className="">
                        <Image className="mx-auto z-50"
                            src="/flag.png"
                            alt="flag"
                            width={100}
                            height={100} />
                        <h4 className="text-blue-600 font-bold text-[24px]">Our Mission</h4>
                        <span>
                            Help people to fulfil their dreams by enhancing their business idea into real world.
                        </span>
                    </div>
                </div>
                <div className="border-white hover:scale-110 duration-500 rounded-2xl bg-blue-200/30 flex-1 p-11 justify-center m-3 backdrop-blur-xl">
                    <div className="">
                        <Image className="mx-auto"
                            src="/eye.png"
                            alt="eye"
                            height={100}
                            width={100} />
                        <h4 className="text-blue-600 font-bold text-[24px]">Our Vision</h4>
                        <span>
                            Make every dreamer a successful entrepreneur.
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default About;
