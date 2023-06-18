import {BreedsInterface} from "./breeds.interface";

export interface CatImage {
  id: string;
  url: string;
  breeds: BreedsInterface[],
  height: number;
  width: number
}
