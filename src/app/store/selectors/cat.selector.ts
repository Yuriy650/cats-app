import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";

const selectCats = (state: IAppState) => state.cats;

export const selectAllCats = createSelector(
  selectCats,
  (state) => state.cats
);

export const selectCurrentCat = createSelector(
  selectCats,
  (state) => state.selectedCat
)
