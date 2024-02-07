import React from "react";
import style from "./Ubicacion.module.css"
import uBicBack from "../../images/PHOTOS03.jpeg"

export default function Ubicacion() {
    return (
        <>
        <img className={style.imgUbicacionBackground} src={uBicBack}></img>

        <div className={style.conteinerUbication} >
            <div className={style.conteinerText}>
                <h1 className={style.titleUbication}>UBICACIÓN</h1>
                <br></br>
                <br></br>
                <p>Nos encontramos a 15 minutos del centro de la ciudad de La Plata, buenos aires</p>
                <p>Ruta 11 km 13,5 "Paraje "La hermosura"</p>
                <br></br>
                <br></br>
                <p className={style.textClick}>click para mas informacion</p>
                <br></br>
                <br></br>
            </div>
            <div className={style.gmap_canvas}>
                <iframe className={style.iframe} src="https://maps.google.com/maps?q=La hermosura Guarderia Canina&t=k&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        </>
    )
}