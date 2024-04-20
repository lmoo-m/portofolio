import HeaderCard from "@/components/headerCard";
import React from "react";

const Project = () => {
    return (
        <div className="w-full">
            <HeaderCard
                title={"Project"}
                desc={
                    "Showcasing my passion for technology, design, and problem-solving through code."
                }
            />
            <hr className="border border-white/30 border-dashed my-4" />
        </div>
    );
};

export default Project;
