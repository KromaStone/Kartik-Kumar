/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GetMousePosition from "../utils/GetMousePosition";
import '../App.css'
import { useState } from "react";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    {/* <Tilt className='xs:w-[250px] sm:w-[250px] lg:w-[30%] w-full'> */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
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
  </Tilt>
);

const About = () => {
  // const { x, y } = GetMousePosition();
  // const [isHovered, setIsHovered] = useState(false)
  // const maskSize = isHovered ? 100 : 100;

  const { x, y } = GetMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [maskSize, setMaskSize] = useState(40);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setMaskSize(180);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMaskSize(80);
  };

  const offsetX = isHovered ? maskSize / 2 : 20;
  const offsetY = isHovered ? maskSize / 2 : 20;

  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        {/* <motion.p className="mask h-svh"
          animate={{
            WebkitMaskPosition: `${x - 340}px ${y - 380}px`,
            WebkitMaskSize: `${maskSize}px`
          }}

          transition={{ type: "tween", ease: "backOut" }}>

          <span
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
          >
            hello, I&apos;m a full-stack dev with a love for all things TypeScript, JavaScript, and the magic of Angular, React, and Node.js. I&apos;ve dived into MongoDB, SQL, and Node.js in my projects and can&apos;t get enough of the problem-solving buzz. Quick learner? You bet! I&apos;m all about teaming up to build cool, user-friendly stuff. Ready to jump into the real world, tackle challenges, and bring some fresh, fun ideas to the table! Let&apos;s do this!
          </span>
        </motion.p> */}

        <motion.p
          className="mask h-svh"
          animate={{
            WebkitMaskPosition: `${x - offsetX}px ${y - offsetY}px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            hello, I&apos;m a full-stack dev with a love for all things TypeScript, JavaScript, and the magic of Angular, React, and Node.js. I&apos;ve dived into MongoDB, SQL, and Node.js in my projects and can&apos;t get enough of the problem-solving buzz. Quick learner? You bet! I&apos;m all about teaming up to build cool, user-friendly stuff. Ready to jump into the real world, tackle challenges, and bring some fresh, fun ideas to the table! Let&apos;s do this!
          </p>
        </motion.p>



        <p className="body ">
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
