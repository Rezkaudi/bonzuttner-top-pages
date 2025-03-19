import React from "react";

// sections
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Service from "./sections/Service";
import Topics from "./sections/Topics";
import Member from "./sections/Member";
import Company from "./sections/Company";
import Contact from "./sections/Contact";


const index = () => {
    return (
        <>
            <Hero />
            <Story />
            <Service />
            <Topics />
            <Member />
            <Company />
            <Contact />
        </>
    )
};

export default index;
