import Image from "next/image"
import { FC } from "react"
import { Container } from "../../../Container/Container"

import style from './Project.module.css'

export const Project:FC = () => (
        <div className={style.Project}>
            <Container>
                <h2 className={style.ProjectTitle}>Хочешь работать над проектом?</h2>
                
                <ul className={style.ProjectList}>
                    <li className={style.ProjectItem}>
                        <div className={style.ProjectItemImage}>
                            <Image style={{ width: '100%', height: 'auto' }} src="/image/project1.png" width={130} height={130} alt="Картинка" />
                        </div>
                        <h4 className={style.ProjectItemTitle}>Найди команду</h4>
                        <p className={style.ProjectText}>Выставляй объявления о наборе на свой проект</p>
                    </li>
                    <li className={style.ProjectItem}>
                        <div className={style.ProjectItemImage}>
                            <Image style={{ width: '100%', height: 'auto' }} src="/image/project2.png" width={130} height={130} alt="Картинка" />
                        </div>
                        <h4 className={style.ProjectItemTitle}>Вступай как участник</h4>
                        <p className={style.ProjectText}>Выбирай из опубликованных объявлений и подавай заявку</p>
                    </li>
                    <li className={style.ProjectItem}>
                        <div className={style.ProjectItemImage}>
                            <Image style={{ width: '100%', height: 'auto' }} src="/image/project3.png" width={130} height={130} alt="Картинка" />
                        </div>
                        <h4 className={style.ProjectItemTitle}>Пополняй портфолио</h4>
                        <p className={style.ProjectText}>Реализованные проекты добавятся резюме</p>
                    </li>
                </ul>
                
            </Container>
        </div>
)
