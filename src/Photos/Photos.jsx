import React from "react";
import style from "./Photos.module.css";
import P01 from "../../images/PHOTOS01.jpeg";
import P02 from "../../images/PHOTOS02.jpeg";
import P03 from "../../images/PHOTOS03.jpg";
import P04 from "../../images/PHOTOS04.jpg";
import P05 from "../../images/PHOTOS05.jpg";
import P07 from "../../images/PHOTOS07.jpg";
import P08 from "../../images/PHOTOS08.jpg";



export default function Photos() {

    return (
        <>
        <img className={style.imgPhotosBackground} src={P02}></img>

    <div className={style.conteinerEspaciosText}>
        <div className={style.conteinerEspacios}>
            <br></br>
            <p className={style.pespacios}>ESPACIOS</p>
            <br></br>
        </div>
        <div className={style.conteinerText}>
            <p>ESPACIOS CERCADOS</p>
            <p className={style.pcaniles}>CANILES SOLO PARA DESCANZO Y ALIMENTACION</p>
            <p>SEGURIDAD LAS 24HS</p>
        </div>
    </div>

        <div className={style.conteinerPhotos}>
            <img className={style.imgPhotos} src={P01}></img>
            <img className={style.imgPhotos} src={P03}></img>
            <img className={style.imgPhotos} src={P04}></img>
            <img className={style.imgPhotos} src={P05}></img>
            <img className={style.imgPhotos} src={P07}></img>
            <img className={style.imgPhotos} src={P08}></img>
        </div>
        </>
    )
}