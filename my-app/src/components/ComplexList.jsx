import { complexs } from "../data/complexsExample";

import ComplexCard from "./ComplexCard";

const ComplexList = () => {
  return (
    <div className="max-h-[600px] w-full m-auto shadow-xl flex my-5 py-5 ">
      <div className="flex  flex-col items-start h-auto w-1/2 overflow-y-scroll scrollbar">
        {complexs &&
          complexs.map((complex,index) => <ComplexCard  key={index} complexDetails={complex} />)}
      </div>
      <div className="">Mapa</div>
    </div>
  );
};

export default ComplexList;
