import React, { useState } from "react";
import { questiions } from "./ApiData";
import MyAccordion from "./MyAccordion";

const AccordionPage = () => {
  const [data, setData] = useState(questiions);

  return (
    <div className="flex py-32 flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl py-10">
          Frequently Asked Questions
        </h1>
      <div className="  ">
        {data.map((itemval) => {
          const { id } = itemval;
          return <MyAccordion key={id} {...itemval} />;
        })}
      </div>
    </div>
  );
};

export default AccordionPage;
