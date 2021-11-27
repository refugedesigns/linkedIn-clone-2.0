import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';
import store from "../store/store"
import '../styles/globals.css'



let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  
  
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
    </Provider>
  )
}

export default MyApp
