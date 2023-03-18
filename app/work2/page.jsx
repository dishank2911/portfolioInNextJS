import React, { memo } from 'react'
import Link from 'next/link';
import Footer from '../../components/Footer'
import '../styles/globals.css'

const Work2 = () => {
    return (
        <><section className='min-h-screen'>
            <div className='flex flex-col gap-2 justify-center items-center h-40 font-bold text-4xl bg-[#292727] text-white'>
                <h6>Project</h6>
                <Link href="/">
                    <button className='text-xl font-medium hover:underline' type='button'>Back</button>
                </Link>
            </div>

            <div className='container mx-auto p-10'>
                <h6 className='hero-gradient-heading text-xl font-semibold'>TITLE</h6>
                <p className='font-bold text-lg pb-3'>QuizeApp</p>
                <h6 className='hero-gradient-heading text-xl font-semibold'>ROLE</h6>
                <p className='font-bold text-lg pb-3'>Back-end Developer</p>
                <h6 className='hero-gradient-heading text-xl font-semibold'>PROJECT CATEGORY</h6>
                <p className='font-bold text-lg pb-3'>Website</p>
                <h6 className='hero-gradient-heading text-xl font-semibold'>SOURCE</h6>
                <p className='font-bold text-lg pb-3'>Website</p>
                <h6 className='hero-gradient-heading text-xl font-semibold'>DESCRIPTION</h6>
                <p className='font-bold text-lg pb-3'>I had Completed QuizeApp Project with NodeJs and MongoDB</p>
                <h6 className='hero-gradient-heading text-xl font-semibold'>TECHNOLOGIES USED</h6>
                <div>
                    <ul className=' flex font-bold text-lg gap-7 flex-wrap'>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </section><Footer /></>
    )
}

export default memo(Work2)