import {CatImage} from "../../interfaces/cat-image.interface";

export interface ICatState {
  cats: CatImage[] | null,
  selectedCat: CatImage | null,
  currentPage: number | null
}

export const initialCatState: ICatState = {
  cats: null,
  selectedCat: null,
  currentPage: null
}
