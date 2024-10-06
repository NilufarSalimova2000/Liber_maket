import React from "react";
import style from "./header-main.module.scss";
import { Link } from "react-router-dom";

export const HeaderMain = () => {
    return (
        <div className={style.wrapper}>
            <a className={style.select} href="#">Ўз</a>
            <Link className={style.regist} to={"/profile"}>Кириш</Link>
        </div>
    )
}