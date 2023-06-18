import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";

const selectBreeds = (state: IAppState) => state.breeds;

export const selectAllBreeds = createSelector(
  selectBreeds,
  (state) => state.breeds
)
