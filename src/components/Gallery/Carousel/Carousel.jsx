// Data
import data from '../../../data';

// Styles
import './Carousel.css';

const Carousel = () => {
  const switchImage = event => {
    const carousel__button = event.target;
    const carousel__gallery = event.target.parentNode.previousSibling;

    carousel__button.id === 'forward'
      ? carousel__gallery.scrollLeft += carousel__gallery.clientWidth
      : carousel__gallery.scrollLeft -= carousel__gallery.clientWidth
  }

  const zoomImage = event => {
    const image = event.target;
    const gallery = event.target.parentNode;

    if (window.innerWidth >= 600) {
      !image.classList.contains('zoomed')
        ? (
          image.classList.add('zoomed'),
          image.style.height = `${ gallery.clientHeight + 1 }px`, 
          image.style.width = `${ gallery.clientWidth + 1 }px`,
          gallery.style.overflow = 'hidden'
        )
        : (
          image.classList.remove('zoomed'),
          image.style.height = 'auto', 
          image.style.width = 'auto',
          gallery.style.overflowX = 'scroll'
        )
    }
  }

  return (
    <div className='carousel'>
      <div className='carousel__gallery'>
        {
          data.gallery__images.map(( image, index ) => (
            <img
              key={ 'carousel-image-' + ( index + 1 ) }
              alt='kinetotherapy clinic image'
              className='carousel__image'
              onClick={ event => zoomImage(event) }
              src={ image }
            />
          ))
        }
      </div>

      {
        window.innerWidth < 600 && (
          <div className='carousel__navigation'>
            <button
              id='backward'
              className='carousel__button'
              onClick={ event => switchImage(event) }
            >
              {
                window.innerWidth < 412
                  ? 'Imag. anterioara'
                  : 'Imaginea anterioara'
              }
            </button>

            <button
              id='forward'
              className='carousel__button'
              onClick={ event => switchImage(event) }
            >
              {
                window.innerWidth < 412
                  ? 'Imag. urmatoare'
                  : 'Imaginea urmatoare'
              }
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Carousel