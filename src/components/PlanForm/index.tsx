import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

import { Plan, plansList } from '../../models/Plan';

type PlanProps = {
   planId?: string;
   isForEditing?: boolean;
}

export default function PlanForm(props: PlanProps) {

   let plan: Plan = {
      id: null,
      name: "",
      price: null,
      modalityId: [],
      image: ""
   };

   useEffect(() => {
      function findManager() {
         plansList.map(item => {
            if(item.id === Number(props.planId)){
               plan = item;
               setPlanName(item.name);
               setPlanPrice(item.price);
               setPlanModality(item.modalityId);
               setPlanImage(item.image);
            }
         });
      }

      if (props.isForEditing)
         findManager();
   }, []);
   
   const router = useRouter();

   const [planName, setPlanName] = useState(props.isForEditing ? plan.name : "");
   const [planPrice, setPlanPrice] = useState(props.isForEditing ? plan.price : "");
   const [planModality, setPlanModality] = useState(props.isForEditing ? plan.modalityId : "");
   const [planImage, setPlanImage] = useState(props.isForEditing ? plan.image : "");

   function registerPlan() {
      // Gerar um novo id e cadastrar o usuário no array de user
      plan.id = plansList.length + 1;
      plan.name = planName;
      plan.price = Number(planPrice);
      plan.modalityId = [Number(planModality)];
      plan.image = planImage;
      
      plansList.push(plan);
      router.push("/plans");
   }

   function editPlan(id: Number) {
      plansList.map(item => {
         if(item.id === id){
            item.name = planName;
            item.price = Number(planPrice);
            item.modalityId = [Number(planModality)];
            item.image = planImage;
         }
      });

      router.push("/plans");
   }

   return (
      <div className={style.body}>
         <form className={style.form}>

            <label className={style.label}>
               Nome*
               <input type="text" name="name" className="form-control"
                  value={planName}
                  onChange={e => setPlanName(e.target.value)} />
            </label>

            <label className={style.label}>
               Valor*
               <input type="text" name="price" className="form-control"
                  value={planPrice}
                  onChange={e => setPlanPrice(e.target.value)} />
            </label>

            {
               //Depois fazer o select com as modalidades
            }
            <label className={style.label}>
               Modalidade*
               <input type="text" name="modality" className="form-control"
                  value={planModality[0]}
                  onChange={e => setPlanModality(e.target.value)} />
            </label>

            <label className={style.label}>
               Imagem*
               <input type="file" name="file" className="form-control" 
                  onChange={e => setPlanImage(e.target.value)}/>
            </label>

            <button type="button" className={style.registerButton}
               onClick={() => props.isForEditing ? editPlan(Number(props.planId)) : registerPlan() }>
               {props.isForEditing ? "Salvar" : "Cadastrar"}
            </button>
         </form>
      </div>
   )
}
