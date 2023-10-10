import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'favoritos',
    component : FavoritosComponent
  },
  {
    path: '**',
    redirectTo: 'home'
   }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
