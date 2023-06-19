import {IBreeds} from "./breeds.interface";

export interface ICatImage {
  id: string;
  url: string;
  breeds: IBreeds[],
  height: number;
  width: number
}
