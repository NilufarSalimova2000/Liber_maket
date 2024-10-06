import React from "react";
import style from "./user.module.scss";
import Imag from "../../assets/img/user.png"

export const User = () => {
    return (
        <div className={style.user}>
            <div className="container">
                <div className={style.wrapper}>
                    <img src={Imag} alt="imag" />
                    <div>
                        <h3 className={style.name}>Суғдиёна Икромова</h3>
                        <p className={style.tel}>+998 90 253 77 53</p>
                        <p className={style.info}>ID: 0001  Баланс: 45 000 сўм</p>
                    </div>
                </div>
            </div>
        </div>
    )
}