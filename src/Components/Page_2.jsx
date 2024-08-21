import React from 'react';
import img1 from '../assets/img5.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page_2() {
  const { t } = useTranslation();

  return (
    <>
      <div className='w-full h-full bg-[#ECECEC] p-10 lg:p-14'>
        <div className='flex lg:flex-row flex-col gap-20 lg:gap-5 items-center justify-center w-full'>
          <div className='flex flex-col gap-3 items-start lg:px-10 justify-center lg:w-1/2'>
            <h1 className='text-2xl lg:text-3xl'>{t('page2:title')}</h1>
            <p>{t('page2:description')}</p>
            <Link to='/page3'>
              <button className='mt-5 text-white items-start cursor-pointer px-8 py-2 bg-[#F38E73]'>{t('page2:next_button')}</button>
            </Link>
          </div>
          <div className='w-full h-full mt-10 lg:mt-0 items-center lg:w-1/2 justify-center flex'>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page_2;
