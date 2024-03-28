// Components
import Card from './Card/Card';

// Data
import data from '../../data';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Services.css';

const Services = props => {
  return (
    <section className='services' id='services'>
      <h2 className='services__title'>Servicii</h2>
      <div className='services__content | container'>
        {
          data.services__cards.map(( card, index ) => (
            <Card 
              key={ 'services-card-' + ( index + 1 ) }
              description={ card.description }
              image={ card.image }
              index={ index }
              title={ card.title }
            />
          ))
        }
      </div>
      
      <a href='#home'>
        <button className={ 'services__button' + props.home__button }>
          <i className='fa-sharp fa-solid fa-house'></i>
        </button>
      </a>
    </section>
  )
}

Services.propTypes = { home__button: PropTypes.string }

export default Services