import React from "react";
import Hero from "../PageComponents/Hero";
import Steps from "../PageComponents/steps";
import Reviews from "../PageComponents/Reviews";
import ContactHome from "../PageComponents/contactHome";

export default function Home(){
    return(
        <>
            <Hero />
            <Steps />
            <Reviews/>
            <ContactHome />
        </>
    )
}