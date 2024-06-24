import React from 'react'
import './Footer.css'
import kavakLogo from '../../assets/kavak.svg'

export const Footer = () => {
  return (
    <nav>
        <div className='logo-container'>
            <img className='logo' src={kavakLogo} alt="" />
        </div>
        <div className='enlaces'>
            <ul>
                <li>
                    <a href="">Paga a meses</a>
                </li>
                <li>
                    <a href="">Compra un auto</a>
                </li>
                <li>
                    <a href="">Vende tu auto</a>
                </li>
                <li>
                    <a href="">Cuida tu auto</a>
                </li>
                <li>
                    <a href="">Nosotros</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
