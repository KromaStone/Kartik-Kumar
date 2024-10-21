/* eslint-disable react/prop-types */
"use client";

import { forwardRef, useRef } from "react";
import { cn } from '../lib/utils';
import { AnimatedBeam } from "../components/ui/animated-beam";
import resume from "../assets/Kartik-Kumar-Resume.pdf"

const Circle = forwardRef(({ className, children }, ref) => (
    <div
        ref={ref}
        className={cn(
            "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
            className
        )}
    >
        {children}
    </div>
));

Circle.displayName = "Circle";

export function ContactAnimatedBeam() {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);

    return (
        <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-background p-10 "
            ref={containerRef}
        >
            <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        {/* <Icons.googleDrive /> */}
                        <a target="_blank" href="https://wa.link/31ndpv" className="flex size-16 items-center justify-center px-3 rounded-full h-11 text-2xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </Circle>
                    <Circle ref={div5Ref}>
                        {/* <Icons.googleDocs /> */}
                        <a target="_blank" href="https://www.behance.net/kartikkumar134" className="flex size-16 items-center justify-center px-3 rounded-full h-11 text-xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                            <i className="fab fa-behance"></i>
                        </a>
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref} className='flex items-center justify-center'>
                        {/* <Icons.notion /> */}
                        <a target="_blank" href="https://github.com/KromaStone" className="flex size-16 items-center justify-center px-3 rounded-full h-11 text-xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                            <i className="fab fa-github"></i>
                        </a>
                    </Circle>
                    <Circle ref={div4Ref} className="size-16">
                        <a target="_blank" href="https://drive.google.com/file/d/1BSM5RliANF_STc_W0GMjzVe07mAkb1YB/view?usp=sharing" className="flex items-center justify-center w-auto size-16 text-xl font-bold px-3 text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] rounded-lg shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white z-40">
                            {/* <Icons.openai /> */}
                            <button className="">Resume</button>
                        </a>
                    </Circle>
                    <Circle ref={div6Ref}>
                        {/* <Icons.zapier /> */}
                        <a target="_blank" href="https://x.com/_G_root?t=GuRZFJgSx9h2RnFKpgVxGQ&s=09" className="flex size-16 items-center justify-center px-3 rounded-full h-11 text-xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div3Ref}>
                        {/* <Icons.whatsapp /> */}
                        <a target="_blank" href="https://www.linkedin.com/in/kartik-kumar-24b30b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex size-16 items-center justify-center px-3 rounded-full h-11 text-2xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </Circle>
                    <Circle ref={div7Ref}>
                        {/* <Icons.messenger /> */}
                        <a target="_blank" href="mailto:kartikkumar0325@gmail.com" className="flex size-16 items-center justify-center px-3 rounded-full h-11 text-xl text-[#121212] bg-[linear-gradient(#fff_50%,_#121212_50%)] bg-[length:100%_200%] bg-[position:0%_0%] shadow-md transition-[background-position,color] duration-500 hover:bg-[position:0%_100%] hover:text-white">
                            <i className="far fa-envelope"></i>
                        </a>
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    );
}

