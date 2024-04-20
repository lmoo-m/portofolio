import React from "react";
import HeaderCard from "../headerCard";
import { IoSchool } from "react-icons/io5";

import smk from "@/assets/svg/smk.svg";
import smp from "@/assets/svg/smp.svg";
import Image from "next/image";
import AnimateText from "../animateText";

const educate = [
    {
        school: "SMK Negeri 1 Slawi",
        major: "Computer and Network Enginering",
        image: smk,
        desc: "Vocational High School",
        year: "2021 - 2024",
    },
    {
        school: "SMP Negeri 1 Pangkah",
        image: smp,
        desc: "Junior High School",
        year: "2017 - 2020",
    },
];

const Educations = () => {
    return (
        <div className="my-4">
            <HeaderCard
                title={
                    <>
                        <IoSchool /> Education
                    </>
                }
                desc={"My educational journey."}
            />
            <div className="flex flex-col gap-2 mt-4">
                {educate.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-smoke/40 rounded-md px-4 py-2 flex gap-2 "
                        >
                            <Image
                                src={item.image}
                                alt={item.school}
                                width={100}
                            />
                            <div>
                                <AnimateText>
                                    <h1 className="text-xl font-semibold">
                                        {item.school}
                                    </h1>
                                </AnimateText>
                                <AnimateText>
                                    <p className="lg:flex lg:gap-4 mt-1">
                                        {item.desc}{" "}
                                        {item?.major && (
                                            <span className="list-item list-inside">
                                                {item.major}
                                            </span>
                                        )}
                                    </p>
                                </AnimateText>
                                <AnimateText>
                                    <p className="mt-2">{item.year}</p>
                                </AnimateText>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Educations;
