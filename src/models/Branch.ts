export type Branch = {
   id?: number;
   name: string;
   state: string;
   road: string;
   streetNumber: number;
   city: string;
   description: string;
}
export const emptyBranch: Branch = {
   "id": 0,
   "name": "",
   "state": "",
   "road": "",
   "streetNumber": 0,
   "city": "",
   "description": ""
}