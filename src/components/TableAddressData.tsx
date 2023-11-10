import { useState } from "react";
import address, { IAddress } from "../jsons/address";

const TableAddressData = () => {
  const [addressState, setAddressData] = useState(address);
  const handelDelete = (data: IAddress) => {
    setAddressData(addressState.filter((v, id) => id !== data.id));
  };

  return (
    <table className="border-separate border border-slate-400 ...">
      <thead>
        <tr>
          <th className="border border-slate-300 ...">name</th>
          <th className="border border-slate-300 ...">City</th>
          <th className="border border-slate-300 ...">action</th>
        </tr>
      </thead>
      <tbody>
        {addressState.map((data, index) => (
          <tr>
            <td className="border border-slate -300 p-2 ..." key={index}>
              {data.name}
            </td>
            <td className="border border-slate-300 p-2..." key={index}>
              {data.city}
            </td>
            <td className="border border-slate-300 ...">
              <button
                className="bg-transparent hover:bg-yellow-300 text-yellow-700 p-2
              font-semibold hover:text-white py-2 px-4 border border-blue-500
               hover:border-transparent rounded"
                onClick={() => handelDelete(data)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAddressData;
