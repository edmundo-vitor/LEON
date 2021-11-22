import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Branch } from '../../models/Branch';
import { Role, roleTranslated } from '../../models/Role';
import { BASE_URL, requestBackend } from '../../utils/request';
import style from './style.module.scss';

type ManagerProps = {
   isForEditing?: boolean;
}

export default function UserForm(props: ManagerProps) {

   const router = useRouter();

   const [managerName, setManagerName] = useState("");
   const [managerEmail, setManagerEmail] = useState("");
   const [managerPassword, setManagerPassword] = useState("");
   const [managerAddress, setManagerAddress] = useState("");
   const [managerPhone, setManagerPhone] = useState("");
   const [managerBranch, setManagerBranch] = useState(0);
   const [managerRole, setManagerRole] = useState(0);

   const [branches, setBranches] = useState<Branch[]>([])
   const [roles, setRoles] = useState<Role[]>([])

   useEffect(() => {
      if (props.isForEditing) {
         const params: AxiosRequestConfig = {
            method: 'GET',
            url: '/managers/' + router.query.id
         };
         requestBackend(params)
            .then(response => {
               setManagerName(response.data.name);
               setManagerEmail(response.data.authentication.email);
               setManagerAddress(response.data.address);
               setManagerPhone(response.data.phone);
               setManagerBranch(response.data.branches[0].id);
               setManagerRole(response.data.authentication.roles[0].id)
            });
      }

      requestBranches()
      requestRoles()
   }, []);

   function requestBranches() {
      const params: AxiosRequestConfig = {
         method: 'GET',
         url: '/branches'
      };
      requestBackend(params)
         .then(response => {
            setBranches(response.data.content);
         });
   }

   function requestRoles() {
      const params: AxiosRequestConfig = {
         method: 'GET',
         url: '/managers/roles'
      };
      requestBackend(params)
         .then(response => {
            setRoles(response.data);
         });
   }

   function renderBranchSelection() {
      return (
         <select name="branch" className="form-control"
            onChange={e => selectBranch(e.target.value)}>
            {branches.map((branch, index) => {
               return (
                  props.isForEditing ?
                     branch.id === managerBranch ?
                        <option key={index} value={branch.id} selected>{branch.name}</option>
                        :
                        <option key={index} value={branch.id}>{branch.name}</option>
                     :
                     <option key={index} value={branch.id}>{branch.name}</option>
               )
            })}
         </select>
      )
   }

   function selectBranch(id) {
      branches.map(branch => branch.id == id ? setManagerBranch(id) : null)
   }

   function renderRoleSelection() {
      return (
         <select name="role" className="form-control"
            onChange={e => selectRole(e.target.value)}>
            {roles.map((role, index) => {
               return (
                  props.isForEditing ?
                     role.id === managerRole ?
                        <option key={index} value={role.id} selected>{roleTranslated(role.authority)}</option>
                        :
                        <option key={index} value={role.id}>{roleTranslated(role.authority)}</option>
                     :
                     <option key={index} value={role.id}>{roleTranslated(role.authority)}</option>
               )
            })}
         </select>
      )
   }

   function selectRole(id) {
      roles.map(role => role.id == id ? setManagerRole(id) : null)
   }

   function saveManager() {
      const params: AxiosRequestConfig = {
         method: 'POST',
         url: '/managers',
         data: {
            "name": managerName,
            "address": managerAddress,
            "phone": managerPhone,
            "branches": [
               {
                  "id": managerBranch === 0 ? branches[0].id : managerBranch
               }
            ],
            "authentication": {
               "email": managerEmail,
               "password": managerPassword,
               "roles": [
                  {
                     "id": managerRole === 0 ? roles[0].id : managerRole
                  }
               ]
            }
         }
      };
      requestBackend(params)
         .then(response => {
            router.push("/managers")
         })
         .catch(error => {
            toast.error("Erro ao criar!", {
               position: toast.POSITION.TOP_RIGHT
            });
         })
   }

   function updateBranch() {
      const params: AxiosRequestConfig = {
         method: 'PUT',
         url: '/managers/' + router.query.id,
         data: {
            "name": managerName,
            "address": managerAddress,
            "phone": managerPhone,
            "branches": [
               {
                  "id": managerBranch === 0 ? branches[0].id : managerBranch
               }
            ],
            "authentication": {
               "email": managerEmail,
               "password": "",
               "roles": [
                  {
                     "id": managerRole === 0 ? roles[0].id : managerRole
                  }
               ]
            }
         }
      };
      requestBackend(params)
         .then(response => {
            router.push("/managers")
         })
         .catch(error => {
            toast.error("Erro ao atualizar!", {
               position: toast.POSITION.TOP_RIGHT
            });
         })
   }

   return (
      <div className={style.body}>
         <ToastContainer autoClose={1500} />
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

            {!props.isForEditing ?
               <label className={style.label}>
                  Senha*
                  <input type="password" name="password" className="form-control"
                     onChange={e => setManagerPassword(e.target.value)} />
               </label>
               : null
            }

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
               {renderRoleSelection()}
            </label>

            <button type="button" className={style.registerButton}
               onClick={() => props.isForEditing ? updateBranch() : saveManager()}>
               {props.isForEditing ? "Salvar" : "Cadastrar"}
            </button>
         </form>
      </div>
   )
}
