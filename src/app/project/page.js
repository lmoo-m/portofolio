"use client";

import HeaderCard from "@/components/headerCard";
import React from "react";
import Image from "next/image";
import { getIconByTitle } from "@/utils/getIconSkill";

const DATA = [
    {
        title: "Alwan.net",
        img: "alwan.png",
        tech: [
            getIconByTitle("React JS"),
            getIconByTitle("Tailwind"),
            getIconByTitle("Node JS"),
        ],
    },
    {
        title: "Supercluster Linktree",
        img: "supercluster.png",
        tech: [
            getIconByTitle("React JS"),
            getIconByTitle("Tailwind"),
            getIconByTitle("Node JS"),
        ],
    },
    {
        title: "When Next Mcu?",
        img: "nextMcu.png",
        tech: [
            getIconByTitle("Next JS"),
            getIconByTitle("Tailwind"),
            getIconByTitle("Node JS"),
        ],
    },
    {
        title: "MoAnime",
        img: "anime.png",
        tech: [
            getIconByTitle("Next JS"),
            getIconByTitle("Tailwind"),
            getIconByTitle("Node JS"),
        ],
    },
    {
        title: "shortLink",
        img: "shortlink.png",
        tech: [
            getIconByTitle("Laravel"),
            getIconByTitle("HTML"),
            getIconByTitle("CSS"),
        ],
    },
];

const Project = () => {
    React.useEffect(() => {
        document.title = "Fikri | Project";
    }, []);

    return (
        <div className="w-full">
            <HeaderCard
                title={"Project"}
                desc={
                    "Showcasing my passion for technology, design, and problem-solving through code."
                }
            />
            <hr className="border border-white/30 border-dashed my-4" />
            <div className="flex flex-col gap-4">
                {DATA.map((project, i) => {
                    return (
                        <div
                            key={i}
                            className="relative flex items-end  border min-h-[35rem] bg-cover bg-center"
                            style={{
                                backgroundImage: `url("/png/${project.img}")`,
                            }}
                        >
                            <div className="z-10 relative bg-black/50 w-full px-2 py-4">
                                <h1 className="text-4xl">{project.title}</h1>
                                <div className="flex gap-4 mt-2">
                                    {project?.tech?.map((icon, i) => {
                                        return (
                                            <Image
                                                key={i}
                                                src={icon.image}
                                                className="w-10"
                                                alt={icon.title}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
