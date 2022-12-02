import React, { useState } from "react";

const MyAccordion = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-3xl m-auto text-gray-300">
      <div className="text-3xl font-bold flex space-x-5">
        <h1>{question}</h1>
        <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
      </div>
      {show && <h2 className="">{answer}</h2>}
    </div>
  );
};

export default MyAccordion;
