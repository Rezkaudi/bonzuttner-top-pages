import React from "react";

// sections
import Hero from "./sections/Hero";
import OtherContents from "./sections/OtherContents";
import Contact from "./sections/Contact";
import MemberList from "./sections/MemberList";


const Index = () => {
    return (
        <>
            <Hero />
            <MemberList />
            <OtherContents />
            <Contact />
        </>
    )
};

export default Index;
