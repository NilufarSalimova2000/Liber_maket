import React from "react";
import style from "./header-bottom.module.scss";

export const HeaderBottom = () => {
    return (
        <div className={style.wrapper}>
            <a className={style.link} href="#">Аудиокитоб</a>
            <a className={style.link} href="#">Электрон китоблар</a>
            <a className={style.link} href="#">Босма китоблар</a>
            <a className={style.link} href="#">Контакт</a>
            <a className={style.link} href="#">Биз хақимизда</a>
        </div>
    )
}