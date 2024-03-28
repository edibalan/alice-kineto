// Components
import Card from './Card/Card';

// Data
import data from '../../data';

// Styles
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content | container'>
        <ul className='footer__navigation' role='list'>
          {
            data.modal__cards.map(( card, index ) => (
              <Card
                key={ 'footer-card-' + ( index + 1 ) }
                id={ card.id }
                labels={ card.labels }
                title={ card.title }
                values={ card.values }
              />
            ))
          }
        </ul>
      </div>

      <section className='footer__copyright'>
        <p>Alice Professional Kineto</p>
        <p>Copyright &copy; { new Date().getFullYear() }</p>
      </section>
    </footer>
  )
}

export default Footer