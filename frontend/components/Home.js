import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-semibold'>Nextjs Contact App</h1>
      <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'>
        <div className='max-w-md bg-slate-800 shadow overflow-hidden rounded-md mx-auto p-6'>
          <div className='flex flex-col justify-center items-center'>
            <div className='md:shrink-0'>
              <div className='relative w-20 h-20 shadow overflow-hidden bg-slate-500 rounded-full mt-5'>
                <Image
                  src={'/img/avatar.png'}
                  alt='Avatar image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
            <div className='mt-8'>
              <div className='text-center'>
                <h2 className='font-semibold text-xl mb-2'>Contact name</h2>
                <p className='text-slate-400 font-light mb-2'>Contact mail</p>
                <p className='text-slate-400 mb-2'>Contact phone number</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Link href='#'>
                  <a className='mb-4 rounded-md text-white bg-green-700 px-4 py-2 font-bold'>
                    See details
                  </a>
                </Link>
                <Link href='#'>
                  <a className='mb42 rounded-md text-white bg-blue-700 px-4 py-2 font-bold'>
                    Edit contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
