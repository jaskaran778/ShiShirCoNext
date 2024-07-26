import Contact from "@/components/Contact";
import React from "react";
import Team from "../../components/Team";

function page() {
  return (
    <div>
      <div className="mt-20">
        <Team />
      </div>
      <div className="mt-40">
        <Contact />
      </div>
    </div>
  );
}

export default page;
