import React from "react";
import style from "./We.module.css";
import WeBack from "../../images/PHOTOS09.jpg";

export default function We() {

    return (
        <>
        <div>
            <img src={WeBack} className={style.imgWe}/>
        </div>

        <div className={style.conteinerWe}>
            <div className={style.conteinertextWe}>
                <h2 className={style.titleWe}>NOSOTROS</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className={style.textWe}>Desde 2011 trabajamos para ofrecerle a nuestros huespedes una estadía agradable y segura.</p>
                <br></br>
                <p className={style.textWe}>Nuestro lugar garantiza tranquilidad absoluta y diversion en contacto con la naturaleza.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className={style.textWeTE}>¡Te esperamos!</p>
            </div>
        </div>
        </>
    )
}