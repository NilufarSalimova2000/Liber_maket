import React from "react";
import style from "./home.module.scss";
import HeroImag from "../../assets/hero_img.svg";
import { BannerData, NewBookData, RuknData, ServiceData } from "../../data/data";
import { BannerCard } from "../../components/banner-card";
import { ServiceCard } from "../../components/service-card";
import { RuknCard } from "../../components/rukn-card";
import { NewBook } from "../../components/new-book";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <section className={style.hero}>
                <div className="container">
                    <div className={style.hero_wrapper}>
                        <div className={style.block}>
                            <div className={style.content}>
                                <h2 className={style.title}>Кўп ўқилаётганлар</h2>
                                <img src={HeroImag} alt="imag" />
                            </div>
                            <div className={style.list}>
                                {BannerData?.map((item) => {
                                    return <BannerCard key={item.id} img={item.img} title={item.title} />
                                })}
                            </div>
                        </div>
                        <div className={style.block2}>
                            <h3 className={style.block_title}>Китоб ўқишни ёқтирасизми?</h3>
                            <p className={style.text}>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                            <a className={style.hero_btn} href="#">Обуна бўлиш</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.service}>
                <div className="container">
                    <div className={style.service_list}>
                        {ServiceData?.map((item) => {
                            return <ServiceCard key={item.id} img={item.img} title={item.title} text={item.text} />
                        })}
                    </div>
                </div>
            </section>
            <section className={style.rukn}>
                <div className="container">
                    <h2 className={style.rukn_title}>Рукнлар</h2>
                    <div className={style.rukn_list}>
                        {RuknData?.map((item) => {
                            return <RuknCard key={item.id} img={item.img} />
                        })}
                    </div>
                </div>
            </section>
            <section className={style.new_book}>
                <div className="container">
                    <h2 className={style.new_book_title}>Янги қўшилганлар</h2>
                    <div className={style.new_book_list}>
                        {NewBookData?.map((item) => {
                            return <Link to={`/newbook/${item.id}`} >
                            <NewBook key={item.id} img={item.img} title={item.title} info={item.info} />
                            </Link>
                        })}
                    </div>
                </div>
            </section>
        </>


    )
}