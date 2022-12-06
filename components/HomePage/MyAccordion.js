import React, { useState } from "react";

const MyAccordion = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-3xl  m-auto text-gray-300">
      <div className="text-lg font-semibold flex  justify-between  bg-gray-900 my-3 rounded-full py-1 px-5 ">
        <h1 className="">{question}</h1>

        <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
      </div>
      <div className="">{show && <h2 className="">{answer}</h2>}</div>
    </div>
  );
};

export default MyAccordion;
