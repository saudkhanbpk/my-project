import React from 'react';
import img1 from '../assets/img5.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page3() {
  const { t } = useTranslation();

  return (
    <>
      <div className='h-[88vh] w-full bg-[#ECECEC]'>
        <div className='flex md:flex-row flex-col items-start justify-center py-10 lg:py-14 mx-auto w-full lg:gap-5'>
          <div className='flex flex-col gap-10 md:p-12 px-10 my-auto h-[50vh]'>
            <h3 className='text-3xl lg:text-5xl'>{t('page7:manual_verification')}</h3>
            <div className='w-full lg:w-[55%] px-2'>
              <p className='text-md'>{t('page7:verification_info')}</p>
              <div className='flex mt-5 lg:mt-10 gap-5 lg:gap-8 w-full'>
                <Link to='/page6'>
                  <button className='text-white text-sm cursor-pointer px-8 py-2 bg-[#52387E]'>{t('page7:back_button')}</button>
                </Link>
                <Link to='/'>
                  <button className='text-white text-sm cursor-pointer px-8 py-2 leading-tight bg-[#F38E73]'>{t('page7:next_button')}</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full px-10 lg:px-0'>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3;
