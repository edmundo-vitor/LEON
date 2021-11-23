import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../utils/request';

import { User } from '../../models/User';

type UserProps = {
   userId?: string;
   isForEditing?: boolean;
}

export default function UserForm(props: UserProps) {

   const [update, setUpdate] = useState<[]>([]);

   const [user, setUser] = useState<User>({
      id: 0,
      name: '',
      active: true,
      authentication: {
         createdAt: '',
         updatedAt: '',
         id: 0,
         email: '',
         password: '',
         manager: '',
         roles: [],
         username: '',
         authorities: [],
         accountNonExpired: true,
         accountNonLocked: true,
         credentialsNonExpired: true,
         enabled: true
      },
      restitutions: 0,
      plan: '',
      payments: [],
      schedules: []
   });

   // let user: User = {
   //    id: null,
   //    name: "",
   //    email: "",
   //    password: "",
   //    address: "",
   //    phone: "",
   //    branchId: null,
   //    planId: null,
   //    active: true,
   //    restitution: 0
   // };

   useEffect(() => {
      const params: AxiosRequestConfig = {
         method: 'GET',
         url: `/users/${props.userId}`
      };

      requestBackend(params).then(response => {
         let userResponse = response.data;

         setUser(userResponse);
      });
 
   }, [update]);
   
   const router = useRouter();

   // const [userName, setUserName] = useState(props.isForEditing ? user.name : "");
   // const [userEmail, setUserEmail] = useState(props.isForEditing ? user.email : "");
   // const [userPassword, setUserPassword] = useState(props.isForEditing ? user.password : "");
   // const [userAddress, setUserAddress] = useState(props.isForEditing ? user.address : "");
   // const [userPhone, setUserPhone] = useState(props.isForEditing ? user.phone : "");
   // const [userBranch, setUserBranch] = useState(props.isForEditing ? user.branchId : "");
   // const [userPlan, setUserPlan] = useState(props.isForEditing ? user.planId : "");


   // function renderBranchSelection() {
   //    return (
   //       <select name="branch" className="form-control" onChange={(e) => setUserBranch(e.target.value)}>
   //          {branches.map((branch, index) => {
   //             return (
   //                <option key={index} value={branch.id} >{branch.name} </option>
   //             )
   //          })}
   //          {props.isForEditing ? <option value={userBranch} defaultValue={userBranch}>{userBranch} </option> : null}
   //       </select>
   //    )
   // }

   // function renderPlanSelection() {
   //    return (
   //       <select name="plan" className="form-control" onChange={(e) => setUserPlan(e.target.value)}>
   //          {plans.map((plan, index) => {
   //             return (
   //                <option key={index} value={plan.name}>{plan.name}</option>
   //             )
   //          })}
   //          {props.isForEditing ? <option value={userPlan} defaultValue={userPlan}>{userPlan}</option> : null}

   //       </select>
   //    )
   // }

   function registerUser() {
      // Gerar um novo id e cadastrar o usuário no array de user
      // user.id = usersList.length + 1;
      // user.name = userName;
      // user.email = userEmail;
      // user.password = userPassword;
      // user.address = userAddress;
      // user.phone = userPhone;
      // branches.map(branch => {
      //    if(branch.name === userBranch)
      //       user.branchId = branch.id;
      // });
      // plans.map(plan => {
      //    if(plan.name === userPlan)
      //    user.planId = plan.id;
      // });
      // user.active = true;
      // user.restitution = 0;

      // usersList.push(user);
      // router.push("/users");
   }

   function editUser(id: Number) {
      
      const params: AxiosRequestConfig = {
         method: 'PUT',
         url: `/users/${id}`,
         data: user
      };

      requestBackend(params).then(response => {
         console.log(response.data);
      });
      
      router.push("/users");
   }

   console.log(user);
   console.log(props.userId);

   return (
      <div className={style.body}>
         <form className={style.form}>

            <label className={style.label}>
               Nome*
               <input type="text" name="name" className="form-control"
                  value={user.name || ''}
                  onChange={e => setUser(prevState => ({
                     ...prevState,
                     name: e.target.value
                  }))} />
            </label>

            {/* <label className={style.label}>
               Telefone*
               <input type="text" name="telephone" className="form-control"
                  value={userPhone}
                  onChange={e => setUserPhone(e.target.value)} />
            </label> */}

            <label className={style.label}>
               Email*
               <input type="text" name="email" className="form-control"
                  value={user.authentication.email || ''}
                  onChange={e => setUser(prevState => ({
                     ...prevState,
                     email: e.target.value
                  }))} />
            </label>

            <label className={style.label}>
               Senha*
               <input type="password" name="password" className="form-control" 
                  onChange={e => setUser(prevState => ({
                     ...prevState,
                     password: e.target.value
                  }))}/>
            </label>

            {/* <label className={style.label}>
               Filial*
               {renderBranchSelection()}
            </label> */}

            {/* <label className={style.label}>
               Endereço*
               <input type="text" name="road" className="form-control"
                  value={userAddress}
                  onChange={e => setUserAddress(e.target.value)} />
            </label> */}

            {/* <label className={style.label}>
               Planos*
               {renderPlanSelection()}
            </label> */}

            <button type="button" className={style.registerButton}
               onClick={() => props.isForEditing ? editUser(Number(props.userId)) : registerUser() }>
               {props.isForEditing ? "Salvar" : "Cadastrar"}
            </button>
         </form>
      </div>
   )
}
