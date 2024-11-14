"use client";

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type NavMenuProps = {
    styles: { readonly [key: string]: string },
};

const NavMenu = (props: NavMenuProps): React.JSX.Element => {
    const pathname = usePathname();

    const toggleNavBar = () => {
        const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
        if (toggler) {
            toggler.click();
        }
    };

    const styles = props.styles;

    return (
        <>
            <div className={`${styles['top-row']} ps-3 navbar navbar-dark`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${styles['navbar-brand']}`} href="/">React + Next.js</Link>
                </div>
            </div>

            <input type="checkbox" title="Navigation menu" className={styles['navbar-toggler']} />

            <div className={styles['nav-scrollable']} onClick={toggleNavBar}>
                <nav className="flex-column">
                    <div className={`${styles['nav-item']} nav-item px-3`}>
                        <Link className={`${styles['nav-link']} nav-link ${pathname === '/' ? styles['active'] : ''}`} href="/">
                            <span className={`bi ${styles.bi} ${styles['bi-house-door-fill-nav-menu']}`} aria-hidden="true"></span> Home
                        </Link>
                    </div>

                    <div className={`${styles['nav-item']} nav-item px-3`}>
                        <Link className={`${styles['nav-link']} nav-link ${pathname === '/game' ? styles['active'] : ''}`} href="/game">
                            <span className={`bi ${styles.bi} ${styles['bi-plus-square-fill-nav-menu']}`} aria-hidden="true"></span> Game
                        </Link>
                    </div>

                    <div className={`${styles['nav-item']} nav-item px-3`}>
                        <Link className={`${styles['nav-link']} nav-link ${pathname === '/weather' ? styles['active'] : ''}`} href="/weather">
                            <span className={`bi ${styles.bi} ${styles['bi-list-nested-nav-menu']}`} aria-hidden="true"></span> Weather
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavMenu;
