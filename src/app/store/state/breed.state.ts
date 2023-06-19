import {IBreeds} from "../../interfaces/breeds.interface";

export interface IBreedState {
  breeds: IBreeds[] | null;
}

export const initialBreedState: IBreedState = {
  breeds: null
}
