import React from 'react';
import nitish from '../../../assets/home/nitish_kumar.png'

const SkillSection = () => {
    return (
        <section className='flex flex-col md:flex-row gap-5 px-5'>
            {/* text container */}
            <div className='md:pl-28 md:w-1/2 md:pb-32'>
                <h1 className='text-3xl font-bold mb-3'>Part-Time Skill Courses</h1>
                <p>Become better at your current job or discover a new topic. Join experienced teachers in online live sessions, two evenings a week.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                <div className='px-6 py-5 box'>
                    <h1 className='text-xl'>No code</h1>
                    <p className='text-[#300FFF]'>Growth & Data Automation</p>
                </div>
                <div className='px-6 py-5 box'>
                    <h1 className='text-xl'>Development</h1>
                    <p className='text-[#300FFF]'>Web and App development</p>
                </div>
                <div className='px-6 py-5 box'>
                    <h1 className='text-xl'>UI/UX Design</h1>
                    <p className='text-[#300FFF]'>App design Web design</p>
                </div>
                </div>
            </div>
            {/* image container */}
            <div className='ml-auto'>
                <img src={nitish} className='object-cover w-full h-full' alt="founder-of-Rankkerr" />
            </div>
        </section>
    );
};

export default SkillSection;