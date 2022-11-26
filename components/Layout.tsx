import Head from "next/head";
import React, { FC } from "react";

interface ILayout{
    title: string;
    description: string;
    keywords: string;
    children?: React.ReactNode
}

export const Layout:FC<ILayout> = ({title, description, keywords, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="Keywords" content={keywords} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Rubik:wght@600&display=swap" rel="stylesheet" />
            </Head>
            {children}
        </>
    )
}