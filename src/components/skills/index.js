"use client";

import React from "react";
import Image from "next/image";

import github from "@/assets/svg/github.svg";
import nextjs from "@/assets/svg/nextjs.svg";
import react from "@/assets/svg/react.svg";
import nodejs from "@/assets/svg/node.svg";
import laravel from "@/assets/svg/laravel.svg";
import tailwind from "@/assets/svg/tailwind.svg";
import html from "@/assets/svg/html.svg";
import css from "@/assets/svg/css.svg";
import flutter from "@/assets/svg/flutter.svg";
import arduino from "@/assets/svg/arduino.svg";

import Marquee from "react-fast-marquee";
import HeaderCard from "../headerCard";
import { FaCode } from "react-icons/fa";

const skill = [
    {
        title: "React JS",
        image: react,
    },
    {
        title: "Next JS",
        image: nextjs,
    },
    {
        title: "Node JS",
        image: nodejs,
    },
    {
        title: "Laravel",
        image: laravel,
    },
    {
        title: "Tailwind",
        image: tailwind,
    },
    {
        title: "CSS",
        image: css,
    },
    {
        title: "HTML",
        image: html,
    },
    {
        title: "Flutter",
        image: flutter,
    },
    {
        title: "Arduino",
        image: arduino,
    },
    {
        title: "Github",
        image: github,
    },
];

const Skills = () => {
    return (
        <div className="my-4">
            <HeaderCard
                title={
                    <>
                        <FaCode /> Skills
                    </>
                }
                desc={"My coding skills."}
            />
            <Marquee
                className="mt-4"
                speed={25}
                gradient={true}
                gradientColor="#121212"
                gradientWidth={200}
                autoFill={true}
            >
                {skill.map((item, i) => {
                    return (
                        <Image
                            className="mx-2"
                            src={item.image}
                            alt={item.title}
                            key={i}
                            width={80}
                        />
                    );
                })}
            </Marquee>
        </div>
    );
};

export default Skills;
