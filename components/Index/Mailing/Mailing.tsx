import { FC } from "react";
import { Container } from "../../Container/Container";

import style from './Mailin.module.css';

export const Mailing:FC = () => {

    return(
        <div className={style.Mailing}>
            <Container>
                <div className={style.MailingContainer}>
                    <h4 className={style.MailingTitle}>Подпишись на рассылку с новостями о платформе</h4>
                    <form className={style.MailingForm}>
                        <input className={style.MailingInput} type="text" placeholder='Введите электронную почту' />
                        <button className={style.MailingBtn} type="submit">Подписаться</button>
                    </form>
                </div>
            </Container>
        </div>
    )
}