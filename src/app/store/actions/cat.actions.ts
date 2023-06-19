import {createAction, props} from "@ngrx/store";
import {ICatImage} from "../../interfaces/cat-image.interface";
import {IImagesFilterForm} from "../../interfaces/images-filter-form.interface";

export enum ECatActions {
  GetCats = '[Cat] Get Cats',
  GetCatsSuccess = '[Cat] Get Cats Success',
  GetFilteredCats = '[Cat] Get Filtered Cats',
  GetCurrentCatsPage = '[Cat] Get Current Cats Page',
  GetCat = '[Cat] Get Cat',
  GetCatSuccess = '[Cat] Get Cat Success'
}

export const GetCats = createAction(
  ECatActions.GetCats
)

export const GetCatsSuccess = createAction(
  ECatActions.GetCatsSuccess,
  props<{cats: ICatImage[]}>()
)

export const GetFilteredCats = createAction(
  ECatActions.GetFilteredCats,
  props<{filter: IImagesFilterForm}>()
)

export const GetCurrentCatsPage = createAction(
  ECatActions.GetCurrentCatsPage,
  props<{page: number | null}>()
)

export const GetCat = createAction(
  ECatActions.GetCat,
  props<{id: string}>()
)

export const GetCatSuccess = createAction(
  ECatActions.GetCatSuccess,
  props<{cat: ICatImage}>()
)
