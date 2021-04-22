import "./Button.css";
import React from "react";
import NewYork from "./NewYork";
import Germany from "./Germany";
import AddOne from "./AddOne";

export default function Button(props) {
    return (
        <div className="button">
            {props.display}
        </div>
    )
}