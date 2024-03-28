// Assets
import logo from '../../../../assets/logo.webp';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Card.css';

const Card = props => {
  return (
    <li className='card'>
      {
        props.id === 1 && (
          <img alt='logo' className='secondary__logo' src={ logo }/>
        )
      }

      <h3 className='card__title'>{ props.title }</h3>
      <ul className='card__content' role='list'>
        {
          props.labels.map(( _, index ) => (
            <li key={ 'card-link-' + ( index + 1 ) }>
              {
                props.id === 1
                  ? (
                    <>
                      <span>{ props.labels[index] }</span>
                      <span>{ props.values[index] }</span>
                    </>
                  )
                  : (
                    <a href={ props.values[index] }>
                      { props.labels[index] }
                    </a>
                  )
              }
            </li>
          ))
        }
      </ul>
    </li>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  labels: PropTypes.array,
  title: PropTypes.string,
  values: PropTypes.array
}

export default Card