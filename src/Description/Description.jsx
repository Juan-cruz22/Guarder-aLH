import React from 'react';
import style from './Description.module.css'

export default function Description() {
    return(
        <>
    <div className={style.conteinerDescription}>
    <p className={style.textDescription}>RESERVÁ LAS MEJORES VACACIONES PARA TU COMPAÑERO/A</p>
    <p className={style.textDescription}>SEGURIDAD LAS 24hs</p>
    <p className={style.textDescription}>LARGOS PASEOS DIARIOS EN NUESTRAS CUATRO HECTAREAS VERDES</p>
    <br></br>
    <br></br>
    <p className={style.textDescription}>GUARDERÍA CANINA "LA HERMOSURA"</p>
    <p className={style.textDescription}>DESDE 2011 CUIDANDO A NUESTROS HUESPEDES</p>
    </div>
        <div className={style.conteinerButton}>
            <button className={style.buttonDescription}>RESERVA AHORA</button>
        </div>
        </>
    )
}