import React from 'react'
import './Footer.css'
import kavakLogo from '../../assets/kavak.svg'
import mxFlag from '../../assets/mx.svg'
import { CaretDown, UserCircle } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <nav className='navegacion'>
        <div className='navbar-contenido'>
            <div className='logo-container'>
                <img className='logo' src={kavakLogo} alt="" />
            </div>
            <div className='enlaces-container'>
                <ul>
                    <li>
                        <a href="/">Paga a meses</a>
                    </li>
                    <li>
                        <a href="/"> Compra un auto</a>
                    </li>
                    <li>
                        <a href="/">Vende tu auto</a>
                    </li>
                    <li>
                        <a href="/">Cuida tu auto</a>
                    </li>
                    <li>
                        <a href="/">Nosotros</a>  
                        <CaretDown className='caret-down' size={18} weight="bold" />                      
                    </li>
                </ul>
                <img className='mxFlag' src={mxFlag} alt="" />
                <ul>
                    <li>
                        <UserCircle  className='user-circle' size={24} />
                        <a href="/">Ingresar</a>
                    </li>
                </ul>                
            </div>
        </div>
    </nav>
  )
}
