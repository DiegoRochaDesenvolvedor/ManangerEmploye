import React from 'react';


interface DynamicTableProps {
  data: Array<Record<string, any>>;
  color: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ data, color }) => {
  const columnHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table style={{ width: '500px', margin: '0 auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columnHeaders.map((header, index) => (
            <th key={index} style={{ fontFamily: 'Arial' }}>{header}</th>
          ))}
          <th style={{ fontFamily: 'Arial' }}>Ações</th>
        </tr>
      </thead>
      <tbody>
      {data.map((row, rowIndex) => (
  <tr key={rowIndex}>
    {columnHeaders.map((column, columnIndex) => (
      <td key={columnIndex} style={{ fontFamily: 'Arial', color: 'rgb(155, 155, 155)', borderBottom: '1px solid rgb(202, 202, 202)', textAlign: 'center', padding: '10px' }}>{row[column]}</td>
    ))}
      <td style={{ fontFamily: 'Arial', color: 'rgb(155, 155, 155)', borderBottom: '1px solid rgb(202, 202, 202)', textAlign: 'center', padding: '10px' }}>
        <button data-id={row.id} style={{background:"rgb(149, 237, 8)",border:"none",padding:"5px",borderRadius:"5px"}}>Atualizar</button>
        <button data-id={row.id} style={{background:"Grey",border:"none",padding:"5px",borderRadius:"5px", marginLeft:"10px"}}>Excluir</button>
      </td>
    </tr>
  ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;