import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WebRequestService} from "../../services/web-request.service";
import * as CatActions from "../../store/actions/cat.actions";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {Observable} from "rxjs";
import {IBreeds} from "../../interfaces/breeds.interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() set currentPage(page: number) {
    this.imagesForm.patchValue({page: page});
    this.onSubmit();
  }
  public orders = ['ASC', 'DESC', 'RAND'];
  public limits = [5, 10, 20, 50, 100];
  public breeds$: Observable<IBreeds[]>;
  public imagesForm: FormGroup = this.fb.group({
    breed_ids: [null],
    order: [null],
    limit: [10],
    page: [null],
    has_breeds: [null]
  });

  constructor(private fb: FormBuilder,
              private requestService: WebRequestService,
              private _store: Store<IAppState>) {}

  public ngOnInit() {
    this.breeds$ = this.requestService.getAllBreeds();
  }

  public onSubmit() {
    const filter = this.imagesForm.value;
    this._store.dispatch(CatActions.GetFilteredCats({filter}));
  }
}


