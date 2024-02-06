import React from "react";
import style from "./Check.module.css";
import { useState } from "react";

export default function Check() {
    const [nombre, setNombre] = useState('');
    const [fechaEntrada, setFechaEntrada] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mensaje = `Hola, me gustaría tener informacion para hospedar a ${nombre} desde el día ${fechaEntrada} hasta el día ${fechaSalida}`;
        const telefono = '2213597146'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
        const whatsappURL = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
        window.location.href = whatsappURL;
      };

    return (
        <div className={style.conteinerCheck}>
            <div className={style.conteinerText}>
                <h2>CONSULTAR ESTADÍA</h2>
            </div>
            <div className={style.conteinerInput}>
                <input className={style.inputName} type="text" placeholder="Nombre de tu compañero/a" value={nombre} onChange={(e) => setNombre(e.target.value)}></input><br></br>
                <label className={style.labelDate}>Fecha de entrada</label>
                <input className={style.inputDate} type="date" value={fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)}></input>
                <input className={style.inputDate} type="date" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}></input>
                <label className={style.labelDate}>Fecha de salida</label><br></br>
                <input className={style.inputCheckbox} type="checkbox"></input>
                <label className={style.labelCheckbox}> incluir traslado</label>
            </div>
            <div className={style.conteinerButton}>
                <button className={style.buttonCheck} onClick={handleSubmit}>CONSULTAR</button>
            </div>
        </div>
    )
}