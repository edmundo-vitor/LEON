export type Manager = {
   id: number;
   name: string;
   email: string;
   password: string;
   address: string;
   phone: string;
   permission: string;
   branchId: number;
}

export const managersList: Manager[] = [
   {
      id: 1,
      name: "João",
      email: "jo@gmail.com",
      password: "123123",
      address: "Rua tal",
      phone: "84 999999999",
      permission: "Administrador",
      branchId: 1
   },
   {
      id: 2,
      name: "Maria",
      email: "maria@gmail.com",
      password: "123123",
      address: "Rua tal",
      phone: "84 999999999",
      permission: "Gerente",
      branchId: 2
   },
   {
      id: 3,
      name: "Carla",
      email: "carla@gmail.com",
      password: "123123",
      address: "Rua tal",
      phone: "84 999999999",
      permission: "Atendente",
      branchId: 1
   }
]