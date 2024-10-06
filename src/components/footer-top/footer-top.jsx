import React from "react";
import style from "./footer-top.module.scss";
import Google from "../../assets/googleplay.svg";
import Appstore from "../../assets/appstore.svg";

export const FooterTop = () => {
    return (
        <div className={style.footer_top}>
            <div className="container">
                <div className={style.wrapper}>
                    <div>
                        <h3 className={style.title}>Платформа хақида</h3>
                        <a className={style.link} href="#">Liber ўзи нима?</a>
                        <a className={style.link} href="#">Фойдаланиш шартлари</a>
                        <a className={style.link} href="#">Ёрдам</a>
                    </div>
                    <div>
                        <h3 className={style.title}>Обуна хақида</h3>
                        <a className={style.link} href="#">Обуна бўлиш</a>
                        <a className={style.link} href="#">Қандай тўлаш</a>
                    </div>
                    <div>
                        <h3 className={style.title}>Китоблар</h3>
                        <a className={style.link} href="#">Аудио китоблар</a>
                        <a className={style.link} href="#">Электрон китоблар</a>
                        <a className={style.link} href="#">Китоблар</a>
                    </div>
                    <div>
                        <h3 className={style.title}>Мобил илова</h3>
                        <a href="#">
                            <img className={style.img} src={Google} alt="google" />
                        </a>
                        <a href="#">
                            <img src={Appstore} alt="appstore" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}