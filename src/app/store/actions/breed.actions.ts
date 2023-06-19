import {createAction, props} from "@ngrx/store";
import {IBreeds} from "../../interfaces/breeds.interface";

export enum EBreedActions {
  GetBreeds = '[Breed] Get Breeds',
  GetBreedsSuccess = '[Breed] Get Breeds Success'
}

export const GetBreeds = createAction(
  EBreedActions.GetBreeds
)

export const GetBreedsSuccess = createAction(
  EBreedActions.GetBreedsSuccess,
  props<{breeds: IBreeds[]}>()
)
