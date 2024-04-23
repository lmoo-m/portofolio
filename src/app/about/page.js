"use client";

import HeaderCard from "@/components/headerCard";
import Line from "@/components/line";
import React, { useEffect } from "react";
import Educations from "@/components/educations";
import Certificates from "@/components/certificates";
import AnimateText from "@/components/animateText";

const About = () => {
    useEffect(() => {
        document.title = "Fikri | About";
    }, []);

    return (
        <div className="w-full ">
            <HeaderCard
                title={"About"}
                desc={
                    "Sebuah cerita pendek dari saya, tidak penting tetapi tampaknya lebih baik daripada tidak sama sekali."
                }
            />
            <hr className="border border-white/30 border-dashed my-4" />
            <div className="text-sm leading-6 mb-4">
                <AnimateText>
                    Hai, nama saya Fikri Ubaidilah, juga dikenal sebagai Fikri,
                    adalah seorang Programmer Fresh Graduate yang bercita-cita
                    tinggi. Saya telah menunjukkan dedikasi dan kemampuan yang
                    tajam untuk menguasai berbagai kerangka web. Perjalanan Saya
                    dimulai dengan dasar yang kuat dalam HTML, CSS, dan
                    JavaScript, memungkinkan Saya membuat halaman web dasar dan
                    sekarang sering menggunakan kerangka kerja populer seperti
                    TailwindCSS, React, dan Next js.
                </AnimateText>
                <span className="block h-6" />
                <AnimateText>
                    Yang membedakan Saya adalah kemampuan beradaptasi yang cepat
                    terhadap tantangan baru, sehingga menjadikannya sebagai
                    front-end developer yang menjanjikan. Meskipun pengalamannya
                    terbatas, Saya aktif mencari sumber daya dan tutorial agar
                    tetap mengikuti perkembangan perkembangan web. dan
                    perjalanannya baru saja dimulai. Saya sedang dalam
                    perjalanan untuk menjadi seorang profesional yang terampil
                    dan mahir dalam menggunakan berbagai kerangka web.
                </AnimateText>
                <span className="block h-6" />
                <AnimateText>
                    Saya selalu mengikuti tren industri dan praktik terbaik
                    untuk memberikan solusi inovatif yang melampaui ekspektasi
                    perusahaan. Keterampilan saya yang kuat dalam memecahkan
                    masalah dan perhatian terhadap detail mendorong inovasi
                    dalam setiap proyek yang saya tangani.
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
