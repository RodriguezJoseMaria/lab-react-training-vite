function NumbersTable(props) {
  const numbersToLimit = () => {
    const numbers = [];
    for (let i = 1; i <= props.limit; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className="numbers">
      {numbersToLimit().map((number, index) => {
        return (
          <h2
            key={index + number}
            className={number % 2 === 0 ? "red-number" : "white-number"}
          >
            {number}
          </h2>
        );
      })}
    </div>
  );
}

export default NumbersTable;
