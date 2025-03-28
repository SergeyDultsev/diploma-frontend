'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navigation.module.scss";
import HomeIcon from "@/assets/icon/HomeIcon";
import ProfileIcon from "@/assets/icon/ProfileIcon";
import SearchIcon from "@/assets/icon/SearchIcon";
import AddIcon from "@/assets/icon/AddIcon";
import SaveIcon from "@/assets/icon/SaveIcon";
import SettingsIcon from "@/assets/icon/SettingsIcon";
import ExitIcon from "@/assets/icon/ExitIcon";

const Navigation: React.FC = () => {
    const currentRoute = usePathname(); 

    return (
        <section className={styles["nav"]}>
            <nav className={styles["nav-list"]}>
                <Link href="/" className={`${currentRoute === '/' ? styles["nav-item__active"] :  styles["nav-item"]}`}>
                    <HomeIcon/>
                    <p className={styles["nav-item__descr"]}>Главная</p>
                </Link>
                <Link href="/profile" className={`${currentRoute === '/profile' ? styles["nav-item__active"] :  styles["nav-item"]}`}>
                    <ProfileIcon/>
                    <p className={styles["nav-item__descr"]}>Профиль</p>
                </Link>
                <Link href="/search" className={`${currentRoute === '/search' ? styles["nav-item__active"] :  styles["nav-item"]}`}>
                    <SearchIcon/>
                    <p className={styles["nav-item__descr"]}>Поиск</p>
                </Link>
                <Link href="/create" className={`${currentRoute === '/create' ? styles["nav-item__active"] :  styles["nav-item"]}`}>
                    <AddIcon/>
                    <p className={styles["nav-item__descr"]}>Создать</p>
                </Link>
                <Link href="/favorites" className={`${currentRoute === '/favorites' ? styles["nav-item__active"] :  styles["nav-item"]}`}>
                    <SaveIcon/>
                    <p className={styles["nav-item__descr"]}>Избранное</p>
                </Link>
                <Link href="/settings" className={`${currentRoute === '/settings' ? styles["nav-item__active"] :  styles["nav-item"]}`}>
                    <SettingsIcon/>
                    <p className={styles["nav-item__descr"]}>Настройки</p>
                </Link>
                <div className={styles["nav-item"]}>
                    <ExitIcon/>
                    <p className={styles["nav-item__descr"]}>Выход</p>
                </div>
            </nav>
        </section>
    );
}

export default Navigation;