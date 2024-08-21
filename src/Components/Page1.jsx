import React from 'react';
import img1 from '../assets/img3.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page1() {
  const { t } = useTranslation();

  return (
    <>
      <div className='h-[88vh] w-full bg-[#ECECEC] p-10'>
        <div className='bg-[#FFFFFF] mx-auto lg:w-[90%] lg:h-[64vh]'>
          <div className='grid-cols-1 lg:grid-cols-2 text-center hidden md:grid items-center'>
            <h3 className='bg-[#52387E] text-xl font-semibold p-3 text-white'>{t('page5:coverage')}</h3>
            <h3 className='bg-[#F38E73] text-xl font-semibold p-3 text-white'>{t('page5:eligibility')}</h3>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full'>
            <h3 className='bg-[#F38E73] flex sm:hidden text-xl font-semibold p-3 text-white'>{t('page5:eligibility')}</h3>
            <div className='flex flex-col gap-7 justify-center items-start lg:px-20 p-6 lg:ml-28'>
              <h1 className='text-3xl'>{t('page5:headline')}</h1>
              <p className='text-lg'>{t('page5:info')}</p>
            </div>
            <h3 className='bg-[#52387E] text-xl font-semibold p-3 sm:hidden flex text-white'>{t('page5:coverage')}</h3>
            <div className='w-full h-full items-center flex justify-center py-1'>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className='w-full justify-center lg:justify-end py-4 px-10 flex bg-[#ECECEC] mt-5'>
            <Link to="/page6">
              <button className='bg-[#F38E73] lg:mr-10 p-2 text-white cursor-pointer'>{t('page5:start_trial')}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
