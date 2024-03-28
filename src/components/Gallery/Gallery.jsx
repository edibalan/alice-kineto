// Assets
import './Gallery.css';

// Components
import Carousel from './Carousel/Carousel';

const Gallery = () => {
  return (
    <section className='gallery' id='gallery'>
      <div className='gallery__container | container'>
        <h2 className='gallery__title'>Galerie</h2>
        <Carousel />
      </div>
    </section>
  )
}

export default Gallery