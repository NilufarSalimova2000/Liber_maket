import React from "react";
import style from "./profile-layout.module.scss";
import { Link, Outlet } from "react-router-dom";
import { User } from "../user";

export const ProfileLayout = () => {
    return (
        <div className="container">
            <div className={style.wrapper}>
                <User />
                <div className={style.profile_box}>
                    <Link className={style.link} to={'./'}>Обуна бўлиш</Link>
                    <Link className={style.link} to={'./hisob'}>Э-Хисоб</Link>
                    <Link className={style.link} to={'./kitoblar'}>Китобларим</Link>
                    <Link className={style.link} to={'./saqlangan'}>Сақланганлар</Link>
                    <Link className={style.link} to={'./sozlamalar'}>Созламалар</Link>
                    <Link className={style.link} to={'./rejim'}>Тунги режим</Link>
                </div>
                <div className="outlet"><Outlet /></div>
            </div>
        </div>
    )
}