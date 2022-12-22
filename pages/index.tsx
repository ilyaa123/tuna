import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { About } from '../components/Index/About/About';
import { Mailing } from '../components/Index/Mailing/Mailing';
import { Main } from '../components/Index/Main/Main';
import { Layout } from '../components/Layout'
import { addNum } from '../redux/slices/testSlice';
import { wrapper } from '../redux/store';


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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
	store.dispatch(addNum(2))

	return{props: {}}
});