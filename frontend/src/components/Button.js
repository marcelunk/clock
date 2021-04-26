import "./Button.css";
import React, { useEffect } from "react";

export default function Button({getTime, display, region, city}) {

    return (
        <div className="button" onClick={() => getTime(region, city)}>
            {display}
        </div>
    )
}