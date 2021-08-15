import { CoinRow } from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

export const TableCoins = ({ coins = [], search = '' }) => {
  const filterdCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <table className='table table-dark mt-4 table-hover'>
      <thead>
        <tr>
          {titles.map((title) => {
            return <td key={title}>{title}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {filterdCoins.map((coin, i) => {
          return <CoinRow key={coin.id} coin={coin} index={i + 1} />;
        })}
      </tbody>
    </table>
  );
};
