import React from "react";
import style from "./newbook-detail.module.scss";
import { useParams } from 'react-router-dom';
import { NewBookData } from "../../data/data";
import Icon1 from "../../assets/icon1.svg";
import Rating from "../../assets/rating.svg";
import Review from "../../assets/review.svg";
import NotFound from "../../assets/not_found.svg";

export const NewBookDetail = () => {
    const { id } = useParams();


    const book = NewBookData.find((item) => item.id === parseInt(id));

    return (
        <div className="container">
            {book ? (
                <div className={style.wrapper}>
                    <img src={book.img} alt={book.title} />
                    <div>
                        <div className={style.title_block}>
                            <h1 className={style.title}>{book.title}</h1>
                            <div className={style.icons}>
                                <img src={Icon1} alt="icon" />
                                <img src={Rating} alt="icon" />
                                <img src={Review} alt="icon" />
                            </div>
                        </div>
                        <p className={style.info}>{book.info}</p>
                        <p className={style.text}>{book.text}</p>
                        <div className={style.block}>
                            <div>
                                <p className={style.author}>Муаллиф</p>
                                <p className={style.name}>Kevin Smiley</p>
                            </div>
                            <div>
                                <p className={style.author}>Нашриёт</p>
                                <p className={style.name}>Wepress Inc.</p>
                            </div>
                            <div>
                                <p className={style.author}>Йил</p>
                                <p className={style.name}>1999</p>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className={style.not_found}>
                    <img src={NotFound} alt="icon" />
                    <p className={style.not}>Сизнинг сўровингиз бўйича хечнарса топилмади!</p>
                </div>
            )}
        </div>
    );
}