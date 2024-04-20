"use client";

import React from "react";
import AnimateText from "../animateText";

const HeaderCard = ({ title, desc }) => {
    return (
        <div>
            <AnimateText>
                <h1 className="text-xl font-semibold text-white/90 flex gap-2 items-center">
                    {title}
                </h1>
            </AnimateText>
            <AnimateText>
                <p className="mt-2 text-smoke">{desc}</p>
            </AnimateText>
        </div>
    );
};

export default HeaderCard;
