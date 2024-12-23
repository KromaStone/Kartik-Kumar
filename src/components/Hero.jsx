import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const name = "Kartik";
const isMobileBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check for common mobile platforms
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return isMobile; // Return true for mobile browsers
};

const Hero = () => {
  const shouldRenderCanvas = !isMobileBrowser(); // Only render canvas if it's not a mobile browser

  return (
    <section className={`relative  w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00e187]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I	&apos;m &nbsp;
            <motion.span
              className='text-[#00e187]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            >
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.2 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full stack Developer  <br className='sm:block hidden' />
            and web designer
          </p>
        </div>
      </div>


      {shouldRenderCanvas ? (
        <ComputersCanvas />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className={`${styles.heroSubText} text-center`}>
            <span className="block">
              &lt; Welcome to {name}&apos;s portfolio &#x2f;&gt;
            </span>
            &lt;Canvas is not supported on your device &#x2f; &gt;
          </p>
        </div>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>


        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
