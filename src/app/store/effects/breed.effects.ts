import * as BreedActions from '../actions/breed.actions';
import {Injectable} from "@angular/core";
import {map, Observable, switchMap} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {WebRequestService} from "../../services/web-request.service";
import {IAppState} from "../state/app.state";
import {BreedsInterface} from "../../interfaces/breeds.interface";

@Injectable()
export class BreedEffects {
  public geBreeds$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(BreedActions.GetBreeds),
      switchMap(() => this._requestService.getAllBreeds().pipe(
        map((breeds: BreedsInterface[]) => BreedActions.GetBreedsSuccess({
          breeds
        }))
      ))
    )
  )
  constructor(private _actions$: Actions,
              private _requestService: WebRequestService,
              private _store: Store<IAppState>) {
  }
}
