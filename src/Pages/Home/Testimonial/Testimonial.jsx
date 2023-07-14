/* eslint-disable react/no-unescaped-entities */
import React from "react";
import nitish from '../../../assets/home/nitish_kumar.png'

const Testimonial = () => {
  return (
    <section className="bg-secondary flex flex-col md:flex-row items-center justify-center gap-20 py-28 px-5 md:px-20">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-9">
          Passionate teachers, acclaimed methods & real-world skills
        </h1>
        <ul className="list-disc space-y-10 px-5">
          <li>Small cohorts with 1 teacher for 7 students</li>
          <li>Practice on real data from the best European tech companies</li>
          <li>Get real-time answers to never be stuck</li>
          <li>Keep lifetime access to Le Wagon's learning platform</li>
          <li>Design and pitch your final project in teams</li>
        </ul>
      </div>
      <div className="bg-white md:w-[436px] rounded-lg drop-shadow-lg px-6 py-[18px]">
        {/* icon container */}
    <div>

    </div>
    {/* text box */}
    <div>
    <p className="text-xl mb-5">
    "Le Wagon changed my life. I went from designing ads to building an app that eventually got Google’s attention. Now me and my co-founders (who I also met at Le Wagon) all work at Google living our best lives."
    </p>
    <div className="flex items-center gap-4">
       <div className="w-36">
       <img src={nitish} 
       className='object-cover w-full h-full rounded-lg'
       alt="nitish_kumar" />
       </div>
        <div>
            <h4 className="text-lg md:text-xl">Nitish kumar</h4>
            <h3 className="text-xl md:text-2xl font-bold">Founder & SEO</h3>
            <p className="md:text-lg">Rankkerr</p>
        </div>
    </div>
    </div>
      </div>
    </section>
  );
};

export default Testimonial;
