'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'
import styles from '../styles'
import { TypingText } from '../Components'

const Contact = () => {
    return (
        <section className="relative my-12 mx-36">
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-6`}
            >
                <TypingText title="| Ready to contact" textStyles="text-center" />
            </motion.div>


            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
            >
                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='flex-[3] flex flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative bg-blue-800 hover:bg-blue-500 h-[300px] hover:scale-125 duration-200'
                >
                    <div>
                        <p className='font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>
                            Career
                        </p>
                        <h4 className='font-bold sm:text-[52px] text-[46px] sm:leading-[40px] leading-[36px] text-white my-5'>
                            Got a Project ?
                        </h4>
                        <h4 className='font-bold sm:text-[52px] text-[46px] sm:leading-[40px] leading-[36px] text-white my-5'>
                            Let's Talk!
                        </h4>
                    </div>
                    <button className='w-36 rounded-full border-2 text-white my-4 p-3 hover:bg-white hover:text-blue-800 hover:scale-125 duration-200'>
                        Contact us
                    </button>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'tween ', 0.2, 1)}
                    className='flex-1 flex flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] hover:flex-[2] duration-200 bg-blue-700 text-white '
                >
                    <p className='font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]'>
                        Career
                    </p>
                    <h4 className='font-bold sm:text-[52px] text-[46px] sm:leading-[44px] leading-[46px] my-4'>
                        Join our team
                    </h4>
                    <button className='w-36 rounded-full border-2 my-4 p-3'>
                        View Openings
                    </button>

                    <div className='bg-teamImage h-[250px] bg-contain bg-origin-content bg-center bg-no-repeat hidden hover:visible'>
                        {/* image */}
                    </div>
                </motion.div>


            </motion.div>
        </section>
    )
}

export default Contact