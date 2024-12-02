/* eslint-disable no-unused-vars */
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CursorFollower from './components/CursorFollower';
import './App.css';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

// Loader component

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    handleButtonClick()
    const loaderElement = loaderRef.current;
    if (loaderElement) {
      loaderElement.classList.remove("loader--active");
    }
  }, []);

  const handleButtonClick = () => {
    const loaderElement = loaderRef.current;
    if (loaderElement) {
      loaderElement.classList.add("loader--active");

      // Remove the active class after 5 seconds
      setTimeout(() => {
        loaderElement.classList.remove("loader--active");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="loader loader--active kkk" ref={loaderRef}>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
      </div>

    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  if (loading) {
    return (
      <>
        <CursorFollower />
        <BrowserRouter>
          <Suspense fallback={''}>
            <Loader />

          </Suspense>
        </BrowserRouter>
      </>
    );
  }

  return (
    <>
      <CursorFollower />
      <BrowserRouter>
        <Suspense fallback={''}>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
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
