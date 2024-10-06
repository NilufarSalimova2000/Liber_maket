import React from "react";
import style from "./footer.module.scss";
import { FooterTop } from "../../components/footer-top";
import { FooterBottom } from "../../components/footer-bottom";

export const Footer = () => {
    return (
        <footer>
            <FooterTop />
            <FooterBottom />
        </footer>
    )
}