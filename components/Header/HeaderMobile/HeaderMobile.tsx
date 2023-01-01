import classNames from "classnames";
import { FC, } from "react";

import style from './HeaderMobile.module.css';

interface IHeaderMob{
    navigation: Boolean,
    handleOnRegistration: () => void,
    handleOnAutorization: () => void
}

export const HeaderMobile:FC<IHeaderMob> = ({navigation, handleOnRegistration, handleOnAutorization}) => {

    return (
        <>
            <ul className={classNames(style.HeaderMobileList, {[style.HeaderMobileList_Active] : navigation})}>
                <li className={style.HeaderItem}>
                    <p className={style.HeaderP}>Проекты</p>
                </li>
                <li className={style.HeaderItem}>
                    <p className={style.HeaderP}>Вакансии</p>
                </li>
                <li className={style.HeaderItem}>
                    <p className={style.HeaderP}>О нас</p>
                </li>
                <button onClick={handleOnRegistration} className={style.HeaderRegistr}>Регистрация</button>
                <button onClick={handleOnAutorization} className={style.HeaderLogIn}>Войти</button>
            </ul>
        </>
    )
}