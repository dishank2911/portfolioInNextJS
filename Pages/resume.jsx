'use client';

import Link from 'next/link';
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import '../styles/globals.css'
import Footer from './Footer';


const Resume = () => {

  const [skills, setskills] = useState([]);

  const loadSkills = useCallback(async () => {


    try {
      const res = await fetch(
        'https://portfolio-backend-puj4.onrender.com/api/skills',
      );
      const json = await res.json();
      setskills(json);
    } catch (error) {
      console.log(error.message);
    }

  }, []);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  const value = useMemo(
    () => ({
      skills,
    }),
    [skills],
  );

  return (
    <>

      <section className='min-h-screen'>
        <div className='flex flex-col gap-2 justify-center items-center h-40 font-bold text-4xl bg-[#292727] text-white'>
          <h6>RESUME</h6>
          <Link href="/">
            <button className='text-xl font-medium hover:underline' type='button'>Back</button>
          </Link>
        </div>

        <main className='container mx-auto py-16 px-5'>

          <div className='lg:flex flex-wrap py-10'>
            <div className='w-1/5 font-bold text-2xl hero-gradient-heading lg:px-5'>TECHNOLOGIES</div>


            <div className='lg:w-4/5 w-full gap-10 md:pt-7 pt-7 lg:pt-2'>

              {
                value?.skills?.data?.map((y) => (

                  <div key={y.id}>
                    <div className='flex flex-col flex-1 gap-3'>
                      <div className="flex justify-between text-2xl font-semibold md:pt-7 pt-7 lg:pt-2 ">
                        <span>
                          <a href={y.attributes.skillUrl} target="_blank">
                            {y.attributes.skillName}
                          </a>
                        </span>
                        <span>
                          {y.attributes.skillPercentage}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 ">
                        <div className="bg-[#292727] h-3 animate-pulse" style={{ width: `${y.attributes.skillPercentage}` }}></div>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>


          <div className='lg:flex flex-wrap py-10'>

            <div className='w-1/5 font-bold text-2xl hero-gradient-heading lg:px-5'>WORK EXPERIENCE</div>
            <div className='flex flex-col flex-shrink lg:w-4/5 w-full text-xl pt-5'>

              <p className='font-medium'>FULL-STACK DEVELOPER </p>
              <p className='pb-5'> <a href="" className='text-blue-700'>At The Special Character</a> , as Front-End developer Trainee from July 2022 to Present. Contributed in developing Web application and my portfolio. 1. It was a Quize app. 2. My portfolio which is created with NextJS13.</p>
              <div className="rounded-3xl py-[0.5px] bg-black"></div>
            </div>
          </div>

          <div className='lg:flex flex-wrap py-10'>
            <div className='w-1/5 font-bold text-2xl hero-gradient-heading lg:px-5'>EDUCATION</div>
            <div className='flex flex-col pt-5'>
              <p className='text-xl'>2018-09-07 to 2022-07-21</p>
              <p className='font-bold'>
                B.tech
              </p>
              <p className='font-bold'>Government Engineering College, Modasa</p>
            </div>
          </div>
        </main>

      </section>
      <Footer />
    </>
  )
}

export default memo(Resume)