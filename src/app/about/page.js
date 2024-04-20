"use client";

import HeaderCard from "@/components/headerCard";
import Line from "@/components/line";
import React from "react";
import Educations from "@/components/educations";
import Certificates from "@/components/certificates";
import AnimateText from "@/components/animateText";

const About = () => {
    return (
        <div className="w-full ">
            <HeaderCard
                title={"About"}
                desc={
                    "A short story of me, not important but seem better than nothing."
                }
            />
            <hr className="border border-white/30 border-dashed my-4" />
            <div className="text-sm leading-6 mb-4">
                <AnimateText>
                    Hi, also known as , is an aspiring front-end developer with
                    just one month of experience. He has shown dedication and a
                    keen ability to master various web frameworks. Reza journey
                    began with a solid foundation in HTML, CSS, and JavaScript,
                    enabling him to create basic web pages and delve into
                    popular frameworks like TailwindCSS, React, and Angular.
                </AnimateText>
                <span className="block h-6" />
                <AnimateText>
                    What distinguishes is his quick adaptability to new
                    challenges, making him a promising front-end developer.
                    Despite his limited experience, he actively seeks resources
                    and tutorials to stay up-to-date with web developments
                    evolving landscape. Rezas dedication and versatility mark
                    him as a valuable addition to any web development team, and
                    his journey has just begun. Hes on the path to becoming a
                    skilled professional adept at using a wide range of web
                    frameworks. I
                </AnimateText>
                <span className="block h-6" />
                <AnimateText>
                    stay current with industry trends and best practices to
                    provide innovative solutions that surpass company
                    expectations. My strong problem-solving skills and attention
                    to detail drive innovation in every project I handle.
                </AnimateText>
            </div>
            <Line />
            <Certificates />
            <Line />
            <Educations />
        </div>
    );
};

export default About;
