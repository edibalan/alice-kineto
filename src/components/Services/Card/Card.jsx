// Node Modules
import PropTypes from 'prop-types';

// React
import { useState } from 'react';

// Styles
import './Card.css';

const Card = props => {
  const [ state, setState ] = useState({
    button__text: 'Mai mult',
    description: ''
  });

  const handleDescription = () => {
    state.description === ''
      ? (
        setState(prevState => ({
          ...prevState,
          button__text: 'Mai putin',
          description: ' | extended'
        }))
      )
      : (
        setState(prevState => ({
          ...prevState,
          button__text: 'Mai mult',
          description: ''
        }))
      )
  }

  return (
    <div className='card'>
      <img
        id={ 'image-' + ( props.index + 1 ) }
        alt='Kinetotherapy illustration'
        className='card__image'
        src={ props.image }
      />

      <div className='card__content'>
        <h3 className='card__title'>{ props.title }</h3>
        <p className={ 'card__description' + state.description }>
          { props.description }
        </p>
        
        {
          ( window.innerWidth < 460 || window.innerWidth >= 600 )
            && (
              <button
                className='card__button'
                onClick={ handleDescription }
              >
                { state.button__text }
              </button>
            )
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string
}

export default Card