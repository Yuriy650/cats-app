import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CatViewImageComponent} from './pages/cat-view-image/cat-view-image.component';
import {ImagesListComponent} from './pages/images-list/images-list.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormComponent} from './pages/form/form.component';
import {CommonModule} from "@angular/common";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatRadioModule} from "@angular/material/radio";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {CatEffects} from "./store/effects/cat.effects";
import {BreedEffects} from "./store/effects/breed.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    CatViewImageComponent,
    ImagesListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CatEffects, BreedEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
