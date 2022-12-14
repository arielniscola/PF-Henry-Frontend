import { complexs } from "../data/complexsExample";
import ComplexCard from "./ComplexCard";

const ComplexList = () => {
  return (

      <div className="flex  flex-row items-start  overflow-y-scroll scrollbar">
        {complexs &&
          complexs.map((complex,index) => <ComplexCard  key={index} complexDetails={complex} />)}
      </div>
  );
};

export default ComplexList;
