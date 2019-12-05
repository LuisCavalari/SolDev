import React from 'react';
import Store from './store'
import Routes from './routes'
import { Global } from './styles/global'
import { Provider } from 'react-redux'
import Header from './components/Header';
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Global />
        <Header />
        <Routes/>
        <Footer />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
