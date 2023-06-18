import {Component, OnInit} from '@angular/core';
import {WebRequestService} from "../../services/web-request.service";
import {Observable} from "rxjs";
import {CatImage} from "../../interfaces/cat-image.interface";
import {Router} from "@angular/router";
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from "@ngrx/store";
import * as CatActions from '../../store/actions/cat.actions';
import {selectAllCats} from "../../store/selectors/cat.selector";
import {GetCurrentCatsPage} from "../../store/actions/cat.actions";

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})

export class ImagesListComponent implements OnInit{
  public currentPage: number = 0;
  public cats$: Observable<CatImage[] | null> = this._store.pipe(select(selectAllCats));

  constructor(public requestService: WebRequestService,
              public router: Router,
              private _store: Store<IAppState>) {}

  public ngOnInit() {
    this._store.dispatch(CatActions.GetCats());
  }

  public getCurrentCard(cat: CatImage) {
    if (cat.breeds.length > 0) {
      this.router.navigate(['/images', cat.id]);
    }
  }

  getPrevPage() {
    if (this.currentPage >= 1) this.currentPage--;
  }

  getNextPage() {
    const page = this.currentPage++;
    this._store.dispatch(GetCurrentCatsPage({page}))
  }
}
