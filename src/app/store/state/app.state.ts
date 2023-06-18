import {ICatState, initialCatState} from "./cat.state";
import {IBreedState, initialBreedState} from "./breed.state";

export interface IAppState {
  cats: ICatState;
  breeds: IBreedState;
}

export const initialAppState: IAppState = {
  cats: initialCatState,
  breeds: initialBreedState
}

export function getInitialState(): IAppState {
  return initialAppState;
}
