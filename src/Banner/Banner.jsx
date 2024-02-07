import React from "react";
import style from "./Banner.module.css"
import BANNER from "../../images/BANNER.jpg"

export default function Banner() {

    return (
        <div className={style.conteinerBanner}>
        <img className={style.imgBanner} src={BANNER} alt="banner"></img>
            <div className={style.conteinertext}>
                <div className={style.conteinerStars}>
                    <img className={style.imgStars} src="../../images/STARS.png"></img>
                    <h2 className={style.textBanner}>UNA ESTADÍA EN CONTACTO CON LA NATURALEZA</h2>
                </div>
            </div>
        </div>
    )
}