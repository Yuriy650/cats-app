import {BreedsInterface} from "../../interfaces/breeds.interface";

export interface IBreedState {
  breeds: BreedsInterface[] | null;
}

export const initialBreedState: IBreedState = {
  breeds: null
}
