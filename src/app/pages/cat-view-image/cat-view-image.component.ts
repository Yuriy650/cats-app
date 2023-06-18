import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebRequestService} from "../../services/web-request.service";
import {Observable} from "rxjs";
import {CatImage} from "../../interfaces/cat-image.interface";
import * as CatActions from "../../store/actions/cat.actions";
import {IAppState} from "../../store/state/app.state";
import {select, Store} from "@ngrx/store";
import {selectCurrentCat} from "../../store/selectors/cat.selector";

@Component({
  selector: 'app-cat-view-image',
  templateUrl: './cat-view-image.component.html',
  styleUrls: ['./cat-view-image.component.scss']
})
export class CatViewImageComponent implements OnInit{
  public currentCatImage$: Observable<CatImage | null>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private requestService: WebRequestService,
              private _store: Store<IAppState>) {
  }

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['imageId']) {
        this._store.dispatch(CatActions.GetCat({id: params['imageId']}));
        this.currentCatImage$ = this._store.pipe(select(selectCurrentCat));
      }
    })
  }

  public backToLists() {
    this.router.navigate(['/images'])
  }
}
