import { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Home/Main/Main';
import { Layout } from '../components/Layout'


const Home:FC = () => {
  	return (
		<Layout title='Tuna' description='Многофункциональная платформа для студентов и компаний' keywords='Многофункциональная платформа для студентов и компаний'>
			<Header />
			<Main />
		</Layout>
  	)
}
export default Home;
