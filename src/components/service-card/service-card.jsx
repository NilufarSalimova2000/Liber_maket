import React from "react";
import style from "./service-card.module.scss";

export const ServiceCard = ({id, img, title, text}) => {
    return (
        <div className={style.item}>
            <img src={img} alt="imag" />
            <div>
                <h3 className={style.title}>{title}</h3>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    )
}