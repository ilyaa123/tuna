import Image from "next/image";
import { FC } from "react";
import { Container } from "../Container/Container";

import style from './Header.module.css';

export const Header:FC = () => {

    return(
        <div className={style.Header}>
            <Container>
                <div className={style.HeaderContainer}>
                    <div className={style.HeaderLogo}>
                        <Image src='/image/logo_demo.png' alt="Логотип" width={92} height={24} />
                    </div>
                    <ul className={style.HeaderList}>
                        <li className={style.HeaderItem}>
                            <p className={style.HeaderP}>Проекты</p>
                        </li>
                        <li className={style.HeaderItem}>
                            <p className={style.HeaderP}>Вакансии</p>
                        </li>
                        <li className={style.HeaderItem}>
                            <p className={style.HeaderP}>О нас</p>
                        </li>
                    </ul>
                    <div className={style.HeaderButtons}>
                        <button className={style.HeaderLogIn}>Войти</button>
                        <button className={style.HeaderRegistr}>Регистрация</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}