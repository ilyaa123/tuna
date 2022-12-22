import classNames from "classnames";
import { FC, } from "react";

import style from './HeaderMobile.module.css';

interface IHeaderMob{
    navigation: Boolean,
    setNavigation: (prev: boolean) => void
}

export const HeaderMobile:FC<IHeaderMob> = ({navigation, setNavigation}) => {

    const handleOnClick = () => {
        setNavigation(!navigation)
    }

    return (
        <>
            <div className={style.HeaderMobile}>
                <button onClick={handleOnClick} className={classNames(style.HeaderMobileBtn, {[style.HeaderMobileBtn_Active] : navigation})}><p className={style.HeaderMobileBtnStroke}></p></button>
            </div>
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
                <button className={style.HeaderRegistr}>Регистрация</button>
                <button className={style.HeaderLogIn}>Войти</button>
            </ul>
        </>
    )
}