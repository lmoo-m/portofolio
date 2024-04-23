"use client";

import React from "react";
import Line from "../line";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcHome, FcAbout, FcBriefcase, FcContacts } from "react-icons/fc";
import AnimateText from "../animateText";
import { motion } from "framer-motion";
import HamburgerMenu from "../hamburgerMenu";

const links = [
    {
        title: "Home",
        url: "/",
        icon: <FcHome size={"1.4em"} />,
    },
    {
        title: "About",
        url: "/about",
        icon: <FcAbout size={"1.4em"} />,
    },
    {
        title: "Project",
        url: "/project",
        icon: <FcBriefcase size={"1.4em"} />,
    },
    {
        title: "Contact",
        url: "/contact",
        icon: <FcContacts size={"1.4em"} />,
    },
];

const Sidebar = () => {
    const path = usePathname();

    return (
        <header
            className="lg:w-[25%] w-full self-start sticky lg:top-5 -top-1 mb-5 pt-4 px-2 lg:pt-0 lg:px-0 backdrop-blur-md z-50"
            style={{ position: "-webkit-sticky" }}
        >
            <div className="text-center mb-4 flex justify-between lg:justify-center overflow-x-hidden">
                <div>
                    <AnimateText className={"lg:mx-auto"}>
                        <h1 className="text-lg text-center">Fikri Ubaidilah</h1>
                    </AnimateText>
                    <AnimateText className={"lg:mx-auto"}>
                        <p className="text-sm text-smoke text-center">
                            @hriommth
                        </p>
                    </AnimateText>
                </div>
                <HamburgerMenu navLink={links} />
            </div>
            <Line />
            <aside className="my-4 lg:flex hidden flex-col gap-2">
                {links.map((item, i) => {
                    return (
                        <Link
                            key={i}
                            href={item.url}
                            className={`w-full rounded-md hover:bg-smoke/40 flex gap-2 items-center px-4 py-1  ${
                                path === item.url ? "bg-smoke/10" : null
                            }`}
                        >
                            {item.icon}
                            <p className="mt-1">{item.title}</p>
                        </Link>
                    );
                })}
            </aside>
            <Line />
            <AnimateText className={"mx-auto hidden lg:block"}>
                <p className="text-center text-smoke mt-4">
                    &copy; 2024{" "}
                    <motion.span
                        className="text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 1] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                        }}
                    >
                        ❤️
                    </motion.span>
                    by Fikri
                </p>
            </AnimateText>
        </header>
    );
};

export default Sidebar;
