import React from 'react';
import img1 from '../assets/img10.png';
import img2 from '../assets/img9.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page5() {
  const { t } = useTranslation();

  return (
    <>
      <div className='h-[88vh] w-full bg-[#ECECEC] px-10 py-10 lg:px-28 lg:py-20'>
        <div className='flex-col lg:h-[50vh] flex md:flex-row mx-auto rounded-md bg-[#FFFFFF]'>
          <div className='flex flex-col gap-5 w-full justify-center p-5 lg:p-10'>
            <p className='text-xl lg:text-3xl'>{t('page3:intro')}</p>
            <p className='flex items-center text-xs lg:text-sm mt-5'>
              <span className='px-3'>
                <img src={img1} alt="" className='w-6 lg:w-5' />
              </span>
              {t('page3:service1')}
            </p>
            <p className='flex items-center text-xs lg:text-sm'>
              <span className='px-3'>
                <img src={img1} alt="" className='w-3 lg:w-5' />
              </span>
              {t('page3:service2')}
            </p>
            <p className='flex items-center text-xs lg:text-sm'>
              <span className='px-3'>
                <img src={img1} alt="" className='w-6 lg:w-5' />
              </span>
              {t('page3:service3')}
            </p>
          </div>
          <div className='flex justify-end w-full p-5 lg:p-0'>
            <img src={img2} alt="" className='rounded-md'/>
          </div>
        </div>
        <div className='flex w-full justify-end pr-5 pb-10 lg:py-10'>
          <Link to='/page4'>
            <button className='text-white cursor-pointer rounded-sm p-1 px-2 lg:text-lg lg:px-3 lg:p-2 bg-[#F38E73] text-xs'>
              {t('page3:learn_more')}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page5;
