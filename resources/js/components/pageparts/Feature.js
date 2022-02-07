import React from "react";

export default function Feature(props) {
    return(
            <div className={`md:w-${props.widthFraction} p-3`}>
                <img src={props.imgLink} alt="feature image" className="mx-auto" />
                <p className="mb-1"><strong className="text-xl">{props.headerText}</strong></p>
                <p>{props.featureText}</p>
            </div>
    );
}
