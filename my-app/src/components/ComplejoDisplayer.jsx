import React from "react";
import ComplejoCard from '../components/ComplejoCard.jsx'
import { complexs } from "../data/complexsExample";

const ComplejoDisplayer = () => {
    return (
        <div className="container mx-auto">
            {complexs.map( (complejo) => (
                <ComplejoCard complejo={complejo}/>    
            ))
            }
        </div>
    )
}

export default ComplejoDisplayer;