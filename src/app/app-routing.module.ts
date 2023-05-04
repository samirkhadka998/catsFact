import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoreComponent } from './bore/bore.component';
import { CatComponent } from './cat/cat.component';

const routes: Routes = [{component : BoreComponent, path : 'bore'}, {component : CatComponent, path : 'cat'}, { path : '', redirectTo :'/cat',pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
