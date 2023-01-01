import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { FC, useState } from "react";
import { Container } from "../Container/Container";

import style from './Header.module.css';
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

export const Header:FC = () => {

    const [navigation, setNavigation] = useState<Boolean>(false);

    const handleOnClick = () => {
        setNavigation(!navigation)
    }

    const handleOnRegistration = () => {
        Router.push('/auth/registration')
    }

    const handleOnAutorization = () => {
        Router.push('/auth/autorization')
    }

    return(
        <>
        <div className={style.Header}>
            <Container>
                <div className={style.HeaderContainer}>
                    <div className={style.HeaderLogo}>
                        <Link href={'/'}>
                            <Image src='/image/logo_demo.png' alt="Логотип" width={92} height={24} />
                        </Link>
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
                        <button onClick={handleOnAutorization} className={style.HeaderLogIn}>Войти</button>
                        <button onClick={handleOnRegistration} className={style.HeaderRegistr}>Регистрация</button>
                    </div>
                    <div className={style.HeaderMobile}>
                        <button onClick={handleOnClick} className={classNames(style.HeaderMobileBtn, {[style.HeaderMobileBtn_Active] : navigation})}><p className={style.HeaderMobileBtnStroke}></p></button>
                    </div>
                </div>
            </Container>
        </div>
        <HeaderMobile navigation={navigation} handleOnRegistration={handleOnRegistration} handleOnAutorization={handleOnAutorization} />
        <div onClick={handleOnClick} className={classNames(style.Overlay, {[style.Overlay_Active] : navigation})} />
        </>
    )
}