import { FC } from "react";
import "./styles.css";
interface ITable {
  columns: Tcolumn[];
  data: TCountries | undefined;
}

const Table: FC<ITable> = ({ columns, data }) => {
  const deepGet = (keys:any, row: ICountry, type: string | undefined) => {
    const keyArray = keys.split(".");
    const extractedValue = keyArray.reduce((obj:any, key:any) => {
      return obj?.[key];
    }, row);
    if (type === "image") {
      return <img src={extractedValue} style={{ height: 20 }} />;
    }
    return extractedValue;
  };
  return (
    <table id="table">
      <thead>
        <tr>
          {columns.map((columns) => {
            return (
              <th key={columns.header} className="tr">
                {columns.header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                return (
                  <td key={column.accessor} className="tr">
                    {deepGet(column.accessor, row, column.type)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
