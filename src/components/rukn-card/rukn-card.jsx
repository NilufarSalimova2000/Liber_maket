import React from "react";
import style from "./rukn-card.module.scss";

export const RuknCard = ({id, img})=> {
    return (
        <div>
            <img src={img} alt="imag" />
        </div>
    )
}