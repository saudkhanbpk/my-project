import React from 'react';
import img from '../assets/Group.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page2() {
  const { t } = useTranslation();

  return (
    <>
      <div className='h-[88vh] w-full bg-[#ECECEC] p-14'>
        <div className='bg-[#FFFFFF] mx-auto rounded-md lg:w-[35vw] w-full'>
          <div className='flex flex-col gap-10 justify-center items-center p-5'>
            <img src={img} alt="" />
            <div className='lg:w-[15vw] text-center'>
              <h1 className='text-lg lg:text-xl'>{t('page6:enrollment_message')}</h1>
              <h3 className='text-sm mt-2'>{t('page6:welcome_email')}</h3>
              <Link to="/page7">
                <button className='bg-[#F38E73] text-white p-2 rounded-sm mt-5'>{t('page6:continue_button')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
