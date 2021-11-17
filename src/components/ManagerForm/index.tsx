import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Branch } from '../../models/Branch';
import { BASE_URL } from '../../utils/request';
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
   const [managerPermission, setManagerPermission] = useState("");
   const [managerBranch, setManagerBranch] = useState(0);

   const [branches, setBranches] = useState<Branch[]>([])

   useEffect(() => {
      if (props.isForEditing) {
         axios.get(BASE_URL + '/managers/' + router.query.id)
            .then(response => {
               setManagerName(response.data.name);
               setManagerEmail(response.data.email);
               setManagerAddress(response.data.address);
               setManagerPhone(response.data.phone);
               setManagerPermission(response.data.permission);
               setManagerBranch(response.data.branches[0].id);
            });
      }

      axios.get(BASE_URL + '/branches')
         .then(response => {
            setBranches(response.data.content);
         });
   }, []);

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

   function saveManager() {
      axios.post(BASE_URL + '/managers', {
         "name": managerName,
         "email": managerEmail,
         "password": managerPassword,
         "address": managerAddress,
         "phone": managerPhone,
         "permission": managerPermission,
         "branches": [
            {
               "id": managerBranch === 0 ? branches[0].id : managerBranch
            }
         ]
      })
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
      axios.put(BASE_URL + '/managers/' + router.query.id, {
         "name": managerName,
         "email": managerEmail,
         "address": managerAddress,
         "phone": managerPhone,
         "permission": managerPermission,
         "branches": [
            {
               "id": managerBranch === 0 ? branches[0].id : managerBranch
            }
         ]
      })
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
               <input type="text" name="permission" className="form-control"
                  value={managerPermission}
                  onChange={e => setManagerPermission(e.target.value)} />
            </label>

            <button type="button" className={style.registerButton}
               onClick={() => props.isForEditing ? updateBranch() : saveManager()}>
               {props.isForEditing ? "Salvar" : "Cadastrar"}
            </button>
         </form>
      </div>
   )
}
