import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatViewImageComponent} from "./pages/cat-view-image/cat-view-image.component";
import {ImagesListComponent} from "./pages/images-list/images-list.component";
import {FormComponent} from "./pages/form/form.component";

const routes: Routes = [
  {path: '', redirectTo: 'images', pathMatch: 'full'},
  {path: 'images', component: ImagesListComponent},
  {path: 'images/:imageId', component: CatViewImageComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
