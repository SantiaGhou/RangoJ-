import React, { useState } from 'react';
import Logo from '../../assets/RangoJa.png';
import styles from './Header.module.css';

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return(
        <header className={styles.header}>
            <img src={Logo} alt="Logo" />
            <nav className={styles.menu}>
                <a href="#how-it-works" onClick={closeMenu}>Como Funciona</a>
                <a href="#testimonials" onClick={closeMenu}>Nossos Clientes</a>
                <a href="#features" onClick={closeMenu}>Recursos</a>
            </nav>
            <div className={styles.buttons}>
                <a href="#" className={styles.createAccountLink} onClick={closeMenu}>
                    criar conta
                </a>
                <button className={styles.loginButton} onClick={closeMenu}>Entrar</button>
            </div>
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <a href="#" onClick={closeMenu}>Carreiras</a>
                <a href="#" onClick={closeMenu}>iFood Card</a>
                <a href="#" onClick={closeMenu}>Para Empresas</a>
                <div className={styles.mobileButtons}>
                    <a href="#" className={styles.createAccountLink} onClick={closeMenu}>
                        criar conta
                    </a>
                    <button className={styles.loginButton} onClick={closeMenu}>Entrar</button>
                </div>
            </div>
        </header>
    )
}