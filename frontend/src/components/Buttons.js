import "./Buttons.css";
import React from "react";
import NewYork from "./NewYork";
import Germany from "./Germany";
import AddOne from "./AddOne";

export default function Buttons(props) {
    return (
        <div className="buttons">
            <NewYork />
            <Germany />
            <AddOne />
        </div>
    )
}