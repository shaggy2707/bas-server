import React from "react";

export default function Button(props) {
    if(props.form) {
        return(
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    {props.label}
                    </button>
                </div>
            </div>
        );
    } else {
        <button className="shadow bg-red-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            {props.label}
        </button>
    }

}
