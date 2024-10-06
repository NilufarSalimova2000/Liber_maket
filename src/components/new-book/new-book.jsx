import React from "react";
import style from "./new-book.module.scss";

export const NewBook = ({id, img, title, info}) => {
    return (
        <div className={style.item}>
            <img className={style.img} src={img} alt="imag" />
            <h3 className={style.title}>{title}</h3>
            <p className={style.info}>{info}</p>
            <div className={style.icon_block}>
                <p className={style.cost}>4.7</p>
                <span className={style.icons}></span>
            </div>
        </div>
    )
}