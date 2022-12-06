import { complexs } from "../data/complexsExample";

import ComplexCard from "./ComplexCard";

const ComplexList = () => {
  return (
    <div className="max-h-[600px] w-full m-auto shadow-xl flex my-5 py-5 ">
      <div className="h-auto w-1/2 flex-row overflow-y-scroll scrollbar">
        {complexs &&
          complexs.map((complex) => <ComplexCard complexDetails={complex} />)}
      </div>
      <div className="">Mapa</div>
    </div>
  );
};

export default ComplexList;
