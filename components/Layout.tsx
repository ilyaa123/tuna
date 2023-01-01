import Head from "next/head";
import React, { FC } from "react";

interface ILayout{
    title: string;
    description: string;
    keywords?: string;
    children?: React.ReactNode
}

export const Layout:FC<ILayout> = ({title, description, keywords = 'Многофункциональная платформа для студентов и компаний', children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="Keywords" content={keywords} />
            </Head>
            {children}
        </>
    )
}
