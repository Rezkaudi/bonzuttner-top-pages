import React from "react";

// sections
import Hero from "./sections/Hero";
import OtherContents from "./sections/OtherContents";
import Contact from "./sections/Contact";
import Message from "./sections/Message";
import CompanyImages from "./sections/CompanyImages";
import Mission from "./sections/Mission";
import CompanyProfile from "./sections/CompanyProfile";


const Index = () => {
    return (
        <>
            <Hero />
            <Message />
            <CompanyImages />
            <Mission />
            <CompanyProfile />
            <OtherContents />
            <Contact />
        </>
    )
};

export default Index;
