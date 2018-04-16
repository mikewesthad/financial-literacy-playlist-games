import React from "react";

const DataElement = ({ children, ...props }) => (
  <td className="bill-table__data" {...props}>
    {children}
  </td>
);

const DataRow = ({ data, rowIndex, labels, mapping, isSelected, LastColumn }) => {
  const row = data[rowIndex];

  const columns = labels.map((label, colIndex) => {
    const { key, formatter } = mapping[colIndex];
    const formattedData = formatter ? formatter(row[key]) : row[key];
    const reactKey = `${rowIndex}-${colIndex}`;
    return <DataElement key={reactKey}>{formattedData}</DataElement>;
  });

  if (LastColumn) {
    columns.push(
      <td className="bill-table__data" key={`${rowIndex}-last}`}>
        <LastColumn rowIndex={rowIndex} data={data} />
      </td>
    );
  }

  return <tr className="bill-table__data-row">{columns}</tr>;
};

export default function BillTable(props) {
  const { data, mapping, selected } = props;
  if (data.length === 0) return null;

  const labels = mapping.map(elem => elem.label);

  const head = (
    <thead>
      <tr className="bill-table__header-row">
        {labels.map(label => (
          <th className="bill-table__header" key={label}>
            {label}
          </th>
        ))}
        <th className="bill-table__header" key="dispute">
          Dispute?
        </th>
      </tr>
    </thead>
  );

  return (
    <table className="bill-table">
      {head}
      <tbody>
        {data.map((row, i) => (
          <DataRow
            key={i}
            rowIndex={i}
            isSelected={selected.includes(row.name)}
            labels={labels}
            {...props}
          />
        ))}
      </tbody>
    </table>
  );
}
