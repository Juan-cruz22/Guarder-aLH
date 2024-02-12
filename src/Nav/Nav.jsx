import React from 'react';
import style from './Nav.module.css';
import DDFF from '../../images/DDFF.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

    return (
        <>
            <nav>
                <input type="checkbox" className={style.check}/>
                <label htmlFor="check" className={style.checkbtn}>
                    <FontAwesomeIcon icon={faBars}/>
                </label>
                <a href='/' className={style.enlace}>
                    <img className={style.logo} src={DDFF} alt="" />
                </a>
                <ul>
                    <li><a className={style.active} href='#'>Inicio</a></li>
                    <li><a href='#'>Espacios</a></li>
                    <li><a href='#'>Nosotros</a></li>
                    <li><a href='#'>Ubicación</a></li>
                </ul>
            </nav>
        </>
    )
}