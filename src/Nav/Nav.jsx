import React from 'react';
import style from './Nav.module.css'

export default function Nav() {

    return (
        <>
        <div className={style.navconteiner}>
            <div className={style.imgNav}>
                <img className={style.imageNav} src="../../images/DDFF.png"></img>
            </div>
            <div className={style.buttonNavRA}>
                <button className={style.buttonRA}>RESERVA AHORA</button>
            </div>
            <div className={style.buttonNav}>
                <button className={style.buttonLand}>INICIO</button>
                <button className={style.buttonLand}>ESPACIOS</button>
                <button className={style.buttonLand}>NOSOTROS</button>
                <button className={style.buttonLand}>CONTACTO</button>
            </div>
        </div>
        </>
    )
}