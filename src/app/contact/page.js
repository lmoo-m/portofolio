"use client";

import AnimateText from "@/components/animateText";
import HeaderCard from "@/components/headerCard";
import Line from "@/components/line";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const sosmedList = [
    {
        title: "Github",
        icon: <FaGithub size={"1.6rem"} />,
        bg: "bg-[#262626]",
        url: "https://github.com/lmoo-m",
    },
    {
        title: "Instagram",
        icon: <FaInstagram size={"1.6rem"} />,
        bg: "bg-[#DB2777]",
        url: "https://www.instagram.com/pikkkf/",
    },
    {
        title: "Tiktok",
        icon: <FaTiktok size={"1.6rem"} />,
        bg: "bg-[#262626]",
        url: "https://www.tiktok.com/@anakpakyusup2",
    },
    {
        title: "Linkedin",
        icon: <FaLinkedin size={"1.6rem"} />,
        bg: "bg-[#0977B4]",
        url: "https://www.linkedin.com/in/fikri-ubaidilah",
    },
];

const Contact = () => {
    React.useEffect(() => {
        document.title = "Fikri | Contact";
    }, []);

    return (
        <div className="w-full">
            <HeaderCard title={"Contact"} desc={"Lets get in touch."} />
            <hr className="border border-white/30 border-dashed my-4" />
            <div className="my-4">
                <AnimateText>
                    <h2 className="text-md">Find me on</h2>
                </AnimateText>
                <div className="flex gap-3 mt-4 flex-wrap">
                    {sosmedList.map((item, i) => {
                        return (
                            <AnimateText key={i}>
                                <Link
                                    className={`${item.bg} flex p-3 py-2 rounded-md items-center gap-2`}
                                    href={item.url}
                                    target="_blank"
                                >
                                    {item.icon}
                                    {item.title}
                                </Link>
                            </AnimateText>
                        );
                    })}
                </div>
            </div>
            <Line />
            <div className="mt-4 mb-10">
                <AnimateText>
                    <h2>Or send me a message</h2>
                </AnimateText>
                <div className="flex gap-3 mt-2">
                    <input
                        className="bg-transparent border-smoke border-2 rounded-md w-1/2 px-3 py-2"
                        placeholder="Name"
                    />

                    <input
                        className="bg-transparent border-smoke border-2 rounded-md w-1/2 px-3 py-2"
                        placeholder="Email"
                    />
                </div>

                <textarea
                    className="w-full bg-transparent border-2 border-smoke rounded-md mt-3 h-[8rem] px-3 py-2"
                    placeholder="Message"
                ></textarea>

                <AnimateText className={"w-full"}>
                    <button className="mt-3 w-full text-center bg-white/35 py-2 rounded-md">
                        Submit
                    </button>
                </AnimateText>
            </div>
        </div>
    );
};

export default Contact;
