import About from '@/component/About';
import BrandsCard from '@/component/brands/BrandsCard';
import Footer from '@/component/Footer';
import MyProjects from '@/component/MyProjects';
import Navbar from '@/component/Navbar';
import OtherAboutMe from '@/component/OtherAboutMe';
import ToolsTechnologies from '@/component/ToolsTechnologies';
import React from 'react';

interface Props {
  
}

const Portofolio: React.FC<Props> = () => {
  return (
    <div className='w-full  flex flex-col gap-20'>
      <Navbar/>

       <section className='w-full -scroll-mt-52' id="about" >
        <About />
      </section>

      <OtherAboutMe/>

       <section className='w-full' id="technologies">
        <ToolsTechnologies />
      </section>

       <section className='w-full' id="projects">
        <MyProjects />
      </section>

      <div className=' flex flex-col  text-center   items-center w-full gap-2'>
      <p className='dancing-script-uniquifier w-full'>
        Be My Next Client
      </p>

     <section className='w-full' id="contact">
        <Footer />
      </section>
      </div>
    </div>
  );
};

export default Portofolio;