import React from "react";
import style from "./Bubble.module.css"
import BWhatsapp from "../../images/Whatsapp.png"
import BInstagram from "../../images/Instagram.png"

export default function Bubble() {

    return (
        <>
        <div className={style.bubbleWhatsapp}> <img className={style.imgBWhatsapp} src={BWhatsapp} alt="" /></div>
        <div className={style.bubbleInstagram}> <img  className={style.imgBInstagram} src={BInstagram} alt="" /></div>
        </>
    )
}