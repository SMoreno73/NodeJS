import { heroes } from "../data/heros";
//Search how to use alis for import something
export const findHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};
