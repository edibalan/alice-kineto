// Data
import data from '../../../data';

// Styles
import './Navigation.css';

const Navigation = () => {
  const navigation = data.modal__cards[2];

  return (
    <nav className='navigation'>
      <ul className='navigation__menu' role='list'>
        {
          navigation.labels.map(( _, index ) => (
            <li key={ 'navigation-link-' + ( index + 1 ) }>
              <a href={ navigation.values[index] }>
                { navigation.labels[index] }
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation