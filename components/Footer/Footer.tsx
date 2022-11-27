import Image from "next/image";
import { FC } from "react";
import { Container } from "../Container/Container";

import style from './Footer.module.css';

export const Footer:FC = () => {
    
    return (
        <div className={style.Footer}>
            <Container>
                <div className={style.FooterContent}>
                    <div className={style.FooterTop}>
                        <div className={style.FooterLogo}>
                            <Image src='/image/logo_demo2.png' alt="Логотип" width={92} height={24} />
                        </div>
                        <div className={style.FooterSocial}>
                            <p className={style.FooterSocialItem}>social icons?  </p>
                        </div>
                    </div>
                    <div className={style.FooterBottom}>
                        <p className={style.FooterCopyRight}>© 2022 tunnyadec</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}