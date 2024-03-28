// Assets
import './Prices.css';

// Components
import TableRow from './TableRow/TableRow';

// Data
import data from '../../data';

// React
import { useEffect, useState } from 'react';

// Utilities
import { QS, QSAll } from '../../App';

const Prices = () => {
  const width = window.innerWidth;

  const [ state, setState ] = useState({
    button__text: 'Mai mult',
    length: 4
  });

  const setRowsNumber = () => {
    width >= 320 && setState(prevState => ({ ...prevState, length: 4 }));
    width >= 360 && setState(prevState => ({ ...prevState, length: 5 }));
    width >= 540 && setState(prevState => ({ ...prevState, length: 6 }));
    width >= 710 && setState(prevState => ({ ...prevState, length: 7 }));
    width >=1024 && setState(prevState => ({ ...prevState, length: 8 }));
    width >=1440 && setState(prevState => ({ ...prevState, length: 9 }));
  }

  const handleTableSize = () => {
    state.button__text === 'Mai mult'
      ? (
        setState(prevState => ({
          ...prevState,
          button__text: 'Mai putin',
          length: data.table__rows.length
        }))
      )
      : (
        setState(prevState => ({
          ...prevState,
          button__text: 'Mai mult',
        })),
        setRowsNumber()
      )

    setTimeout(() => {
      QSAll('tr').forEach(row => {
        row.style.height = `${ QS('thead').clientHeight }px`
      })
    }, 25);
  }

  QSAll('tr').forEach(row => row.style.height = `${ QS('thead').clientHeight }px`);
  
  useEffect(setRowsNumber, [ width ]);

  return (
    <section className='prices | container' id='prices'>
      <h2 className='prices__title'>Preturi</h2>
      <table className='prices__table' border='1'>
        <colgroup>
          <col />
        </colgroup>
        
        <thead>
          <tr>
            <th className='prices__table__header'>Serviciu</th>
            <th id='time'>Timp</th>
            <th id='price'>Pret</th>
          </tr>
        </thead>
        
        <tbody className='prices__table__body'>
          {
            data.table__rows.map(( row, index ) => (
              index < state.length && (
                <TableRow
                  key={ 'table-row-' + ( index + 1 ) }
                  index={ index }
                  price={ row.price }
                  service={ row.service }
                  time={ row.minutes }
                />
              )
            ))
          }
        </tbody>
      </table>

      <button
        className='prices__button'
        onClick={ handleTableSize }
      >
        { state.button__text }
      </button>
    </section>
  )
}

export default Prices