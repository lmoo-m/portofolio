"use client";

import Line from "@/components/line";
import { FcDonate } from "react-icons/fc";
import HeaderCard from "@/components/headerCard";
import Link from "next/link";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import AnimateText from "@/components/animateText";

export default function Home() {
    return (
        <motion.div
            className="w-full"
            variants={{
                hidden: {
                    opacity: 0,
                },
                visible: { opacity: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
        >
            {/* start header */}
            <motion.div className="flex justify-between  ">
                <AnimateText>
                    <h1 className="font-bold text-3xl ">
                        Hi, Im Fikri{" "}
                        <motion.span
                            className="inline-block cursor-pointer origin-bottom-right"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1], rotate: [15, 0, 15] }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        >
                            👋
                        </motion.span>
                    </h1>
                </AnimateText>

                <FcDonate size={"1.3rem"} />
            </motion.div>
            <ul className="flex lg:gap-8 ml-4 mt-1  text-white/95 md:flex-row flex-col">
                <li className="list-disc">
                    <AnimateText>Beginner Front End Dev</AnimateText>
                </li>
                <li className="list-disc">
                    <AnimateText>
                        Based in Tegal{" "}
                        <span className="text-xs font-serif">ID</span>
                    </AnimateText>
                </li>
            </ul>
            {/* end header */}
            {/* description */}
            <AnimateText>
                <p className="text-sm leading-8 my-4">
                    Web Developer yang antusias dan berpengalaman dengan fokus
                    kuat pada pengembangan front-end. Mahir dalam desain dan
                    memiliki pemahaman mendalam tentang semua aspek teknologi
                    web. Pemain tim kolaboratif yang berdedikasi untuk
                    menciptakan aplikasi web yang efisien, terukur, dan menarik
                    secara visual.
                </p>
            </AnimateText>
            {/* end description */}
            <Line />
            {/* skills */}
            <Skills />
            {/* end skills */}
            <Line />
            <div className="mt-4 mb-10">
                <HeaderCard
                    title={"What I've Been Working On"}
                    desc={
                        "I assist brands, companies, institutions, and startups in creating exceptional digital experiences for their businesses through strategic development services."
                    }
                />
                <div className="bg-smoke/15 p-10 rounded-xl mt-6">
                    <h2 className="text-xl">Lets work together!</h2>
                    <p className="text-md my-4">
                        Saya terbuka untuk freelance, silakan hubungi saya untuk
                        berkolaborasi
                    </p>
                    <Link
                        href={"/contact"}
                        className="bg-smoke/40 py-1 px-3 rounded-lg"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
