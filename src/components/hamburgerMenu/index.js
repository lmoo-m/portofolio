"use client";

import React, { useState } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HamburgerMenu = ({ navLink }) => {
    const [scope1, animate1] = useAnimate();
    const [scope2, animate2] = useAnimate();
    const [scope3, animate3] = useAnimate();
    const [isShow, setIsShow] = useState(false);

    const showNav = () => {
        setIsShow(!isShow);
        if (isShow) {
            animate1(scope1.current, { rotate: "0deg", borderRadius: "0" });
            animate2(scope2.current, { scale: 1 });
            animate3(scope3.current, {
                rotate: "0deg",
                y: 0,
                x: 0,
                borderRadius: "0",
            });
        } else {
            animate1(scope1.current, { rotate: "45deg", borderRadius: "10px" });
            animate2(scope2.current, { scale: 0 });
            animate3(scope3.current, {
                rotate: "-45deg",
                y: 2,
                x: -1,
                borderRadius: "10px",
            });
        }
    };

    return (
        <>
            <div
                className="lg:hidden flex flex-col gap-2 justify-center cursor-pointer z-50 "
                onClick={() => showNav()}
            >
                <div
                    className="bg-white h-1 w-10  origin-top-left"
                    ref={scope1}
                ></div>
                <div className="bg-white h-1 w-10" ref={scope2}></div>
                <div
                    className="bg-white h-1 w-10 origin-bottom-left"
                    ref={scope3}
                ></div>
            </div>
            <AnimatePresence>
                {isShow && (
                    <motion.div
                        initial={{ left: "100%" }}
                        animate={{ left: 0 }}
                        exit={{
                            left: "100%",
                            transition: {
                                duration: 0.3,
                            },
                        }}
                        transition={{
                            type: "keyframes",
                            stiffness: 50,
                        }}
                        className="h-screen w-[100%] bg-smoke fixed top-0 left-0 z-40 flex flex-col gap-2 justify-center "
                    >
                        {navLink.map((nav, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={nav.url}
                                    onClick={() => showNav()}
                                    className="text-black font-bold py-4 text-xl border-y"
                                >
                                    {nav.title}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HamburgerMenu;
