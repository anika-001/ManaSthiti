import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { Game1Component } from './game1/game1.component';
import { Game2createroomComponent } from './game2createroom/game2createroom.component';
import { ComicComponent } from './comic/comic.component';
import { Game2Component } from './game2/game2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { MallComponent } from './mall/mall.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: "saferoom",
    component: SaferoomComponent

  },
  {
    path: 'game1',
    component: Game1Component
  },
  {
    path: 'createroom',
    component: Game2createroomComponent
  },
  {
    path:'comic',
    component:ComicComponent
  },
  {
    path: 'jeopardy',
    component: Game2Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'beach',
    component: BeachComponent
  },
  {
    path: 'forest',
    component: ForestComponent
  },
  {
    path: 'mall',
    component: MallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
