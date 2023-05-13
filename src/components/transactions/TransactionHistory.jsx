import PropTypes from 'prop-types';
import t from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={t.transactionHistory}>
    <thead className={t.thead}>
      <tr>
        <th className={t.tType}>Type</th>
        <th className={t.tAmount}>Amount</th>
        <th className={t.tCurrency}>Currency</th>
      </tr>
    </thead>

    <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr className={t.tableRow} key={id}>
        <td className={t.tType}>{type}</td>
        <td className={t.tAmount}>{amount}</td>
        <td className={t.tCurrency}>{currency}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};


