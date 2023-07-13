import React from "react";
import Button from "../../../Components/Button/Button";
import nitish from '../../../assets/home/nitish_kumar.png'

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0 mt-7 p-5 md:p-0">
      {/* text container */}
      <div className="md:w-1/2">
        <h1 className="text-[30px] md:text-[44px] font-light mb-2">Learn new skills today.</h1>
        <h3 className="text-[20px] md:text-[32px] font-bold mb-5">Build your career in tech.</h3>
        <p className="mb-8">
          Join our immersive courses in web development and data to transform
          your career and access new opportunities.
        </p>
        <Button>Browse Courses</Button>
      </div>
      {/* image container */}
      <div className="ml-auto">
        <img src={nitish} 
        className='object-fill h-full rounded-lg'
        alt="founder-of-Rankkerr" />
      </div>
    </section>
  );
};

export default Banner;
