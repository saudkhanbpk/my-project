import React from 'react';
import img1 from '../assets/img7.png';
import img2 from '../assets/img4.png';
import img3 from '../assets/img8.png';
import img4 from '../assets/img6.png';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Page4() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userinfo = {
            email: data.email,
            identino: data.identino,
            firstname: data.firstname,
            lastname: data.lastname,
            mobileno: data.mobileno,
            policyno: data.policyno
        };
        console.log("userinfo", userinfo);

        try {
            const response = await axios.post('https://my-project-server-xjgw.onrender.com/user/create', userinfo);
            if (response.status === 200) {
                console.log(response.data.msg);
                setTimeout(() => {
                    navigate('/page5'); // Navigate to the next page on successful submission
                }, 500);
                toast.success("Form submitted Sucessfully"); // Assuming you add this key for success message
            } else if (response.status === 400) {
                console.log(response.data.msg);
            } else if (response.status === 403) {
                toast.error("Mobile or Email already exist");
                console.log("user already exists");
            }
        } catch (error) {
            console.log("Error occurs in frontend not getting data", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='h-[88vh] w-full bg-[#ECECEC] p-10'>
                    <div className='flex flex-col gap-5 sm:flex-row items-center justify-center lg:px-20 w-full'>
                        <div className='lg:w-1/2 w-full flex justify-center'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10'>
                                <div className='font-semibold'>
                                    <label htmlFor="firstname">{t('page4:first_name')}</label>
                                    <div className='flex bg-[#FFFFFF] p-2 mt-2 relative'>
                                        <img src={img2} alt="" />
                                        <input
                                            type="text"
                                            name='firstname'
                                            className={`outline-none bg-[#FFFFFF] w-full px-3 font-normal text-zinc-700 ${errors.firstname ? 'border-red-500' : ''}`}
                                            {...register("firstname", { required: true })}
                                        />
                                        {errors.firstname && <span className='absolute text-red-500 font-light text-xs left-10 top-4'>{t('page4:error_first_name')}</span>}
                                    </div>
                                </div>
                                <div className='font-semibold'>
                                    <label htmlFor="lastname">{t('page4:last_name')}</label>
                                    <div className='flex bg-[#FFFFFF] p-2 mt-2 relative'>
                                        <img src={img2} alt="" />
                                        <input
                                            type="text"
                                            name='lastname'
                                            className={`outline-none bg-[#FFFFFF] w-full px-3 font-normal text-zinc-700 ${errors.lastname ? 'border-red-500' : ''}`}
                                            {...register("lastname", { required: true })}
                                        />
                                        {errors.lastname && <span className='absolute text-red-500 font-light text-xs left-10 top-4'>{t('page4:error_last_name')}</span>}
                                    </div>
                                </div>
                                <div className='font-semibold'>
                                    <label htmlFor="email">{t('page4:email')}</label>
                                    <div className='flex bg-[#FFFFFF] p-2 mt-2 relative'>
                                        <img src={img4} alt="" className='w-6 h-5' />
                                        <input
                                            type="text"
                                            name='email'
                                            className={`outline-none bg-[#FFFFFF] w-full px-3 font-normal text-zinc-700 ${errors.email ? 'border-red-500' : ''}`}
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <span className='absolute text-red-500 font-light text-xs left-10 top-4'>{t('page4:error_email')}</span>}
                                    </div>
                                </div>
                                <div className='font-semibold'>
                                    <label htmlFor="mobileno">{t('page4:mobile_number')}</label>
                                    <div className='flex bg-[#FFFFFF] p-2 mt-2 relative'>
                                        <img src={img3} alt="" className='h-6' />
                                        <input
                                            type="number"
                                            name='mobileno'
                                            className={`outline-none bg-[#FFFFFF] w-full px-3 font-normal text-zinc-700 ${errors.mobileno ? 'border-red-500' : ''}`}
                                            {...register("mobileno", { required: true })}
                                        />
                                        {errors.mobileno && <span className='absolute text-red-500 font-light text-xs left-10 top-4'>{t('page4:error_mobile_number')}</span>}
                                    </div>
                                </div>
                                <div className='font-semibold'>
                                    <label htmlFor="identino">{t('page4:identification_number')}</label>
                                    <div className='flex bg-[#FFFFFF] p-2 mt-2 relative'>
                                        <input
                                            type="number"
                                            name='identino'
                                            className={`outline-none bg-[#FFFFFF] w-full px-3 font-normal text-zinc-700 ${errors.identino ? 'border-red-500' : ''}`}
                                            {...register("identino", { required: true })}
                                        />
                                        {errors.identino && <span className='absolute text-red-500 font-light text-xs left-5 top-4'>{t('page4:error_identification_number')}</span>}
                                    </div>
                                </div>
                                <div className='font-semibold'>
                                    <label htmlFor="policyno">{t('page4:policy_number')}</label>
                                    <div className='flex bg-[#FFFFFF] p-2 mt-2 relative'>
                                        <input
                                            type="number"
                                            name='policyno'
                                            className={`outline-none bg-[#FFFFFF] w-full px-3 font-normal text-zinc-700 ${errors.policyno ? 'border-red-500' : ''}`}
                                            {...register("policyno", { required: true })}
                                        />
                                        {errors.policyno && <span className='absolute text-red-500 text-xs font-light left-5 top-4'>{t('page4:error_policy_number')}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full flex flex-col gap-5 justify-center items-center'>
                            <img src={img1} alt="" className='rounded-md' />
                            <div className='justify-end w-full lg:w-[55vh] flex pb-10 lg:pb-0'>
                                <input type="submit" className='text-white cursor-pointer p-2 px-8 bg-[#F38E73]' value={t('page4:next_button')} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Page4;
