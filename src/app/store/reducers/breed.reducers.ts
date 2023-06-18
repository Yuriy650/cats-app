import * as BreedActions from '../actions/breed.actions';
import {createReducer, on} from "@ngrx/store";
import {IBreedState, initialBreedState} from "../state/breed.state";

export const breedReducers = createReducer(
  initialBreedState,
  on(
    BreedActions.GetBreedsSuccess,
    (state: IBreedState, {breeds}) => ({
      ...state,
      breeds: breeds
    })
  )
)
