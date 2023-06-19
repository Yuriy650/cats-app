import {ICatImage} from "../../interfaces/cat-image.interface";

export interface ICatState {
  cats: ICatImage[] | null,
  selectedCat: ICatImage | null,
  currentPage: number | null
}

export const initialCatState: ICatState = {
  cats: null,
  selectedCat: null,
  currentPage: null
}
