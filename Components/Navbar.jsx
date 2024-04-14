"use client"

import React from 'react'
import styles from '../styles'
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

import { MenuList } from '../constants/index'

const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 sticky`}
        >
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
                <h2 className="font-extrabold text-[26px] leading-[30px] text-black">
                    Arcware Web.
                </h2>
                <ul className={`flex ${styles.yPaddings} justify-center items-center`}>
                    {MenuList.map((menu, index) => (
                        <li key={index}>
                            <a className='px-6 text-center text-2xl'>
                                {menu.pageName}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className='border border-blue-500 h-[50px] w-[200px] rounded-3xl hover:bg-blue-600 hover:text-white font-semibold duration-300'>
                    Start a Project
                </button>
            </div>
        </motion.nav>
    )
}

export default Navbar