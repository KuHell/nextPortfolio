import React from 'react';
import Link from 'next/link';
import { ProjectInfoProps } from '../types';

const Card = (projectInfo: ProjectInfoProps) => {
  return (
    <>
      <div className='max-h-[35rem]'>
        <Link className='group' href='#'>
          <div className='max-h-[450px] overflow-hidden '>
            <img
              className='group-hover:scale-105 group-hover:duration-500'
              src={projectInfo.image}
              alt='project_img'
            />
          </div>
          <div>
            <h1 className='my-4 text-2xl font-bold group-hover:opacity-50 group-hover:duration-500'>
              {projectInfo.title}
            </h1>
            <p className='text-xl group-hover:opacity-50 group-hover:duration-500'>
              {projectInfo.date}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
