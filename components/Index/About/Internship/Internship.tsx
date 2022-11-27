import Image from "next/image";
import { FC } from "react";
import { Container } from "../../../Container/Container";

import style from './Internship.module.css';

export const Internship:FC = () => (
        <div className={style.Internship}>
            <Container>
                
                    <h2 className={style.InternshipTitle}>Ищешь стажировку?</h2>
                    <div className={style.InternshipContent}>
                        <div className={style.InternshipImage}>
                            <Image style={{ width: 'auto', height: '100%' }} src="/image/image2.png" width={446} height={328} alt="Картинка" />
                        </div>
                        <ul className={style.InternshipList}>
                            <li className={style.InternshipItem}>
                                <h3 className={style.InternshipItemTitle}>Присоединяйся к нам</h3>
                                <p className={style.InternshipItemText}>На нашей платформе регистрируются работодатели, которые ищут студентов – таких, как ты</p>
                            </li>
                            <li className={style.InternshipItem}>
                                <h3 className={style.InternshipItemTitle}>Расскажи о себе</h3>
                                <p className={style.InternshipItemText}>НУказывай в резюме свои навыки – система подберет подходящие вакансии</p>
                            </li>
                            <li className={style.InternshipItem}>
                                <h3 className={style.InternshipItemTitle}>Находи работу своей мечты</h3>
                                <p className={style.InternshipItemText}>Выбирай лучшие предложения по отзывам о компании</p>
                            </li>
                        </ul>
                    </div>
                
            </Container>
        </div>
)
