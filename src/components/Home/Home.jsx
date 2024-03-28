// Assets
import image from '../../assets/kinetoterapie.webp';

// Data
import data from '../../data';

// Styles
import './Home.css';

const Home = () => {
  return (
    <section className='home'>
      <div className='home__container | container'>
        <img
          alt='kinetotherapy picture'
          className='home__image'
          src={ image }
        />

        <div className='home__content'>
          <h1 className='home__title'>Bun venit !</h1>
          <div className='home__description'>
            {
              data.home__descriptions.map(( description, index ) => (
                <p key={ 'home-description' + ( index + 1 ) }>
                  { description }
                </p>
              ))
            }
          </div>
          
          <a href='mailto:adresa_de_email@gmail.com'>
            <button className='home__button'>
              Programare consultatie
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home