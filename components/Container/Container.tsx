import React, { FC } from "react";

import style from './Container.module.css';

interface IChild{
    children?: React.ReactNode;
}

export const Container:FC<IChild> = ({ children }) => (
    <div className={style.Container}>
        {children}
    </div>
)