import React from "react";

// sections
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Service from "./sections/Service";
import Works from "./sections/Works";
// import Recruit from "./sections/Recruit";
import Member from "./sections/Member";
import Company from "./sections/Company";
import Contact from "./sections/Contact";


const index = () => {
    return (
        <>
            <Hero />
            <Story />
            <Service />
            <Works />
            {/* <Recruit /> */}
            <Member />
            <Company />
            <Contact />
        </>
    )
};

export default index;
