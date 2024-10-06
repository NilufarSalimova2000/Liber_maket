import React from "react";
import style from "./header-top.module.scss";
import Logo from "../../assets/header_logo.svg"

export const HeaderTop = () => {
    return (
        <div className={style.wrapper}>
            <a href="#">
                <img src={Logo} alt="logo" />
            </a>
            <div className={style.block}>
                <a className={style.header_select} href="#">
                Рукнлар
                </a>
                <div className={style.input_wrapper}>
                    <input className={style.header_input} placeholder="Қидириш" type="text" />
                    <a className={style.serach} href="#"></a>
                </div>
            </div>
        </div>
    )
}