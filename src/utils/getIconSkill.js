import { skill } from "@/components/skills";

export const getIconByTitle = (title) => {
    return skill.find((a) => a.title === title);
};
