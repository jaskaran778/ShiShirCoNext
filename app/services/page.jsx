import Contact from "@/components/Contact";
import Services from "@/components/Services";
import React from "react";

function page() {
  return (
    <div>
      <div className="mt-40">
        <Services />
      </div>
      <div className="mt-40"></div>
      <Contact />
    </div>
  );
}

export default page;
