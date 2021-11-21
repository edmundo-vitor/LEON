import { Roles } from "../utils/auth"

export type Role = {
   id?: number;
   authority: Roles;
}

export const roleTranslated = (authority: Roles) => {
   switch (authority) {
      case 'ROLE_ADMIN': return 'Administrador';
         break;
      case 'ROLE_MANAGER': return 'Gerente';
         break;
      case 'ROLE_CLERK': return 'Atendente';
         break;
      case 'ROLE_USER': return 'Usuário';
         break;
   }
}