import React from "react";
import style from "./obuna.module.scss";
import imag from "../../assets/obuna.svg";
import imag2 from "../../assets/obuna2.svg";

export const Obuna = () => {
    return (
        <div>
            <div className={style.block}>
                <h2 className={style.title}>Узингиз севган булимга обуна бўлинг</h2>
            </div>
            <div className={style.block2}>
                <div>
                    <h3 className={style.sub_title}>Обуна</h3>
                    <img className={style.img} src={imag} alt="imag" />
                    <img className={style.img} src={imag2} alt="imag" />
                    <p className={style.text}>Обуна 30 кун давом этади</p>
                </div>
                <div>
                    <div className={style.content}>
                        <div className={style.des}>
                            <p className={style.info}>Бошланиш вакти</p>
                            <p className={style.time}>12/09/2021</p>
                        </div>
                        <div className={style.des}>
                            <p className={style.info}>Якунланиш вакти</p>
                            <p className={style.time}>12/10/2021</p>
                        </div>
                        <div className={style.des}>
                            <p className={style.info}>Обуна нархи</p>
                            <p className={style.prise}>12 000 сум</p>
                        </div>
                    </div>
                    <a className={style.btn} href="#">Обуна булиш</a>
                </div>
            </div>
        </div>
    )
}