import React from "react";
import style from "./footer-bottom.module.scss";
import Icon from "../../assets/icons.svg";
import Uzcard from "../../assets/Payment.svg";
import Humo from "../../assets/humo.svg";

export const FooterBottom = () => {
    return (
        <div className={style.footer_bottom}>
            <div className="container">
                <div className={style.wrapper}>
                    <div>
                        <a className={style.link} href="#">Ижтимоий тармоқлар</a>
                        <a href="#">
                            <img src={Icon} alt="icon" />
                        </a>
                    </div>
                    <div>
                        <a className={style.link} href="#">Боғланиш</a>
                        <div className={style.links}>
                            <a className={style.link2} href="#">+998 90 253 77 53</a>
                            <a className={style.link2} href="#">support@liber.uz</a>
                        </div>
                    </div>
                    <div>
                        <a className={style.link} href="#">Биз қабул қиламиз</a>
                        <div className={style.link_block}>
                            <a href="#">
                                <img src={Uzcard} alt="imag" />
                            </a>
                            <a href="#">
                                <img src={Humo} alt="imag" />
                            </a>
                            <a href="#">
                                <img src={Humo} alt="imag" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}