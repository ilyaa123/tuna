import { FC } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";


const Registration:FC = () => {

    return (
        <Layout
        title='Tuna - Регистрация' 
        description='Регистрация в многофункциональной платформу для студентов и компаний'
        >
            <Header />
            <div>
                Это страничка с регистрацией!
            </div>
            <Footer />
        </Layout>
    )
}

export default Registration