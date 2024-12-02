/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import '../App.css'

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full cursor-pointer'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-500/40 '
    >

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-primary transition ease-in-out duration-300'
      >

        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {

  return (

    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >

        <p>
          I&apos;m a passionate full stack developer with a solid foundation in TypeScript, JavaScript, and frameworks like Angular, React, and Node.js. I&apos;ve gained hands-on experience with MongoDB, SQL, and Node.js through projects and coursework. As a quick learner, I enjoy working in teams to create efficient, user-friendly solutions and am eager to apply my skills to real-world challenges. Excited to kickstart my career and bring fresh ideas to life!
        </p>

      </motion.div>


      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center mx-auto '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
