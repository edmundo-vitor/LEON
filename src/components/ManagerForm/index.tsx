import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

import { Manager, managersList } from '../../models/Manager';

type ManagerProps = {
   managerId?: string;
   isForEditing?: boolean;
}

export default function UserForm(props: ManagerProps) {

   let manager: Manager = {
      id: null,
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      permission: "",
      branchId: null
   };

   useEffect(() => {
      function findManager() {
         managersList.map(item => {
            if(item.id === Number(props.managerId)){
               manager = item;
               setManagerName(item.name);
               setManagerEmail(item.email);
               setManagerPassword(item.password);
               setManagerAddress(item.address);
               setManagerPhone(item.phone);
               setManagerPermission(item.permission);

               branches.map(branch => {
                  if(branch.id === item.branchId)
                  setManagerBranch(branch.name);
               });
            }
         });
      }

      if (props.isForEditing)
         findManager();
   }, []);
   
   const router = useRouter();

   const [managerName, setManagerName] = useState(props.isForEditing ? manager.name : "");
   const [managerEmail, setManagerEmail] = useState(props.isForEditing ? manager.email : "");
   const [managerPassword, setManagerPassword] = useState(props.isForEditing ? manager.password : "");
   const [managerAddress, setManagerAddress] = useState(props.isForEditing ? manager.address : "");
   const [managerPhone, setManagerPhone] = useState(props.isForEditing ? manager.phone : "");
   const [managerBranch, setManagerBranch] = useState(props.isForEditing ? manager.branchId : "");
   const [managerPermission, setManagerPermission] = useState(props.isForEditing ? manager.permission : "");

   const branches = [{
      "id": 2,
      "name": "Filial Mossoró"
   }, {
      "id": 4,
      "name": "Filial Fortaleza"
   }, {
      "id": 5,
      "name": "Filial Natal"
   }, {
      "id": 3,
      "name": "Filial tres"
   }, {
      "id": 6,
      "name": "Filial seis"
   }];

   function renderBranchSelection() {
      return (
         <select name="branch" className="form-control" onChange={(e) => setManagerBranch(e.target.value)}>
            {branches.map((branch, index) => {
               return (
                  <option key={index} value={branch.id} >{branch.name} </option>
               )
            })}
            {props.isForEditing ? <option value={managerBranch} defaultValue={managerBranch}>{managerBranch} </option> : null}
         </select>
      )
   }

   function registerManager() {
      // Gerar um novo id e cadastrar o usuário no array de user
      manager.id = managersList.length + 1;
      manager.name = managerName;
      manager.email = managerEmail;
      manager.password = managerPassword;
      manager.address = managerAddress;
      manager.phone = managerPhone;
      manager.permission = managerPermission;
      branches.map(branch => {
         if(branch.name === managerBranch)
            manager.branchId = branch.id;
      });

      managersList.push(manager);
      router.push("/managers");
   }

   function editManager(id: Number) {
      managersList.map(item => {
         if(item.id === id){

            item.name = managerName;
            item.email = managerEmail;
            item.password = managerPassword;
            item.address = managerAddress;
            item.phone = managerPhone;
            item.permission = managerPermission;

            branches.map(branch => {
               if(branch.name === managerBranch)
                  item.branchId = branch.id;
            });
         }
      });

      router.push("/managers");
   }

   return (
      <div className={style.body}>
         <form className={style.form}>

            <label className={style.label}>
               Nome*
               <input type="text" name="name" className="form-control"
                  value={managerName}
                  onChange={e => setManagerName(e.target.value)} />
            </label>

            <label className={style.label}>
               Telefone*
               <input type="text" name="telephone" className="form-control"
                  value={managerPhone}
                  onChange={e => setManagerPhone(e.target.value)} />
            </label>

            <label className={style.label}>
               Email*
               <input type="text" name="email" className="form-control"
                  value={managerEmail}
                  onChange={e => setManagerEmail(e.target.value)} />
            </label>

            <label className={style.label}>
               Senha*
               <input type="password" name="password" className="form-control" 
                  onChange={e => setManagerPassword(e.target.value)}/>
            </label>

            <label className={style.label}>
               Filial*
               {renderBranchSelection()}
            </label>

            <label className={style.label}>
               Endereço*
               <input type="text" name="road" className="form-control"
                  value={managerAddress}
                  onChange={e => setManagerAddress(e.target.value)} />
            </label>

            <label className={style.label}>
               Permissão*
               <input type="text" name="permission" className="form-control"
                  value={managerPermission}
                  onChange={e => setManagerPermission(e.target.value)} />
            </label>

            <button type="button" className={style.registerButton}
               onClick={() => props.isForEditing ? editManager(Number(props.managerId)) : registerManager() }>
               {props.isForEditing ? "Salvar" : "Cadastrar"}
            </button>
         </form>
      </div>
   )
}
