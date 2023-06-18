import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {catReducers} from "./cat.reducers";
import {breedReducers} from "./breed.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  cats: catReducers,
  breeds: breedReducers
}
