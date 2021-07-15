import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Game1Component } from './game1/game1.component';

const routes: Routes = [
  {
    path: 'game1',
    component: Game1Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
