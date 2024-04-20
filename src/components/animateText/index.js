import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimateText = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControll = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControll.start("visible");
        }
    }, [isInView]);

    return (
        <div
            className={`w-fit overflow-hidden relative ${className}`}
            ref={ref}
        >
            <motion.div
                variants={{
                    hidden: { y: 75, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                }}
                initial={"hidden"}
                animate={mainControll}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                }}
            >
                {children}
            </motion.div>
            <motion.div
                className="bg-[#0AFF9D] absolute top-0 w-full h-full"
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial={"hidden"}
                animate={mainControll}
                transition={{
                    duration: 0.5,
                    ease: "easeIn",
                }}
            ></motion.div>
        </div>
    );
};

export default AnimateText;
