import React from 'react';
import Banner from '../Banner/Banner';
import ContactSection from '../ContactSection/ContactSection';
import CourseSection from '../CourseSection/CourseSection';
import SkillSection from '../SkillSection/SkillSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
         <Banner/>
         <CourseSection/>
         <SkillSection/>
         <Testimonial/>
         <ContactSection/>
        </>
    );
};

export default Home;