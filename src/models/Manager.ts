import { Branch } from "./Branch"

export type Manager = {
   id?: number;
   name: string;
   email: string;
   password: string;
   address: string;
   phone: string;
   permission: string;
   branches?: Branch[];
}