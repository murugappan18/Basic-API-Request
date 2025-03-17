const Row = ({ item }) => {
  if (typeof item !== 'object') {
      return item;
  }
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => (
        <td key={key}>{<Row key={key} item={value} />}</td>
      ))}
    </tr>
  );
}

export default Row