import React from "react";
import style from "./Bubble.module.css"

export default function Bubble() {

    return (
        <>
        <div className={style.bubbleWhatsapp}> <img className={style.imgBWhatsapp} src="../../images/Whatsapp.png" alt="" /></div>
        <div className={style.bubbleInstagram}> <img  className={style.imgBInstagram} src="../../images/Instagram.png" alt="" /></div>
        </>
    )
}