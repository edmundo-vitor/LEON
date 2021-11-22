
export type User = {
   id?: number;
   email: string;
   password: string;
   name: string;
   address: string;
   phone: string;
   planId: number;
   active: boolean;
   restitution: number;
   branchId: number;
}

export const usersList: User[] = [
   {
      id: 1,
      email: "teste@gmail.com",
      password: "123123",
      name: "Teste",
      address: "Rua tal",
      phone: "84 999999999",
      planId: 1,
      branchId: 1,
      active: true,
      restitution: 0
   },
   {
      id: 2,
      email: "teste2@gmail.com",
      password: "123123",
      name: "Teste",
      address: "Rua tal 2",
      phone: "84 999999999",
      planId: 1,
      branchId: 1,
      active: true,
      restitution: 0
   },
   {
      id: 3,
      email: "teste3@gmail.com",
      password: "123123",
      name: "Teste",
      address: "Rua tal 3",
      phone: "84 999999999",
      planId: 1,
      branchId: 1,
      active: true,
      restitution: 0
   }
];