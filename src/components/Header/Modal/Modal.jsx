// Components
import Card from './Card/Card';

// Data
import data from '../../../data';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Modal.css';

const Modal = props => {
  return (
    <div className={ 'modal' + props.status }>
      <div className={ 'modal__backdrop' + props.backdrop } />
      <div className='modal__content'>
        <button
          className='modal__button'
          onClick={ props.handleModal }
        >
          ✕
        </button>

        <ul className='modal__navigation' role='list'>
          {
            data.modal__cards.map(( card, index ) => (
              <Card
                key={ 'modal-card-' + ( index + 1 ) }
                id={ card.id }
                labels={ card.labels }
                title={ card.title }
                values={ card.values }
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

Modal.propTypes = {
  backdrop: PropTypes.string,
  handleModal: PropTypes.func,
  status: PropTypes.string
}

export default Modal