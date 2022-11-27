import { FC } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { About } from '../components/Index/About/About';
import { Mailing } from '../components/Index/Mailing/Mailing';
import { Main } from '../components/Index/Main/Main';
import { Layout } from '../components/Layout'


const Index:FC = () => {
  	return (
		<Layout title='Tuna' description='Многофункциональная платформа для студентов и компаний' keywords='Многофункциональная платформа для студентов и компаний'>
			<Header />
			<Main />
			<About />
			<Mailing />
			<Footer />
		</Layout>
  	)
}
export default Index;
