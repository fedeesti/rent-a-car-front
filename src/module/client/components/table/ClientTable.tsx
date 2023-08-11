import { Client } from '../../types/client';
import ClientRow from './ClientRow';

interface IProps {
  clients: Client[];
}

function ClientTable({ clients }: IProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500" data-cy="client-table-container">
        <thead
          className="text-xs text-gray-700 uppercase bg-gray-200"
          data-cy="client-thead-container"
        >
          <tr data-cy="thead-row-container">
            <th scope="col" className="px-6 py-3" data-cy="thead-row-name">
              Name
            </th>
            <th scope="col" className="px-6 py-3" data-cy="thead-row-nationality">
              Nationality
            </th>
            <th scope="col" className="px-6 py-3 text-center" data-cy="thead-row-action">
              Action
            </th>
          </tr>
        </thead>
        <tbody data-cy="client-tbody-container">
          {clients.map((client: Client) => (
            <ClientRow client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
