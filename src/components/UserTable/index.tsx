import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ButtonPrimary from '../ButtonPrimary';
import style from './style.module.scss';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../utils/request';

import { User } from '../../models/User';

export default function UserTable() {

   const [users, setUsers] = useState<User[]>([]);
   const [update, setUpdate] = useState<[]>([]);

   const router = useRouter();

   useEffect(() => {
      const params: AxiosRequestConfig = {
         method: 'GET',
         url: '/users'
      };

      requestBackend(params).then(response => {
         let listResponse = response.data.content as User[];
         setUsers(listResponse);
      });
 
   }, [update]);

   async function deleteUser(id:number) {
      const params: AxiosRequestConfig = {
         method: 'DELETE',
         url: `/users/${id}`
      };

      await requestBackend(params).then(response => {
         console.log(response);
      });

      setUpdate([]);
   }

   return (
      <div className={style.containerBody}>
         <div className={style.registerButton}>
            <div onClick={() => router.push("/users/register")}>
               <ButtonPrimary>Cadastrar novo usuário</ButtonPrimary>
            </div>
         </div>
         <div className={style.body}>
            <div className={style.table}>
               <table className="table table-striped">

                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>e-mail</th>
                        <th>Ações</th>
                     </tr>
                  </thead>

                  <tbody>
                     {users.map((user, index) => {
                        return (
                           <tr key={user.id}>
                              <td>{index + 1}</td>
                              <td>{user.name}</td>
                              <td>{user.authentication.email}</td>
                              <td className={style.button}>
                                 <button className="btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                       <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                       <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                 </button>

                                 <button onClick={() => router.push("/users/edit/" + user.id)}
                                    className="btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                       <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                 </button>

                                 <button className="btn btn-sm"
                                    onClick={() => deleteUser(user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                       <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                       <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                 </button>
                              </td>
                           </tr>
                        )
                     })}
                  </tbody>

               </table>
            </div>
         </div>
      </div>
   )
}
