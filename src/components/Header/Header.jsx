// Assets
import logo from '../../assets/logo.webp';
import menu__icon from '../../assets/menu-icon.svg';

// Components
import Modal from './Modal/Modal';
import Navigation from './Navigation/Navigation';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Header.css';

const Header = props => {
  return (
    <header className={ 'header' + props.header }>
      <div className='header__content'>
        <img alt='logo' className='logo' src={ logo } />
        {
          window.innerWidth < 768
            ? (
              <>
                <button
                  className='open__modal'
                  onClick={ props.handleModal }
                >
                  <img alt='menu icon' className='menu__icon' src={ menu__icon }/>
                </button>

                <Modal
                  backdrop={ props.modal__backdrop }
                  handleModal={ props.handleModal }
                  status={ props.modal }
                />
              </>
            )
            : <Navigation />
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  handleModal: PropTypes.func,
  header: PropTypes.string,
  modal: PropTypes.string,
  modal__backdrop: PropTypes.string
}

export default Header