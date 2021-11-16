import { Manager } from "./Manager"

export type News = {
   id?: number;
   title: string;
   description: string;
   imageUrl?: string;
   date: string;
   manager: {
      id: number
   };
}