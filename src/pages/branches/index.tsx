import type { NextPage } from 'next';
import { useState } from 'react';
import BranchTable from '../../components/BranchTable';

const Branch: NextPage = () => {

   const [branches, setBranches] = useState([{
      "id": 4,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 5,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 6,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 7,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 8,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 9,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 10,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 11,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 12,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 13,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }, {
      "id": 14,
      "name": "Filial Mossoró",
      "state": "Rio Grande do Norte",
      "road": "Rua Principal",
      "streetNumber": 123,
      "city": "Mossoró",
      "description": "Filial Principal"
   }])

   return (
      <div>
         <BranchTable branchesList={branches} setBranchesList={setBranches} />
      </div>
   );
}

export default Branch;