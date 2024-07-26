import React from "react";
import IntroPage from "../components/IntroPage";
import About from "../components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

function page() {
  return (
    <div>
      <IntroPage />
      <About />
      <Services />
      <Team />
      <div className="mt-32">
        <Contact />
      </div>
    </div>
  );
}

export default page;
