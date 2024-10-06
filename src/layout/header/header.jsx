import React from "react";
import style from "./header.module.scss"
import { HeaderTop } from "../../components/header-top";
import { HeaderMain } from "../../components/header-main";
import { HeaderBottom } from "../../components/header-bottom";

export const Header = () => {
    return (
        <header>
            <div className={style.header_top}>
                <div className="container">
                    <div className={style.wrapper}>
                        <HeaderTop />
                        <HeaderMain />
                    </div>
                </div>
            </div>
            <div className={style.header_bottom}>
                <div className="container">
                    <HeaderBottom />
                </div>
            </div>
        </header>
    )
}