import React from "react";

// sections
import Hero from "./sections/Hero";
import OtherContents from "./sections/OtherContents";
import Contact from "./sections/Contact";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";


const Index = () => {
    return (
        <>
            <Hero />
            <Section2 />
            <Section3 />
            <OtherContents />
            <Contact />
        </>
    )
};

export default Index;
