import React from "react";
import style from "./sozlamalar.module.scss";
import imag from "../../assets/sozlamalar.svg"

export const Sozlamalar = () => {
    return (
        <div className={style.block}>
            <h3 className={style.title}>Созламалар</h3>
            <p className={style.info}>Сурат юклаш</p>
            <img className={style.img} src={imag} alt="imag" />
            <a className={style.btn} href="#">Сақлаш</a>

        </div>
    )
}