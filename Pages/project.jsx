'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback, useEffect, useMemo, memo } from 'react'

const Project = () => {

  const [projects, setProjects] = useState([]);


  const loadProjects = useCallback(async () => {


    try {
      const res = await fetch(
        'https://portfolio-backend-puj4.onrender.com/api/projects',
      );
      const json = await res.json();
      setProjects(json);

    } catch (error) {
      console.log(error.message);
    }

  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const value = useMemo(
    () => ({
      projects,
    }),
    [projects],
  );

  return (
    <section className="container mx-auto flex flex-col py-20 justify-center items-center" id="project">
      <div className="pb-4">
        <h5 className="text-2xl font-bold hero-gradient-heading pb-4">PORTFOLIO</h5>
      </div>
      <div className=" pb-10">
        <h5 className="text-3xl font-bold">WORK I'VE DONE</h5>
      </div>
      <div className="pb-20 flex flex-wrap">
        <div className="flex gap-10 flex-wrap justify-center px-5">
          {

            value?.projects.data?.map((x) => (
              <div key={x.id}>
                <div className="bg-[#292727] p-4 shadow-base rounded-2xl overflow-hidden">

                  <div className="relative lg:w-[500px] w-[340px] aspect-square md:w-[400px] rounded-2xl pb-2">
                    <Image src={x.attributes.imgUrl} alt="My Portfolio" fill />

                  </div>

                  <a href={x.attributes.projectUrl}>
                    <div className="flex justify-between items-center hover:opacity-[0.7]" role='button'>
                      <h5 className="text-3xl hero-gradient-heading font-semibold mb-3 line-clamp-1">{x.attributes.projectName}</h5>
                      <button className="flex items-center gap-2 font-bold text-sm text-white text-center">VIEW
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" /></svg>
                        </span>
                      </button>
                    </div>
                  </a>



                </div>
              </div>
            ))

          }

        </div>
      </div>

    </section>
  )
}

export default memo(Project)