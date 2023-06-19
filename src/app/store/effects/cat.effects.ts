import {Injectable} from "@angular/core";
import {concatMap, exhaustMap, forkJoin, map, mergeMap, Observable, switchMap, tap} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {WebRequestService} from "../../services/web-request.service";
import {IAppState} from "../state/app.state";
import * as CatActions from '../actions/cat.actions';
import {ICatImage} from "../../interfaces/cat-image.interface";

@Injectable()
export class CatEffects {
  public getCats$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(CatActions.GetCats),
      switchMap(() => this._requestService.getAllCatsImage().pipe(
        map((cats: ICatImage[]) => CatActions.GetCatsSuccess({
          cats
        }))
      ))
    )
  );

  public getFilteredCats$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(CatActions.GetFilteredCats),
      concatMap(payload => this._requestService.getAllCatsImage(payload.filter).pipe(
        map(cats =>  CatActions.GetCatsSuccess({
          cats
        }))
      ))
    )
  )

  public getCat$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(CatActions.GetCat),
      switchMap(payload => this._requestService.getCurrentCatByImageId(payload.id).pipe(
          map((cat: ICatImage) => CatActions.GetCatSuccess({
            cat
          }
          )
          )
        )
      )
    )
  )

  constructor(private _actions$: Actions,
              private _requestService: WebRequestService,
              private _store: Store<IAppState>) {
  }
}
