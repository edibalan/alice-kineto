// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Prices from './components/Prices/Prices';
import Footer from './components/Footer/Footer';

// React
import { useState } from 'react';

// Exports
export const QS = element => document.querySelector(element);
export const QSAll = element => document.querySelectorAll(element);

const App = () => {
  let previousPosition = window.scrollY;
  const [ state, setState ] = useState({
    header: ' | blurred',
    home__button: ' | hidden',
    modal: ' | hidden',
    modal__backdrop: ''
  });

  const setStateInTimeout = ( props, time ) => {
    setTimeout(() => setState(prevState => ({ ...prevState, ...props })), time);
  }

  const handleModal = () => {
    state.modal === ' | hidden'
      ? (
        setState(prevState => ({
          ...prevState,
          header: ' | hidden',
          home__button: ' | hidden',
        })),
        setStateInTimeout({ 'modal': '' }, 500),
        setStateInTimeout({ 'modal__backdrop': ' | blurred' }, 750)
      )
      : (
        setState(prevState => ({ ...prevState, modal__backdrop: '' })),
        setStateInTimeout({ modal: ' | hidden' }, 200),
        setStateInTimeout({ header: ' | blurred' }, 500)
      )
  }

  // window.onresize = () => setTimeout(() => location.reload(), 500);

  window.onscroll = () => {
    let currentPosition = window.scrollY;

    setState(prevState => ({ ...prevState, modal__backdrop: '' }));
    setStateInTimeout({ modal: ' | hidden' }, 200);
    
    currentPosition > window.innerHeight
      ? setState(prevState => ({ ...prevState, home__button: '' }))
      : setState(prevState => ({ ...prevState, home__button: ' | hidden' }));
    
    currentPosition > previousPosition
      ? setStateInTimeout({ header: ' | hidden' }, 150)
      : setStateInTimeout({ header: ' | blurred' }, 150);
  }

  return (
    <>
      <Header
        handleModal={ handleModal }
        header={ state.header }
        modal={ state.modal }
        modal__backdrop={ state.modal__backdrop }
      />

      <main>
        <Home />
        <Services home__button={ state.home__button } />
        <Gallery />
        <Prices />
      </main>

      <Footer />
    </>
  )
}

export default App