interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

interface Films {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: String;
  imageUrl?: String;
}

export type { Pizza, NewPizza, PizzaToUpdate, Drink, Films };
