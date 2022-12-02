import React, { useState } from "react";

const MyAccordion = ({ id, question, answer }) => {
  
    const [show, setShow]= useState (false);


    return (
    <div className="max-w-3xl m-auto">
      <div className="text-3xl font-bold flex space-x-5">
        <button onClick={()=>setShow(!show)}>+</button>
        <h1>{question}</h1>
      </div>
      { show && <h2 className="">{answer}</h2>}
      
    </div>
  );
};

export default MyAccordion;
