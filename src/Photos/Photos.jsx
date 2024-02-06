import React from "react";
import style from "./Photos.module.css"


export default function Photos() {

    return (
        <>
        <img className={style.imgPhotosBackground} src="../../images/PHOTOS02.jpeg"></img>

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
            <img className={style.imgPhotos} src="../../images/PHOTOS01.jpeg"></img>
            <img className={style.imgPhotos} src="../../images/PHOTOS03.jpeg"></img>
            <img className={style.imgPhotos} src="../../images/PHOTOS04.jpg"></img>
            <img className={style.imgPhotos} src="../../images/PHOTOS05.jpg"></img>
            <img className={style.imgPhotos} src="../../images/PHOTOS07.png"></img>
            <img className={style.imgPhotos} src="../../images/PHOTOS08.png"></img>
        </div>
        </>
    )
}