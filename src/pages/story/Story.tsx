import React from "react";

// sections
import Hero from "./sections/Hero";
import CompanyOrigin from "./sections/CompanyOrigin";
import Concept from "./sections/Concept";
import PurposeStatment from "./sections/PurposeStatment";
import TheFuture from "./sections/TheFuture";
import OtherContents from "./sections/OtherContents";
import Contact from "./sections/Contact";


const Index = () => {
    return (
        <>
            <Hero />
            <CompanyOrigin />
            <Concept />
            <PurposeStatment />
            <TheFuture />
            <OtherContents />
            <Contact />
        </>
    )
};

export default Index;
