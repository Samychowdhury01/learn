import React from "react";
import classImage from '../../../assets/home/class.png'
import Button from "../../../Components/Button/Button";

const CourseSection = () => {
  return (
    <section className="bg-secondary mb-[60px] py-[60px] px-5">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold">
          Build your dream career with our tech bootcamps
        </h1>
        <p>
          Start a new career in weeks with our web development & data bootcamps.
        </p>
        {/* bullet points */}
        <div className="flex flex-wrap items-center gap-2 md:gap-10 pb-11">
          <div className="flex items-center gap-2">
            <div className="bg-primary h-2 w-2 rounded-full"></div>
            <p className="text-sm">400 hours</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-2 w-2 rounded-full"></div>
            <p className="text-sm">Live classes</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-2 w-2 rounded-full"></div>
            <p className="text-sm">Flexible - 2 to 6 months</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary h-2 w-2 rounded-full"></div>
            <p className="text-sm">On site or online</p>
          </div>
        </div>
        {/* cards  */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="card bg-base-100 shadow-xl w-[318px]">
            <figure>
              <img
                src={classImage}
                className='object-fill w-full h-full'
                alt="our-classes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>Become a software developer and build web applications from database to user interface.</p>
              <div className="card-actions justify-start">
                <Button>Learn Web Development</Button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl w-[318px]">
            <figure>
              <img
                src={classImage}
                className='object-fill w-full h-full'
                alt="our-classes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>Become a software developer and build web applications from database to user interface.</p>
              <div className="card-actions justify-start">
                <Button>Learn Web Development</Button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl w-[318px]">
            <figure>
              <img
                src={classImage}
                className='object-fill w-full h-full'
                alt="our-classes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>Become a software developer and build web applications from database to user interface.</p>
              <div className="card-actions justify-start">
                <Button>Learn Web Development</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
