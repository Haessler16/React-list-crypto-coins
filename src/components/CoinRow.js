export const CoinRow = ({ coin, index }) => {
  const price_color =
    coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger';
  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={`${coin.name} img`}
          width='5%'
          className='img-fluid me-4'
        />
        <span>{coin.name}</span>
        <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
      </td>
      <td>${coin.current_price}</td>
      <td className={price_color}>{coin.price_change_percentage_24h}%</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};
