// Node Modules
import PropTypes from 'prop-types';

// Style
import './TableRow.css';

const TableRow = props => {
  return (
    <tr className='table__row'>
      <td className='table__row__services'>
        {
          window.innerWidth >= 540
            ? ( props.index + 1 + '. ') + props.service
            : props.service
        }
      </td>

      <td
        className='table__row__times'
        title={ window.innerWidth < 540 ? 'MINUTE' : '' }
      >
        {
          window.innerWidth >= 540
            ? props.time + ' minute'
            : props.time
        }
      </td>

      <td
        className='table__row__prices'
        title={ window.innerWidth < 540 ? 'RON' : '' }
      >
        {
          window.innerWidth >= 540
            ? props.price + ' ron'
            : props.price
        }
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number,
  price: PropTypes.number,
  service: PropTypes.string,
  time: PropTypes.number
}

export default TableRow