import * as CatActions from '../actions/cat.actions';
import {createReducer, on} from "@ngrx/store";
import {ICatState, initialCatState} from "../state/cat.state";

export const catReducers = createReducer(
  initialCatState,
  on(
    CatActions.GetCatsSuccess,
    (state: ICatState, {cats}) => ({
      ...state,
      cats: cats
    })
  ),
  on(
    CatActions.GetCurrentCatsPage,
    (state: ICatState, {page}) => ({
      ...state,
      currentPage: page
    })
  ),
  on(
    CatActions.GetCatSuccess,
    (state: ICatState, {cat}) => ({
      ...state,
      selectedCat: cat
    })
  )
)
