import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

import { User, usersList } from '../../models/User';

type UserProps = {
   userId?: string;
   isForEditing?: boolean;
}

export default function UserForm(props: UserProps) {

   let user: User = {
      id: null,
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      branchId: null,
      planId: null,
      active: true,
      restitution: 0
   };

   useEffect(() => {
      function findUser() {
         if (props.isForEditing){
            usersList.map(item => {
               if(item.id === Number(props.userId)){
                  user = item;
                  setUserName(item.name);
                  setUserEmail(item.email);
                  setUserPassword(item.password);
                  setUserAddress(item.address);
                  setUserPhone(item.phone);

                  branches.map(branch => {
                     if(branch.id === item.branchId)
                        setUserBranch(branch.name);
                  });

                  plans.map(plan => {
                     if(plan.id === item.planId)
                        setUserPlan(plan.name);
                  });
               }
            });
         }
      }
      findUser();
   }, []);
   
   const router = useRouter();

   const [userName, setUserName] = useState(props.isForEditing ? user.name : "");
   const [userEmail, setUserEmail] = useState(props.isForEditing ? user.email : "");
   const [userPassword, setUserPassword] = useState(props.isForEditing ? user.password : "");
   const [userAddress, setUserAddress] = useState(props.isForEditing ? user.address : "");
   const [userPhone, setUserPhone] = useState(props.isForEditing ? user.phone : "");
   const [userBranch, setUserBranch] = useState(props.isForEditing ? user.branchId : "");
   const [userPlan, setUserPlan] = useState(props.isForEditing ? user.planId : "");

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

   const plans = [
      {
         id: 1,
         name: "Musculação"
      },
      {
         id: 2,
         name: "Pilates"
      },
      {
         id: 3,
         name: "Musculação + pilates"
      }
   ];

   function renderBranchSelection() {
      return (
         <select name="branch" className="form-control" onChange={(e) => setUserBranch(e.target.value)}>
            {branches.map((branch, index) => {
               return (
                  <option key={index} value={branch.id} >{branch.name} </option>
               )
            })}
            {props.isForEditing ? <option value={userBranch} defaultValue={userBranch}>{userBranch} </option> : null}
         </select>
      )
   }

   function renderPlanSelection() {
      return (
         <select name="plan" className="form-control" onChange={(e) => setUserPlan(e.target.value)}>
            {plans.map((plan, index) => {
               return (
                  <option key={index} value={plan.name}>{plan.name}</option>
               )
            })}
            {props.isForEditing ? <option value={userPlan} defaultValue={userPlan}>{userPlan}</option> : null}

         </select>
      )
   }

   function registerUser() {
      // Gerar um novo id e cadastrar o usuário no array de user
      user.id = usersList.length + 1;
      user.name = userName;
      user.email = userEmail;
      user.password = userPassword;
      user.address = userAddress;
      user.phone = userPhone;
      branches.map(branch => {
         if(branch.name === userBranch)
            user.branchId = branch.id;
      });
      plans.map(plan => {
         if(plan.name === userPlan)
         user.planId = plan.id;
      });
      user.active = true;
      user.restitution = 0;

      usersList.push(user);
      router.push("/users");
   }

   function editUser(id: Number) {
      usersList.map(item => {
         if(item.id === id){

            item.name = userName;
            item.email = userEmail;
            item.password = userPassword;
            item.address = userAddress;
            item.phone = userPhone;

            branches.map(branch => {
               if(branch.name === userBranch)
                  item.branchId = branch.id;
            });

            plans.map(plan => {
               if(plan.name === userPlan)
                  item.planId = plan.id;
            });
         }
      });

      router.push("/users");
   }

   return (
      <div className={style.body}>
         <form className={style.form}>

            <label className={style.label}>
               Nome*
               <input type="text" name="name" className="form-control"
                  value={userName}
                  onChange={e => setUserName(e.target.value)} />
            </label>

            <label className={style.label}>
               Telefone*
               <input type="text" name="telephone" className="form-control"
                  value={userPhone}
                  onChange={e => setUserPhone(e.target.value)} />
            </label>

            <label className={style.label}>
               Email*
               <input type="text" name="email" className="form-control"
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)} />
            </label>

            <label className={style.label}>
               Senha*
               <input type="password" name="password" className="form-control" 
                  onChange={e => setUserPassword(e.target.value)}/>
            </label>

            <label className={style.label}>
               Filial*
               {renderBranchSelection()}
            </label>

            <label className={style.label}>
               Endereço*
               <input type="text" name="road" className="form-control"
                  value={userAddress}
                  onChange={e => setUserAddress(e.target.value)} />
            </label>

            <label className={style.label}>
               Planos*
               {renderPlanSelection()}
            </label>

            <button type="button" className={style.registerButton}
               onClick={() => props.isForEditing ? editUser(Number(props.userId)) : registerUser() }>
               {props.isForEditing ? "Salvar" : "Cadastrar"}
            </button>
         </form>
      </div>
   )
}
