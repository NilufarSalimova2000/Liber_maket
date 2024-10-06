import React from "react";
import style from "./banner-card.module.scss";

export const BannerCard = ({id, img, title}) => {
    return (
        <ul className={style.list}>
            <li className={style.item}>
                <div className={style.img_block}>
                    <img src={img} alt="imag" />
                </div>
                <h3 className={style.title}>{title}</h3>
            </li>
        </ul>
    )
}