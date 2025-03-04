/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";



const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100  rounded-[20px] -z-20`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I can do</p>
          <h2 className={styles.sectionHeadText}>My Services.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <>
            <motion.div
              key={index}
              variants={fadeIn("", "spring", index * 0.5, 0.75)}
              className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-[320px]'
            >
              <p className='text-white font-semibold text-[28px] leading-none green-text-gradient'>	&lt;&gt; </p>
              <div className='mt-1'>
                <p className='text-white tracking-wider text-[18px]'>{testimonial.testimonial}</p>

                <p className='text-white font-semibold text-[28px] leading-none green-text-gradient'>&lt;
                  <span className="text-[28px] leading-none absolute bottom-[110px] left-[44px] italic green-text-gradient w-5"> / </span> &gt;</p>

                <div className='mt-7 flex justify-between items-center gap-1'>
                  <div className='flex-1 flex flex-col '>

                    <p className='text-white font-medium text-[16px]'>
                      <span className='blue-text-gradient'> &#x23;</span> {testimonial.name}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "work");
