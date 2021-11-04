export type Plan = {
   id: number;
   name: string;
   price: number;
   modalityId: number[];
   image: string;
}

export const plansList: Plan[] = [
   {
      id: 1,
      name: "Pilates",
      price: 60.00,
      modalityId: [1],
      image: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3127792:1629973071/pilates.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=4c1c639"
   },
   {
      id: 2,
      name: "Musculação",
      price: 50.00,
      modalityId: [2],
      image: "https://canalperguntas.com/wp-content/uploads/2021/04/fitness-men-woman-bodybuilders-1280x640.jpg"
   },
   {
      id: 3,
      name: "Pilates + Musculação",
      price: 90.00,
      modalityId: [1,2],
      image: "https://revistapilates.com.br/wp-content/uploads/2016/05/2fm-696x320.jpg"
   }
]