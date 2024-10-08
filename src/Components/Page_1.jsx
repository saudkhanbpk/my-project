import React, { useState } from 'react';
import img1 from '../assets/image 1.png';
import img2 from '../assets/image 2.png';
import img3 from '../assets/image 3.png';
import img4 from '../assets/image 4.png';
import img5 from '../assets/image 5.png';
import img6 from '../assets/image 9.png';
import img7 from '../assets/image 14.png';
import img8 from '../assets/image 15.png';
import img9 from '../assets/image 16.png';
import img10 from '../assets/image 17.png';
import img11 from '../assets/image 18.png';
import img12 from '../assets/Vector.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page_1(props) {
    const { t } = useTranslation();
    const [selectedDivs, setSelectedDivs] = useState([]);
    
    const handleSelection = (index) => {
        setSelectedDivs(prevSelectedDivs => {
            if (prevSelectedDivs.includes(index)) {
                return prevSelectedDivs.filter(i => i !== index);
            } else {
                return [...prevSelectedDivs, index];
            }
        });
    };

    const divs = [
        { img: img1, text: t('page1:p1') },
        { img: img10, text: t('page1:p2') },
        { img: img2, text: t('page1:p3') },
        { img: img11, text: t('page1:p4') },
        { img: img3, text: t('page1:p5') },
        { img: img7, text: t('page1:p6') },
        { img: img6, text: t('page1:p7') },
        { img: img9, text: t('page1:p8') },
        { img: img4, text: t('page1:p9') },
        { img: img8, text: t('page1:p10') },
        { img: img5, text: t('page1:p11') },
        { img: img12, text: t('page1:p12') },
    ];

    const handleNext = () => {
        const selectedDiseases = selectedDivs.map(index => divs[index].text);
        console.log(selectedDiseases);
        props.setDieseaseData(selectedDiseases);
    };

    return (
        <>
            <div className='w-full h-full bg-[#ECECEC] p-10 lg:p-14'>
                <h3 className='text-2xl lg:text-5xl lg:mb-3'>{t('page1:welcom')}</h3>
                <p className='text-lg lg:text-xl'>{t('page1:title')}</p>
                <div className='flex lg:flex-row flex-col gap-5 mt-5 p-2'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-36'>
                        {divs.map((div, index) => (
                            <div 
                                key={index} 
                                className={`bg-[#FFFFFF] lg:w-[15vw] py-2 px-1 items-center justify-center flex cursor-pointer ${selectedDivs.includes(index) ? 'bg-blue-300' : ''}`}
                                onClick={() => handleSelection(index)}
                            >
                                <p className='flex items-center w-full px-3'>
                                    <span><img src={div.img} alt="" className='mr-7 w-6 lg:w-8' /></span>
                                    {div.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='flex w-full justify-end px-5 lg:items-end lg:mr-10'>
                        <Link to='/page2'>
                            <button onClick={handleNext} className='bg-[#F38E73] text-white p-2 px-5 rounded-sm'>{t('page1:next')}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page_1;
