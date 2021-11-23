
export type User = {
   id?: number;
   name: string;
   active: boolean;
   authentication: Authentication;
   restitutions: number;
   plan: string;
   payments: string[];
   schedules: string[];
}

type Authentication = {
   createdAt: string;
   updatedAt: string;
   id: number;
   email: string;
   password: string;
   manager: string;
   roles: string[];
   username: string;
   authorities: string[];
   accountNonExpired: boolean;
   accountNonLocked: boolean;
   credentialsNonExpired: boolean;
   enabled: boolean;
}
