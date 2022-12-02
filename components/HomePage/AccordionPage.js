import React, { useState } from "react";
import { questiions } from "./ApiData";
import MyAccordion from "./MyAccordion";

const AccordionPage = () => {
  const [data, setData] = useState(questiions);

  return (
    <div className="text-center py-32">
      {data.map((itemval) => {
        const { id} = itemval;
        return <MyAccordion key={id} {...itemval}/>;
      })}
    </div>
  );
};

export default AccordionPage;
