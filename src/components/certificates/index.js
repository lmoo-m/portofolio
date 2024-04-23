"use client";

import React from "react";
import { TbCertificate } from "react-icons/tb";
import HeaderCard from "@/components/headerCard";
import Image from "next/image";
import { motion } from "framer-motion";

import aws from "@/assets/svg/certificates/aws-1.svg";
import backend from "@/assets/svg/certificates/backend-1.svg";
import frontend from "@/assets/svg/certificates/frontend-1.svg";
import javascript from "@/assets/svg/certificates/javascript-1.svg";
import software from "@/assets/svg/certificates/software-1.svg";
import web from "@/assets/svg/certificates/web-1.svg";
import lks2024 from "@/assets/svg/certificates/LKS_2024.svg";
import lks2023 from "@/assets/svg/certificates/LKS_2023.svg";

const listCertificates = [
    {
        title: "LKS 2023",
        image: lks2023,
    },
    {
        title: "LKS 2024",
        image: lks2024,
    },
    {
        title: "aws",
        image: aws,
    },
    {
        title: "backend",
        image: backend,
    },
    {
        title: "frontend",
        image: frontend,
    },
    {
        title: "javascript",
        image: javascript,
    },
    {
        title: "software",
        image: software,
    },
    {
        title: "web",
        image: web,
    },
];

const Certificates = () => {
    return (
        <div className="my-4 ">
            <HeaderCard
                title={
                    <>
                        <TbCertificate /> Certificates
                    </>
                }
                desc={"My Current Certificates."}
            />
            <div className="flex flex-wrap gap-2 w-full mt-2">
                {listCertificates.map((item, i) => {
                    return (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            key={i}
                            initial="hidden"
                            whileInView={"visible"}
                            transition={{
                                delay: 0.25 * i,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="mx-auto lg:mx-0"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                priority={false}
                                width={300}
                                loading="lazy"
                                className="hover:scale-125 transition-all delay-500 aspect-[16/12] object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Certificates;
