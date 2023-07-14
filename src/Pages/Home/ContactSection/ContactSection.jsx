import React from 'react';
import Button from '../../../Components/Button/Button';

const ContactSection = () => {
    return (
        <section className='bg-[#371373] text-white py-[90px] flex items-center justify-center text-center px-5'>
            <div>
                <h1 className='text-2xl md:text-3xl font-bold pb-4'>Are you an enterprise looking for tech skills?</h1>
                <p className='pb-11 md:w-2/3 mx-auto'>Transform your teams with Le Wagon corporate training or hire our data and web development alumni now.</p>
                <Button>Contact our enterprise team</Button>
            </div>
        </section>
    );
};

export default ContactSection;