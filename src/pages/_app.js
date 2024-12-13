import { Provider } from 'react-redux';
import '../assets/main.scss'
import { store } from '../store/store';

export default function App({ Component, pageProps }) {
 return <Provider store={store}>
    <Component {...pageProps} />
  </Provider >
}
