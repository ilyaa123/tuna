import '../styles/globals.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import App from 'next/app';
import { wrapper } from '../redux/store'
import { addNum } from '../redux/slices/testSlice';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  
  store.dispatch(addNum(3))

  return {
    pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        pathname: context.ctx.pathname
    },
};
})

export default wrapper.withRedux(MyApp)