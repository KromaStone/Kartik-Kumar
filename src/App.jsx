import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CursorFollower from './components/CursorFollower';
import './App.css';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
// const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
// const StarsCanvas = lazy(() => import('./components/StarsCanvas'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));


const App = () => {
  return (
    <>
      <CursorFollower />
      <BrowserRouter>
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              {/* <Hero /> */}
            </div>
            <About />
            {/* <Experience /> */}
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
