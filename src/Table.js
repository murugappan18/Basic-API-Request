import Row from './Row';

const Table = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
            <tr>
                {Object.keys(items[0]).map((key) => (
                <th key={key}>{key}</th>
                ))}
            </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table